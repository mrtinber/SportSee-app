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
            data: [
                {
                    value: 140,
                    kind: "Cardio"
                },
                {
                    value: 180,
                    kind: "Energie"
                },
                {
                    value: 80,
                    kind: "Endurance"
                },
                {
                    value: 150,
                    kind: "Force"
                },
                {
                    value: 160,
                    kind: "Vitesse"
                },
                {
                    value: 190,
                    kind: "Intensité"
                }
            ]
        }
    }

    async getSessions(): Promise<UserSessions> {
        return {
            userId: 12,
            sessions: [
                {
                    day: 'L',
                    sessionLength: 30
                },
                {
                    day: 'M',
                    sessionLength: 23
                },
                {
                    day: 'M',
                    sessionLength: 45
                },
                {
                    day: 'J',
                    sessionLength: 50
                },
                {
                    day: 'V',
                    sessionLength: 120
                },
                {
                    day: 'S',
                    sessionLength: 47
                },
                {
                    day: 'D',
                    sessionLength: 60
                }
            ]
        }
    }
}