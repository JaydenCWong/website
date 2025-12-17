import type { Resource, Chapter, MiscResource } from "$lib/types/courses";

// Re-export types for convenience
export type { Resource, Chapter, MiscResource };

export const chapters: Chapter[] = [
    {
        number: 1,
        name: "Measurement",
        worksheets: [],
        videos: [],
    },
    {
        number: 2,
        name: "Trigonometry",
        worksheets: [],
        videos: [],
    },
    {
        number: 3,
        name: "Factors and Products",
        worksheets: [],
        videos: [],
    },
    {
        number: 4,
        name: "Roots and Powers",
        worksheets: [
            {
                title: "4.1 - Irrational Numbers",
                description: "Practice problems on irrational numbers",
                link: "https://drive.google.com/uc?export=download&id=1UemclKkaEtrSCLwiIv7Jzw8T7pbom3M1",
            },
        ],
        videos: [],
    },
    {
        number: 5,
        name: "Relations and Functions",
        worksheets: [],
        videos: [
            {
                title: "Relations and Functions | Algebra by The Organic Chemistry Tutor",
                duration: "12:26",
                link: "https://www.youtube.com/watch?v=wbBY2tTqXDA",
            },
        ],
    },
    {
        number: 6,
        name: "Linear Functions",
        worksheets: [],
        videos: [
            {
                title: "Linear Equations - Algebra by The Organic Chemistry Tutor",
                duration: "32:05",
                link: "https://www.youtube.com/watch?v=Ft2_QtXAnh8"
            },
            {
                title: "How To Solve Linear Equations In Algebra by The Organic Chemistry Tutor",
                duration: "19:37",
                link: "https://www.youtube.com/watch?v=7DPWeBszNSM",
            },
            {
                title: "Graphing On The Coordinate Plane Explained! by The Organic Chemistry Tutor",
                duration: "12:38",
                link: "https://www.youtube.com/watch?v=yaOf7ioCgFQ"
            },
        ],
    },
    {
        number: 7,
        name: "Systems of Linear Equations",
        worksheets: [],
        videos: [],
    },
];

export const miscResources: MiscResource[] = [
    {
        title: "Financial Literacy Simulator",
        description: "Interactive budgeting and financial planning tool",
        link: "https://financial-literacy.pages.dev",
        external: true,
    },
];
