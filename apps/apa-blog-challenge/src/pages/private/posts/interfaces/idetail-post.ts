export interface IComments {
    email: string;
    body: string;
}

export interface IDetailPost {
    userName: string;
    title: string;
    body: string;
    user: any;
    comments: IComments[];
}

