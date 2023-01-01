
export interface HistorySearchItemProps {
    //? props
    id : string;
    text_search : string;
    day_search : string;
}

export interface ListHistorySearchSectionProps {
    //? props
    title: string;
    title2: string;
    data:Array<HistorySearchItemProps>;
}