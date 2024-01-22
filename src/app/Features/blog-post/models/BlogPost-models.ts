import { Category } from "../../Category/models/category.model";

export interface BlogPost {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    featureImageUrl: string;
    urlHandle: string;
    publishedDate: Date;
    author: string;
    isVisible: boolean;
    categories :Category[];
}