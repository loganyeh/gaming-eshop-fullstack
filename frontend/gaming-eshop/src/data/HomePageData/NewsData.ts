export type BigArticleType = {
    id: number,
    url: string, 
    date: string,
    subtitle: string,
    description: string,
};

export type SmallArticleType = {
    id: number,
    url: string,
    boxicon: string,
    date: string,
    subtitle: string,
};

export const bigNewsArticlesData: BigArticleType[] = [
    {
        id: 1,
        url: "/newsArticlesImages/adventures_in_photography.avif",
        date: "05/13/26", 
        subtitle: "Make memories, uncover mysteries, and see the world a little differently with these games",
        description: "Do you like taking photos? Photography can range from capturing memories with your friends to seeing life around you in a completely different way. Photos can even share important, helpful messages that stick with a person for a long time.", 
    },
    {
        id: 2,
        url: "/newsArticlesImages/virtual_boy.avif",
        date: "05/13/26", 
        subtitle: "New update for Nintendo Switch Online + Expansion Pack members!",
        description: "Oh, hey, classic game fans! If you’ve been looking to create (or recreate) some retro memories, Nintendo Switch Online + Expansion Pack members* can get access to a wide variety of classic goodies from the following systems:", 
    }
];

export const smallNewsArticlesData: SmallArticleType[] = [
    {
        id: 1,
        url: "/newsArticlesImages/games_coming_in_may.avif",
        boxicon: 'bx bx-plus-medical text-2xl text-red-600', 
        date: "05/13/26", 
        subtitle: "See what games are arriving this May",
    },
    {
        id: 2,
        url: "/newsArticlesImages/switch_bundle.avif",
        boxicon: 'bx bxs-purchase-tag-alt text-2xl text-red-600 scale-x-[-1]', 
        date: "05/12/26", 
        subtitle: "Nintendo Switch 2: Choose Your Game Bundle launches this summer",
    },
    {
        id: 3,
        url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2026/become-the-legendary-archaeologist-in-indiana-jones-and-the-great-circle/1920x1080_availablenow",
        boxicon: 'bx bx-plus-medical text-2xl text-red-600', 
        date: "05/13/26", 
        subtitle: "Become the legendary archaeologist in Indiana Jones and the Great Circle",
    },
    {
        id: 4,
        url: "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/en_US/articles/2025/nintendo-switch-pricing-update/Nintendo-RT-logo",
        boxicon: 'bx bxs-comment-detail text-2xl text-red-600', 
        date: "05/07/26", 
        subtitle: "Price Revision for Nintendo Switch 2 System",
    },
];