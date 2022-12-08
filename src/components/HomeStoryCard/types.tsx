export interface NewStoryProps{
    id:string;
    name:string;
    image:string;
    release_date:string;
    description:string;
}

export interface HomeStoryCardProps{
    data:Array<NewStoryProps>;
}

//     width: ${ScreenWidth * 0.67}px;