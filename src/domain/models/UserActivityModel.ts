import { UserActivityApi } from "../../infra/api/types/UserActivityApi";
import { UserActivitySessions } from "../types/UserActivity";

export class UserActivityModel {
    userId: number;
    sessions: UserActivitySessions[]
    /**
* Create user performance data model.
* @param {UserActivityApi} data - The data value
*/
    constructor(data: UserActivityApi) {
        this.userId = data.userId;
        this.sessions = data.sessions;
    }
}