import {ApiClient} from "../ApiClient/ApiClient";

export class NewsClient extends ApiClient {
    url = `${process.env.REACT_APP_BASE_API_URI}?apikey=${process.env.REACT_APP_API_KEY}`;


    getNews(params: {}): Promise<Record<string, unknown>> {
        let url: string = `${this.url}${params}`;
        let data: {} = {
            method: "GET",
        };

        let responseData = {
            "status": "ok",
            "totalResults": 51,
            "articles": [
                {
                    "source": {
                        "id": "cnn-es",
                        "name": "CNN Spanish"
                    },
                    "author": "Luis Ernesto Quintana Barney",
                    "title": "Quién es Juan Merchan, el juez de origen latino que preside la acusación penal de Trump",
                    "description": "Cuando Donald Trump ingrese a un tribunal de Nueva York el martes, se enfrentará a un juez experimentado que no es ajeno a la órbita del expresidente.",
                    "url": "https://cnnespanol.cnn.com/2023/04/02/quien-es-juan-merchan-juez-origen-colombiano-acusacion-trump-trax/",
                    "urlToImage": "https://cnnespanol.cnn.com/wp-content/uploads/2023/04/230331103354-judge-juan-merchan-221021.webp",
                    "publishedAt": "2023-04-02T12:13:22Z",
                    "content": "Nueva York toma medidas de seguridad extrema por visita de Trump 2:15\r\n(CNN) -- Cuando Donald Trump ingrese a un tribunal de Nueva York el martes, se enfrentará a un juez experimentado que no es ajen… [+6539 chars]"
                },
                {
                    "source": {
                        "id": "google-news-uk",
                        "name": "Google News (UK)"
                    },
                    "author": "Financial Times",
                    "title": "Donald Trump indictment sets up battle of heavyweight lawyers - Financial Times",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiP2h0dHBzOi8vd3d3LmZ0LmNvbS9jb250ZW50LzAzYmY3OTZhLTQ5NDQtNDJjMC05NzE1LTdlYzA0YmEwNjMwZtIBAA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-04-02T11:00:52+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "google-news",
                        "name": "Google News"
                    },
                    "author": "CNN",
                    "title": "Meet the judge presiding over Trump's criminal arraignment - CNN",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMiXmh0dHBzOi8vd3d3LmNubi5jb20vMjAyMy8wNC8wMS9wb2xpdGljcy9qdWRnZS1qdWFuLW1lcmNoYW4tZG9uYWxkLXRydW1wLWFycmFpZ25tZW50L2luZGV4Lmh0bWzSAWJodHRwczovL2FtcC5jbm4uY29tL2Nubi8yMDIzLzA0LzAxL3BvbGl0aWNzL2p1ZGdlLWp1YW4tbWVyY2hhbi1kb25hbGQtdHJ1bXAtYXJyYWlnbm1lbnQvaW5kZXguaHRtbA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-04-02T10:24:00+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "les-echos",
                        "name": "Les Echos"
                    },
                    "author": "Véronique Le Billon",
                    "title": "Etats-Unis : comment le clivage politique dévalorise l'institution judiciaire",
                    "description": "À la suite de l'inculpation de Donald Trump, les républicains décrédibilisent l'action du procureur de Manhattan. La politisation des fonctions judiciaires aux Etats-Unis fragilise les décisions et ruine la confiance des citoyens.",
                    "url": "https://www.lesechos.fr/monde/etats-unis/etats-unis-comment-le-clivage-politique-devalorise-linstitution-judiciaire-1921333",
                    "urlToImage": "https://media.lesechos.com/api/v1/images/view/64294e31fb298a0552289ac6/1280x720/0703699946129-web-tete.jpg",
                    "publishedAt": "2023-04-02T09:41:57Z",
                    "content": "Avant même son inculpation, Donald Trump avait choisi sa ligne de défense : une mise en cause pénale ne serait pas le résultat d'une (longue) enquête ni la décision d'un grand jury, mais une manoeuvr… [+298 chars]"
                },
                {
                    "source": {
                        "id": "the-wall-street-journal",
                        "name": "The Wall Street Journal"
                    },
                    "author": "Warren P. Strobel",
                    "title": "In Croatia, U.S. Campaigned to Stop Chinese Bid on Key Port",
                    "description": "Both the Trump and Biden administrations have worked with allies to limit Beijing’s influence in Europe",
                    "url": "https://www.wsj.com/articles/in-croatia-u-s-campaigned-to-stop-chinese-bid-on-key-port-58c9bbff?mod=hp_lead_pos5",
                    "urlToImage": "https://images.wsj.net/im-752943/social",
                    "publishedAt": "2023-04-02T09:30:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": null,
                    "title": "Analysis: Biden's strategic silence on Trump may be tested in days ahead",
                    "description": "When Joe Biden was asked on Friday morning about the impact that the indictment of his White House predecessor and political rival Donald Trump would have on America, the U.S. president had an emphatic response: no comment.",
                    "url": "https://www.reuters.com/world/us/bidens-strategic-silence-trump-may-be-tested-days-ahead-2023-04-02/",
                    "urlToImage": "https://www.reuters.com/resizer/JQUawGQoJAVul5sIuP81_BCbV8o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RXCSPJL52NID7DUOZTO55JK3EA.jpg",
                    "publishedAt": "2023-04-02T09:28:30Z",
                    "content": "WASHINGTON, April 2 (Reuters) - When Joe Biden was asked on Friday morning about the impact that the indictment of his White House predecessor and political rival Donald Trump would have on America, … [+4198 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Alli Rosenbloom",
                    "title": "‘SNL’ cold open tackles Trump’s indictment",
                    "description": "The cold open of \"Saturday Night Live\" featured comedian James Austin Johnson considering possible jail time as an indicted former President Donald Trump.",
                    "url": "http://us.cnn.com/2023/04/02/entertainment/snl-cold-open-trump-indictment/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230401235803-01-snl-cold-open-040123.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-04-02T04:34:10Z",
                    "content": "The cold open of Saturday Night Live featured comedian James Austin Johnson considering possible jail time as an indicted former President Donald Trump.\r\nWell folks it happened. I got indicted, Johns… [+1727 chars]"
                },
                {
                    "source": {
                        "id": "google-news-au",
                        "name": "Google News (Australia)"
                    },
                    "author": "PerthNow",
                    "title": "Donald Trump: 45th US President says his mugshot will become ‘most famous ever’ amid Stormy Daniels indictment - PerthNow",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMimgFodHRwczovL3d3dy5wZXJ0aG5vdy5jb20uYXUvcG9saXRpY3MvZG9uYWxkLXRydW1wLTQ1dGgtdXMtcHJlc2lkZW50LXNheXMtaGlzLW11Z3Nob3Qtd2lsbC1iZWNvbWUtbW9zdC1mYW1vdXMtZXZlci1hbWlkLXN0b3J5LWRhbmllbHMtaW5kaWN0bWVudC1jLTEwMjI4ODcw0gGeAWh0dHBzOi8vd3d3LnBlcnRobm93LmNvbS5hdS9wb2xpdGljcy9kb25hbGQtdHJ1bXAtNDV0aC11cy1wcmVzaWRlbnQtc2F5cy1oaXMtbXVnc2hvdC13aWxsLWJlY29tZS1tb3N0LWZhbW91cy1ldmVyLWFtaWQtc3RvcnktZGFuaWVscy1pbmRpY3RtZW50LWMtMTAyMjg4NzAuYW1w?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-04-02T03:35:00+00:00",
                    "content": null
                },
                {
                    "source": {
                        "id": "breitbart-news",
                        "name": "Breitbart News"
                    },
                    "author": "Matthew Boyle",
                    "title": "Post-Indictment Poll: More Voters More Likely to Vote for Trump Now",
                    "description": "New post-indictment polling data shows more voters in both the primary and the general election say they are now going to vote for Trump.",
                    "url": "http://www.breitbart.com/politics/2023/04/01/post-indictment-poll-more-voters-in-both-primary-general-election-say-theyre-more-likely-to-vote-for-trump/",
                    "urlToImage": "https://media.breitbart.com/media/2023/03/donald-trump-alvin-bragg-ap-640x335.jpg",
                    "publishedAt": "2023-04-02T03:26:23Z",
                    "content": "New post-indictment polling data from former President Donald Trumps campaign shows that not only does he hold a commanding lead in the GOP primary and a lead over Democrat President Joe Biden in a l… [+6937 chars]"
                },
                {
                    "source": {
                        "id": "axios",
                        "name": "Axios"
                    },
                    "author": "Mike Allen",
                    "title": "Scoop: Trump raises over $5 million since indictment news",
                    "description": "It validates the view of most top Republicans that the expected indictment will help Trump build a formidable lead in the GOP primary.",
                    "url": "https://www.axios.com/2023/04/02/trump-indictment-2024-campaign-donations",
                    "urlToImage": "https://images.axios.com/PS4nzhx0__kUeCAEE2OjYUUa0mM=/0x337:3900x2531/1366x768/2023/04/02/1680399500035.jpg",
                    "publishedAt": "2023-04-02T02:34:15Z",
                    "content": "Former President Trump has raised more than $5 million since news of his indictment broke late Thursday over $4 million in the first 24 hours and over $1 million in the second 24 hours, a Trump offic… [+1911 chars]"
                },
                {
                    "source": {
                        "id": "bbc-news",
                        "name": "BBC News"
                    },
                    "author": "BBC News",
                    "title": "'He'll be our next president': Florida protesters stay faithful to Trump",
                    "description": "At small but vocal rallies near Mar-a-Lago, demonstrators vow to stand with Donald Trump.",
                    "url": "http://www.bbc.co.uk/news/world-us-canada-65152112",
                    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DB0A/production/_129247065_gettyimages-1250356185-1.jpg",
                    "publishedAt": "2023-04-02T00:22:15.6499694Z",
                    "content": "When 31-year-old hot dog vendor Dirk Frazel heard the news that Donald Trump had been indicted, he \"knew he had to do something\", so he got in his car. \r\nHis destination was Mr Trump's home at the Ma… [+4404 chars]"
                },
                {
                    "source": {
                        "id": "breitbart-news",
                        "name": "Breitbart News"
                    },
                    "author": "Jordan Dixon-Hamilton",
                    "title": "Poll: Donald Trump Surges to 26-Point Lead over DeSantis",
                    "description": "Donald Trump urged to a 26-point lead over Ron DeSantis after news that Trump was indicted by a New York grand jury.",
                    "url": "http://www.breitbart.com/politics/2023/04/01/poll-donald-trump-surges-to-26-point-lead-over-ron-desantis-after-indictment/",
                    "urlToImage": "https://media.breitbart.com/media/2023/04/rump-Soars-Past-DeSantis-After-Alvin-Bragg-Indictment-640x335.png",
                    "publishedAt": "2023-04-02T00:17:48Z",
                    "content": "Former President Donald Trump surged to a 26-point lead over Florida Gov. Ron DeSantis (R) after news that Trump was indicted by a New York grand jury, according to the latest Yahoo News/YouGov poll.… [+1147 chars]"
                },
                {
                    "source": {
                        "id": "bloomberg",
                        "name": "Bloomberg"
                    },
                    "author": "Bloomberg",
                    "title": "New York Plans to Close Key Streets for Trump's Arraignment",
                    "description": null,
                    "url": "https://news.google.com/rss/articles/CBMibmh0dHBzOi8vd3d3LmJsb29tYmVyZy5jb20vbmV3cy9hcnRpY2xlcy8yMDIzLTA0LTAyL25ldy15b3JrLXBsYW5zLXRvLWNsb3NlLWtleS1zdHJlZXRzLWZvci10cnVtcC1zLWFycmFpZ25tZW500gEA?oc=5",
                    "urlToImage": null,
                    "publishedAt": "2023-04-02T00:08:00+00:00",
                    "content": null
                },

            ]
        }

        return this.fetchApi(url, data);
    }
}
