export type BundleType = 'Basic' | 'Professional' | 'Premium';

export type BundleOffers = { 
    packageOffering: string;
    appliesToPackage: boolean;
}

export type BundleCardType = {
    bundleType: BundleType;
    packageOffers: Array<BundleOffers>;
    id: string;
}

export type PlatformStatsType = {
    videoLessonsNumber: number;
    coursesNumber: number;
    hoursNumber: number;
}