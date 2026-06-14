import { Mail, Phone, Globe } from "lucide-react";


const DATA_HEADER_NAVIGATE = [
    {
        name: "About Us",
        link: "/",
    },
    {
        name: "Contact Us",
        link: "/contact",
    },
    {
        name: "Free Design Services",
        link: "/free-design-services",
    },
    {
        name: "FAQs",
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
        content: "English (USD $)",
        icon: Globe,
        link: "",
        children: [
            {
                name: 'Language',
                list: [
                    {
                        content: "English",
                        value: "en",
                    },
                    {
                        content: "Vietnamese",
                        value: "vi",
                    },
                ]
            },
            {
                name: 'Currency',
                list: [
                    {
                        content: "United States (USD) $ ",
                        value: "usd",
                    },
                    {
                        content: "Vietnam (VND) đ",
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
        title: "5 Years Warranty",
        icon: 'warranty',
    },
    {
        title: "All-inclusive Pricing",
        icon: 'allInclusive',
    },
    {
        title: "Free Delivery", icon: 'delivery',

    },
    {
        title: "100-Day Returns", icon: 'return',

    },
    {
        title: "Free Assembly", icon: 'asembly',

    },
    {
        title: "Disposal Service", icon: 'disposal',

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
        "Help Info": [
            {
                title: "About Us",
                link: "/"
            },
            {
                title: "FAQs",
                link: "/faqs"
            },
            {
                title: "Contact Us",
                link: "/contact"
            },
            {
                title: "Services",
                link: "/services"
            },
            {
                title: "Blogs",
                link: "/blogs"
            },
        ]
    },
    {
        "Top Collections": [
            {
                title: "Furniture",
                link: "/furniture"
            },
            {
                title: "Beds",
                link: "/beds"
            },
            {
                title: "Sofas",
                link: "/sofas"
            },
            {
                title: "Decor",
                link: "/decor"
            },
            {
                title: "Lighting",
                link: "/lighting"
            },
        ]
    },
    {
        "Holidays": [
            {
                title: "Christmas Shop",
                link: "/christmas-shop"
            },
            {
                title: "Thanksgiving Shop",
                link: "/thanksgiving-shop"
            },
            {
                title: "Gifts Shop",
                link: "/gifts-shop"
            },
            {
                title: "Furniture",
                link: "/furniture"
            },
            {
                title: "Christmas Decor",
                link: "/christmas-decor"
            },
        ]
    },
];

const DATA_FOOTER_PAYMENT = [
    {
        icon: 'visa',
    },
    {
        icon: 'mastercard',
    },
    {
        icon: 'american-express',
    },
    {
        icon: 'paypal',
    },
    {
        icon: 'dinners-club',
    },
    {
        icon: 'discover',
    },
];


export {
    DATA_HEADER_NAVIGATE,
    DATA_HEADER_CONTACT,
    FOOTER_SERVICE_BENEFITS,
    DATA_FOOTER_SOCIAL_LINK,
    DATA_FOOTER_MORE_INFOR,
    DATA_FOOTER_PAYMENT,

};


