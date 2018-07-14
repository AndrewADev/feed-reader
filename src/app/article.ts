import { UrlOverview } from "./url-overview";

export class Article {
    id: number;
    published_date: Date;
    level: number;
    title: string;
    body: string;
    categories: number[];
    url_action: UrlOverview;
}
