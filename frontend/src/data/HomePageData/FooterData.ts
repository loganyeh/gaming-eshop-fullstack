export type FooterType = {
    header: string,
    categories: string[],
};

export const footerData: FooterType[] = [
    {
        header: "About Nintendo",
        categories: ["Careers", "Corporate Social Responsibility"],
    },
    {
        header: "Shop",
        categories: ["Games", "Hardware", "Merchandise", "Sales and deals", "Exclusives", "Nintendo Switch Online", "Nintendo Store US"],
    },
    {
        header: "Orders",
        categories: ["Order details", "Shipping info", "Refunds and returns", "FAQ"],
    },
    {
        header: "Support",
        categories: ["Nintendo Switch 2", "Nintendo Switch", "Nintendo Account", "Apps and othe products", "Other systems", "Service Center", "Nintendo product recycling", "Warranty", "Licensed product information"],
    },
    {
        header: "Parents",
        categories: ["Info for parents", "Parental controls"],
    },
    {
        header: "Privacy",
        categories: ["Privacy policy", "Parental controls"],
    },
    {
        header: "Community",
        categories: ["Community guidelines", "Cookies and interest-based ads"],
    },
    {
        header: "Documents and policies",
        categories: ["Health and safety precautions", "Wireless regulatory info", "Supply chain transparency"],
    },
];