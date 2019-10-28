import axios from 'axios';
import { User } from './User';
import { Repo } from './Repo';

export class GitHubApiService {
    private baseurl: string = 'https://api.github.com/users';
    public user: User | undefined;

    constructor(private userName: string) {
        this.userName = userName;
    }
    
    getUserName() {
        return this.userName;
    }

    async init(): Promise<User> {
        const repos = await this.getRepos();
        const user = await this.getUserInfo(repos);
        this.user = user;
        return user;
    }

    private async getUserInfo (repos: Repo[]): Promise<User> {
        const response: any = await axios.get(`${this.baseurl}/${this.userName}`);
        const user = new User(response.data, repos);
        return user;
    }

    private async getRepos(): Promise<Repo[]> {
        const response: any = await axios.get(`${this.baseurl}/${this.userName}/repos`);
        return response.data.map((repo: any) => new Repo(repo));
    }
}