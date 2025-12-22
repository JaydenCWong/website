import type { Resource, Chapter, MiscResource } from "$lib/types/courses";

// Re-export types for convenience
export type { Resource, Chapter, MiscResource };

export const chapters: Chapter[] = [
    {
        number: 1,
        name: "Measurement",
        worksheets: [],
        videos: [
            {
                title: "Converting Units With Conversion Factors - Metric System Review & Dimensional Analysis by The Organic Chemistry Tutor",
                duration: "38:41",
                link: "https://www.youtube.com/watch?v=eK8gXP3pImU",
            },
            {
                title: "Volume and Surface Area of a Cone & Lateral Area Formula- Basic Geometry by The Organic Chemistry Tutor",
                duration: "13:47",
                link: "https://www.youtube.com/watch?v=JN3LhO0YXw8",
            },
        ],
    },
    {
        number: 2,
        name: "Trigonometry",
        worksheets: [],
        videos: [
            {
                title: "Trigonometry For Beginners by The Organic Chemistry Tutor",
                duration: "24:35",
                link: "https://www.youtube.com/watch?v=PUB0TaZ7bhA",
            },
            {
                title: "Basic trigonometry by Khan Academy",
                duration: "10:39",
                link: "https://www.youtube.com/watch?v=Jsiy4TxgIME",
            },
        ],
    },
    {
        number: 3,
        name: "Factors and Products",
        worksheets: [],
        videos: [
            {
                title: "Factoring Trinomials & Polynomials, Basic Introduction by The Organic Chemistry Tutor",
                duration: "59:11",
                link: "https://www.youtube.com/watch?v=-4jANGlJRSY",
            },
        ],
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
            {
                title: "4.2 - Mixed Radicals",
                description: "Practice problems on mixed radicals",
                link: "https://docs.google.com/document/d/1AXq4t0pZQbRAu45mbXeqTVwvUoUHfruq_z1l2uMgWVg/export?format=docx",
            },
            {
                title: "4.3 - Fractional Exponents",
                description: "Practice problems on fractional exponents",
                link: "https://docs.google.com/document/d/1ORWDtcu51_FtjL47RqVLAYUNqMcZNaX3AZHN2k2pFyA/export?format=docx"
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
            {
                title: "Function Notation by Khan Academy",
                duration: "13:41",
                link: "https://www.youtube.com/watch?v=kvGsIo1TmsM",
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
            {
                title: "Slope Intercept Form & Point Slope Form by Khan Academy",
                duration: "18:23",
                link: "https://www.youtube.com/watch?v=K_OI9LA54AA",
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
        link: "https://financial-literacy-simulator.jaydenwong.ca",
        external: true,
    },
    {
        title: "Conversion Formula Sheet",
        description: "Reference sheet for unit conversions and formulas",
        link: "https://drive.google.com/file/d/193fiiD2w9NZpXVDdskVyUWoCAaZ4RGIe/view?usp=sharing",
        external: true,
    },
    {
        title: "Tsunami Project Case File",
        description: "Case file for tsunami project",
        link: "https://docs.google.com/document/d/1FP8s5NjuPifkp46SdwquiX0OB-H0hiQP/export?format=docx",
        external: true,
    }
];
