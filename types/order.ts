import { ImageSourcePropType } from "react-native";

interface OrderProps {
    label: string;
    image: ImageSourcePropType;
    distance: string | number;
    rating: string | number
}

interface DeliveryProps {
    label: string;
    image: ImageSourcePropType;
    time: string | number;
    rating: string | number
}

interface SearchProps {
    image: ImageSourcePropType;
    name: string;
    rating: string | number;
    price: string | number;
    topService: boolean;
}

export type { OrderProps, DeliveryProps, SearchProps }