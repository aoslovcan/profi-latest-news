import {ApiClient} from "../ApiClient/ApiClient";


export class NewsClient extends ApiClient {
    url = `${process.env.REACT_APP_BASE_API_URI}?apikey=${process.env.REACT_APP_API_KEY}`


    getNews(params : {}) : Promise<Record<string, unknown>>{

        let url: string = `${this.url}&${params}`;
        let data: {} = {
            method: "GET",
        };

        return this.fetchApi(url, data)
    }


}