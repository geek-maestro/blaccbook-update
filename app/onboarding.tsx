import { useEffect, useMemo, useState } from "react";
import { Image, StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from "react-native";
import Animated, {
	cancelAnimation,
	Easing,
	Extrapolation,
	interpolate,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withSequence,
	withTiming,
	type SharedValue,
} from "react-native-reanimated";
import { useAssets, type Asset } from "expo-asset";
import { Link, useNavigation } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from '@expo/vector-icons';

const slideDuration = 5000;

export default function WelcomeScreen() {
	const slides = useSlidesContent();

	const slidesAnimation = useSlidesAnimation({
		numSlides: slides.length,
		startIndex: 0,
		slideDuration,
	});
	const { numSlides, currentSlideIndex, handleNextSlide, totalProgress, startSlideIndex } =
		slidesAnimation;

	const currentSlide = slides[currentSlideIndex];

	return (
		<SafeAreaView style={[styles.container, {backgroundColor: currentSlide ? currentSlide.bgColor : "white"}]}>
            <View style={[styles.background, {backgroundColor: currentSlide ? currentSlide.bgColor : "white"}]} />
			<Image
                style={styles.image}
				source={{uri: currentSlide?.image?.uri as any}}
			/>

			<View style={styles.content}>
				<View style={styles.textContainer}>
					<Text
						style={[styles.title, {color: currentSlide ? currentSlide.color : "black"}]}
					>
						{currentSlide?.title}
					</Text>
					<Text
						style={styles.description}
					>
						{currentSlide?.description}
					</Text>

                    <View style={styles.progressContainer}>
                        <SlidesProgress
                            numSlides={numSlides}
                            startSlideIndex={startSlideIndex}
                            progress={totalProgress}
                            currentSlideColor={currentSlide.color}
                        />
                    </View>
				</View>
			</View>
            <View style={styles.footer}>
                <Link href="/auth" asChild replace>
                    <TouchableOpacity 
                        onPress={() => AsyncStorage.setItem("@BlaccBook:hasSeenOnboarding", "true")}
                        style={styles.skipButton}
                    >
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                </Link>
                
                <TouchableOpacity 
                    style={[styles.nextButton, {backgroundColor: currentSlide.color}]}
                    onPress={handleNextSlide}
                >
                    <Ionicons name="chevron-forward" size={20} color="white" />
                </TouchableOpacity>
            </View>
		</SafeAreaView>
	);
}

type SlideContent = {
	image: Asset | undefined;
	title: string;
	description: string;
    color: string;
    bgColor: string;
};

const useSlidesContent = (): SlideContent[] => {
	const [assets] = useAssets([
		require("../assets/images/products.png"),
		require("../assets/images/invest.png"),
		require("../assets/images/services.png"),
	]);

	return useMemo<SlideContent[]>(() => {
		return [
			{
				image: assets?.[0],
				title: "Discover Products And Services",
				description:
					"An Unraveled Selection of products and Services for whatever you want from black-owned Businesses",
                color: "#2174EE",
                bgColor: "#F3F8FF"
			},
			{
				image: assets?.[1],
				title: "Invest in Black Owned  Businesses",
				description:
					"Make your preferred choice on the type of business you would want to invest in",
                color: "#03812E",
                bgColor: "#F3FFF7"
			},
			{
				image: assets?.[2],
				title: "Find Services You Need For Any Occasion",
				description:
					"Find hottest deals based on your preferred choice of service for an occasion",
                color: "#B18C12",
                bgColor: "#FFFCF1"
			},
		] satisfies SlideContent[];
	}, [assets]);
};

const useSlidesAnimation = (args: {
	numSlides: number;
	startIndex: number;
	slideDuration: number;
}) => {
    const navigate = useNavigation()
	const { numSlides, startIndex: _startIndex, slideDuration } = args;

	const startIndex = useMemo(() => _startIndex % numSlides, []);
	const [currIndex, setCurrIndex] = useState(startIndex);
	const totalProgress = useSharedValue(startIndex);

    const handleNextSlide = async () => {
        if (currIndex < numSlides - 1) {
            setCurrIndex(currIndex + 1);
        } else {
            navigate.navigate('auth' as never);
            AsyncStorage.setItem("@BlaccBook:hasSeenOnboarding", "true")
        }
    }

	// start the animation
	useEffect(() => {
		const sequences = Array.from({ length: numSlides }, (_, i) => {
			return withTiming(
				i + 1,
				{ duration: slideDuration, easing: Easing.linear },
				(completed) => completed && runOnJS(setCurrIndex)((i + 1) % numSlides),
			);
		});
		const infiniteRepeat = withRepeat(withSequence(...sequences), -1, false);
		const reset = withTiming(0, { duration: 0, easing: Easing.linear });

		totalProgress.value =
			startIndex === 0
				? infiniteRepeat
				: withSequence(...sequences.slice(startIndex), reset, infiniteRepeat);
	}, []);

	// cancel the animation when the component is unmounting
	useEffect(() => () => cancelAnimation(totalProgress), []);

	return {
		numSlides,
		startSlideIndex: startIndex,
		currentSlideIndex: currIndex,
        handleNextSlide,
		totalProgress,
	};
};

type SlideProgressProps = {
	startSlideIndex?: number;
	progress: SharedValue<number>;
	numSlides: number;
	currentSlideColor: string;
};

const SlidesProgress: React.FC<SlideProgressProps> = (props) => {
	const { numSlides, progress, currentSlideColor } = props;
	const indicators = useMemo(
		() =>
			Array.from({ length: numSlides }, (_, i) => (
				<SlideProgressIndicator key={i} index={i} progress={progress} color={currentSlideColor} />
			)),
		[numSlides, currentSlideColor],
	);
	return (
		<View style={styles.progressBarContainer}>
			{indicators}
		</View>
	);
};

type ProgressIndicatorItemProps = {
	index: number;
	progress: SharedValue<number>;
    color: string;
};

const SlideProgressIndicator: React.FC<ProgressIndicatorItemProps> = ({
	index,
	progress,
    color
}) => {
	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					scaleX: interpolate(
						progress.value,
						[index, index + 1],
						[0, 1],
						Extrapolation.CLAMP,
					),
				},
			],
		};
	});
	return (
		<View
			style={[styles.progressBar, {backgroundColor: color + '30'}]}
		>
			<Animated.View
				style={[
					styles.progressBarFill,
					animatedStyle,
					{ transformOrigin: "left", backgroundColor: color }
				]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    background: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
        marginTop: 60
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        marginTop: -20
    },
    textContainer: {
        width: '100%',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 38,
        marginBottom: 16,
        color: '#000',
        textAlign: 'left',
        width: '90%'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 32,
        lineHeight: 24,
        textAlign: 'left',
        width: '85%'
    },
    progressContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24
    },
    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        width: 70,
    },
    progressBar: {
        height: 5,
        flex: 1,
        borderRadius: 2.5,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        width: '100%',
        borderRadius: 2.5,
    },
    footer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    skipButton: {
        padding: 8,
    },
    skipText: {
        fontSize: 16,
        color: '#1A9DFF',
    },
    nextButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 