export interface StoryProps {
    id: string;
    name: string;
    image: string;
    release_date : string;
    description : string;
}
export interface ChapterProps {
    id: string;
    idStory: string;
    nameStory: string;
    nameChapter: string;
    image: string;
    description: string;
    timeAgo: string;
    chapter: string;
}
