export interface NewChapterProps{
    id:string;
    idStory:string;
    nameStory:string;
    nameChapter:string;
    image:string;
    description:string;
    timeAgo:string;
    chapter :string;
}

export interface ListNewChapterProps {
    data:Array<NewChapterProps>;
}