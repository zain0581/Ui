export interface AddBlogpost {
    Title: string;
    ShortDescription: string;
    Content: string;
    FeatureImageUrl: string;
    UrlHandle: string;
    PublishedDate: Date;
    Author: string;
    IsVisible: boolean;
    Categories: string[];
}