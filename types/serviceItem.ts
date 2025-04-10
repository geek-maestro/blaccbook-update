import { ImageSourcePropType } from "react-native";

interface ForYouProps {
    image: ImageSourcePropType
    name: string
    rating: number
    reviews: string | number
    parent: string
}

export type { ForYouProps }