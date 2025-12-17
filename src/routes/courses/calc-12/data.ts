import type { Resource, Chapter, MiscResource } from "$lib/types/courses";

// Re-export types for convenience
export type { Resource, Chapter, MiscResource };

export const chapters: Chapter[] = [
    {
        number: 1,
        name: "Limits and Derivatives",
        worksheets: [],
        videos: [
            {
                title: "Calculus 1 - Introduction to Limits by The Organic Chemistry Tutor",
                duration: "15:33",
                link: "https://www.youtube.com/watch?v=YNstP0ESndU",
            },
            {
                title: "Understand Calculus in 35 Minutes by The Organic Chemistry Tutor",
                duration: "35:07",
                link: "https://www.youtube.com/watch?v=WsQQvHm4lSw",
            },
            {
                title: "Definition of the Derivative by Khan Academy",
                duration: "21:04",
                link: "https://www.youtube.com/watch?v=ANyVpMS3HL4",
            },
            {
                title: "How to evaluate limits algebraically, calculus 1 tutorials by blackpenredpen",
                duration: "6:01",
                link: "https://www.youtube.com/watch?v=XH8_YqSxNSE",
            }
        ],
    },
    {
        number: 2,
        name: "Differentiation Rules",
        worksheets: [],
        videos: [
            {
                title: "Chain Rule For Finding Derivatives by The Organic Chemistry Tutor",
                duration: "20:09",
                link: "https://www.youtube.com/watch?v=HaHsqDjWMLU",
            },
            {
                title: "Product Rule and Quotient Rule by The Organic Chemistry Tutor",
                duration: "18:07",
                link: "https://www.youtube.com/watch?v=17X5g9QArTc",
            },
        ],
    },
    {
        number: 3,
        name: "Applications of Differentiation",
        worksheets: [],
        videos: [
            {
                title: "Related Rates Problems by The Organic Chemistry Tutor",
                duration: "38:32",
                link: "https://www.youtube.com/watch?v=I9mVUo-bhM8",
            },
            {
                title: "Finding Critical Points and Inflection Points by The Organic Chemistry Tutor",
                duration: "22:16",
                link: "https://www.youtube.com/watch?v=OhqNbQi9QPk",
            },
        ],
    },
    {
        number: 4,
        name: "Integrals",
        worksheets: [],
        videos: [],
    },
    {
        number: 5,
        name: "Applications of Integration",
        worksheets: [],
        videos: [],
    },
    {
        number: 6,
        name: "Techniques of Integration",
        worksheets: [],
        videos: [
            {
                title: "Integration By Parts by The Organic Chemistry Tutor",
                duration: "32:52",
                link: "https://www.youtube.com/watch?v=sWSLLO3DS1I",
            },
        ],
    },
    {
        number: 7,
        name: "Further Applications of Integration",
        worksheets: [],
        videos: [],
    },
    {
        number: 8,
        name: "Differential Equations",
        worksheets: [],
        videos: [],
    },
];

export const miscResources: MiscResource[] = [
    {
        title: "Essence of Calculus",
        description: "YouTube playlist by 3Blue1Brown",
        link: "https://www.youtube.com/watch?v=WUvTyaaNkzM&list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
        external: true,
    },
    {
        title: "Differential Equations",
        description: "YouTube playlist by 3Blue1Brown",
        link: "https://www.youtube.com/watch?v=p_di4Zn4wz4&list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6",
        external: true,
    },
    {
        title: "100 calculus limits (ft epsilon-delta definition and Riemann sum limits )",
        description: "YouTube video by blackpenredpen. This is a 7.5hr long video that goes through 100 limit problems in one take.",
        link: "https://www.youtube.com/watch?v=TglD4Y6lmQk",
        external: true,
    }
];
