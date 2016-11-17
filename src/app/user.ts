class Author {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    posts: string;
}

export class User {
    id: number;
    author: Author;
    photos: string;
    title: string;
    body: string;
}
