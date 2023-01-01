export interface ImageStoryProps {
    id: string;
    url: string;
}   

export interface ListImageStorySectionProps {
    listImageChapterStory: Array<ImageStoryProps>;
}