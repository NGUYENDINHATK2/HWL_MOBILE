
export interface StoryItemProps {
    id:string;
    name:string;
    image:string;
    release_date:string;
    description:string;
}

export interface ListStoryProps {
    title: string;
    data:Array<StoryItemProps>;
}