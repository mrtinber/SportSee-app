import { User } from "../domain/models/User";
import { UserActivity } from "../domain/models/UserActivity";
import { UserPerformance } from "../domain/models/UserPerformance";
import { UserSessions } from "../domain/models/UserSessions";
import { UserGateway } from "../domain/userGateway";

export class InMemoryUser implements UserGateway {
    async getUser(): Promise<User> {
        return {
            id: 12,
            userInfos: {
                firstName: "Thomas",
                lastName: "Dovineau",
                age: 31,
            },
            todayScore: 0.72,
            keyData: {
                calorieCount: 2530,
                proteinCount: 386,
                carbohydrateCount: 475,
                lipidCount: 140,
            },
        };
    }

    async getActivity(): Promise<UserActivity> {
        return {
            userId: 12,
            sessions: [
                {
                    day: "2020-07-01",
                    kilogram: 80,
                    calories: 240
                },
                {
                    day: "2020-07-02",
                    kilogram: 80,
                    calories: 220
                },
                {
                    day: "2020-07-03",
                    kilogram: 81,
                    calories: 280
                },
                {
                    day: "2020-07-04",
                    kilogram: 81,
                    calories: 290
                },
                {
                    day: "2020-07-05",
                    kilogram: 80,
                    calories: 160
                },
                {
                    day: "2020-07-06",
                    kilogram: 78,
                    calories: 162
                },
                {
                    day: "2020-07-07",
                    kilogram: 76,
                    calories: 390
                },
                {
                    day: "2020-07-08",
                    kilogram: 75,
                    calories: 130
                },
                {
                    day: "2020-07-09",
                    kilogram: 76,
                    calories: 460
                },
                {
                    day: "2020-07-10",
                    kilogram: 75,
                    calories: 370
                }
            ]
        }
    }

    async getPerformance(): Promise<UserPerformance> {
        return {
            userId: 12,
            kind: {
                1: "cardio",
                2: "energy",
                3: "endurance",
                4: "strength",
                5: "speed",
                6: "intensity"
            },
            data: [
                {
                    value: 140,
                    kind: 1
                },
                {
                    value: 180,
                    kind: 2
                },
                {
                    value: 80,
                    kind: 3
                },
                {
                    value: 150,
                    kind: 4
                },
                {
                    value: 160,
                    kind: 5
                },
                {
                    value: 190,
                    kind: 6
                }
            ]
        }
    }

    async getSessions(): Promise<UserSessions> {
        return {
            userId: 12,
            sessions: [
                {
                    day: 1,
                    sessionLength: 30
                },
                {
                    day: 2,
                    sessionLength: 23
                },
                {
                    day: 3,
                    sessionLength: 45
                },
                {
                    day: 4,
                    sessionLength: 50
                },
                {
                    day: 5,
                    sessionLength: 120
                },
                {
                    day: 6,
                    sessionLength: 47
                },
                {
                    day: 7,
                    sessionLength: 60
                }
            ]
        }
    }
}