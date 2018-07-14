import { UrlOverview } from './url-overview';

export class Article {
    id: string;
    published_date: number;
    level: string;
    title: string;
    body: string;
    categories: string[];
    url_action: UrlOverview[];
    url_explanation: UrlOverview[];

    isDanger(): boolean {
        return '3' === this.level;
    }

    isWarning(): boolean {
        return '2' === this.level;
    }

    isGood(): boolean {
        return '1' === this.level;
    }
}
