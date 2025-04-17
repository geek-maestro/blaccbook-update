import { ImageSourcePropType } from "react-native";

interface ForYouProps {
    image: ImageSourcePropType
    name: string
    rating: number
    reviews: string | number
    parent: string
}

interface ServiceItemProps {
    serviceId: string;
    merchantId: string;j
    serviceType: string;
    title: string;
    description: string;
    price: number;
    availability: Availability;
    location: Location;
    createdAt: string;
    updatedAt: string;
    isProduct: boolean;
    stock: number;
    reviews: Reviews;
    icon: string;
    images: ImageSourcePropType[];
}

interface Reviews {
    average: number;
    count: number;
}

interface Location {
    lat: number;
    lng: number;
}

interface Availability {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
}

export type { ForYouProps, ServiceItemProps }