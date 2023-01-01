import React, { FunctionComponent } from 'react';
export interface ListChapterItemProps {
    id:string,
    id_chapter:string,
    id_story:string,
    title:string,
    content:string,
    chapter:number,
    created_at:string,
    updated_at:string,
}

export interface ListChapterSectionProps {
    data:Array<ListChapterItemProps>
    listHeaderComponent?: React.ReactNode,
}