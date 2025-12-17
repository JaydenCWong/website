// Centralized references data
// Add your citations here and use Citation/References components in blog posts

export interface Reference {
    author: string;
    year: number;
    title: string;
    shortCite: string;
    booktitle?: string;
    pages?: string;
    publisher?: string;
    url?: string;
}

export const references: Record<string, Reference> = {
    thurston2009: {
        author: "Cook, Mariana",
        year: 2009,
        title: "William Paul Thurston",
        shortCite: "Cook, 2009",
        booktitle: "Mathematicians: An Outer View of the Inner World",
        pages: "76-77",
        publisher: "Princeton University Press",
        url: "http://www.jstor.org/stable/j.ctt2jc8h2.37"
    },
    razbuten2025: {
        author: "Razbuten",
        year: 2025,
        title: "Failure is Weird",
        shortCite: "Razbuten, 2025",
        publisher: "YouTube",
        url: "https://www.youtube.com/watch?v=fMbVMO4FfHE"
    },
    blabbin2023: {
        author: "Karlsson, Andreas",
        year: 2023,
        title: "4 billion if statements",
        shortCite: "Karlsson, 2023",
        publisher: "Blabbin'",
        url: "https://andreasjhkarlsson.github.io/jekyll/update/2023/12/27/4-billion-if-statements.html"
    }
};
