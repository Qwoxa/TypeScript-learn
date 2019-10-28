import { GitHubApiService } from './GitHubApiService';

(async () => {
    const svc = new GitHubApiService();
    const user:any = await svc.getUserInfo('qwoxa');
    console.log(user)
})();