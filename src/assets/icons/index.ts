import { FooterIconImages } from "./footer";
import { SocialIconImages } from "./social";
import { PaymentIconImages } from "./payments";

export const IconsImages = {
    ...FooterIconImages,
    ...SocialIconImages,
    ...PaymentIconImages,
} as const;