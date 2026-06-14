import { Mail, Phone, Globe } from "lucide-react";


const DATA_HEADER_NAVIGATE = [
    {
        name: "aboutUs",
        link: "/",
    },
    {
        name: "contactUs",
        link: "/contact",
    },
    {
        name: "freeDesignServices",
        link: "/free-design-services",
    },
    {
        name: "faqs",
        link: "/faqs",
    },
];

export type PopupItemType = {
    content: string;
    value: string;
};

export type PopupSectionType = {
    name: string;
    list: PopupItemType[];
};

const DATA_HEADER_CONTACT = [
    {
        type: "email",
        content: "example@shopify.com",
        link: "mailto:example@shopify.com",
        icon: Mail,
    },
    {
        type: "phone",
        content: "(+1) 12345678901",
        link: "tel:+12345678901",
        icon: Phone,
    },
    {
        type: "language",
        content: "language",
        icon: Globe,
        link: "",
        children: [
            {
                name: 'Language',
                list: [
                    {
                        content: "english",
                        value: "en",
                    },
                    {
                        content: "vietnamese",
                        value: "vi",
                    },
                ]
            },
            {
                name: 'Currency',
                list: [
                    {
                        content: "usd",
                        value: "usd",
                    },
                    {
                        content: "vnd",
                        value: "vnd",
                    },
                ]
            },
        ]
    },
] satisfies readonly {
    type: string;
    content: string;
    link: string;
    icon: any;
    children?: PopupSectionType[];
}[];;

const FOOTER_SERVICE_BENEFITS = [
    {
        title: "warranty",
        icon: 'warranty',
    },
    {
        title: "allInclusive",
        icon: 'allInclusive',
    },
    {
        title: "delivery",
        icon: 'delivery',
    },
    {
        title: "return",
        icon: 'return',
    },
    {
        title: "assembly",
        icon: 'asembly',
    },
    {
        title: "disposal",
        icon: 'disposal',
    },
];

const DATA_FOOTER_SOCIAL_LINK = [
    {
        link: "https://www.facebook.com/",
        icon: 'facabook',
    },
    {
        link: "https://www.instagram.com/",
        icon: 'instagram',
    },
    {
        link: "https://www.pinterest.com/",
        icon: 'pinterest',
    },
    {
        link: "https://www.twitter.com/",
        icon: 'twitter',
    },
];

const DATA_FOOTER_MORE_INFOR = [
    {
        "helpInfo": [
            { title: "aboutUs", link: "/" },
            { title: "faqs", link: "/faqs" },
            { title: "contactUs", link: "/contact" },
            { title: "services", link: "/services" },
            { title: "blogs", link: "/blogs" },
        ]
    },
    {
        "topCollections": [
            { title: "furniture", link: "/furniture" },
            { title: "beds", link: "/beds" },
            { title: "sofas", link: "/sofas" },
            { title: "decor", link: "/decor" },
            { title: "lighting", link: "/lighting" },
        ]
    },
    {
        "holidays": [
            { title: "christmasShop", link: "/christmas-shop" },
            { title: "thanksgivingShop", link: "/thanksgiving-shop" },
            { title: "giftsShop", link: "/gifts-shop" },
            { title: "furniture", link: "/furniture" },
            { title: "christmasDecor", link: "/christmas-decor" },
        ]
    },
];

const DATA_FOOTER_PAYMENT = [
    { icon: 'visa' },
    { icon: 'mastercard' },
    { icon: 'american-express' },
    { icon: 'paypal' },
    { icon: 'dinners-club' },
    { icon: 'discover' },
];


export {
    DATA_HEADER_NAVIGATE,
    DATA_HEADER_CONTACT,
    FOOTER_SERVICE_BENEFITS,
    DATA_FOOTER_SOCIAL_LINK,
    DATA_FOOTER_MORE_INFOR,
    DATA_FOOTER_PAYMENT,
};


