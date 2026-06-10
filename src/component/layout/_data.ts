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
                content: "English",
            },
            {
                content: "Vietnamese",
            },
        ]
    },
];

export { DATA_HEADER_NAVIGATE, DATA_HEADER_CONTACT };


