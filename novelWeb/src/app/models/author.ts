export interface Authors {
    id: number;
    name: string;
    isFollowing: boolean;
    created: Date;
    updated: Date;
}

export interface AuthorAdd {
    name: string;
    isFollowing: boolean;
}