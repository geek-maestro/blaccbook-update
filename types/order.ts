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
    distance: string | number;
    time: string | number;
    rating: string | number;
    discount: string | number;
    price: string | number;
    vendor: string | number;
    topService: boolean
}

export type { OrderProps, DeliveryProps, SearchProps }