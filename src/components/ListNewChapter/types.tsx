export interface NewChapterProps{
    id:string;
    idStory:string;
    nameStory:string;
    nameChapter:string;
    timeAgo:string;
    chapter :number;
}

export interface ListNewChapterProps {
    data:Array<NewChapterProps>;
}