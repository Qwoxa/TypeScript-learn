import { GitHubApiService } from './GitHubApiService';
import { User } from './User';

(async () => {
    const svc = new GitHubApiService('qwoxa');
    const user: User = await svc.init();
    console.log(user);
})();