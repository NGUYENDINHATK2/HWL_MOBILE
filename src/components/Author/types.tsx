export interface AuthorItemProps {
    id: string;
    id_author: string;
    name: string;
    avatar: string;
    description: string;
    sum_story: number;
    sum_follower: number;
}

export interface AuthorProps {
    data: Array<AuthorItemProps>
}
