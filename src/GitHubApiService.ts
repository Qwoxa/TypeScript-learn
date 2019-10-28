import axios from 'axios';
import { User } from './User';

export class GitHubApiService {
    async getUserInfo (userName: string): Promise<User> {
        const response:any = await axios.get(`https://api.github.com/users/${userName}`);
        const user = new User(response.data);
        return user;
    }
    getRepos() {

    }
}