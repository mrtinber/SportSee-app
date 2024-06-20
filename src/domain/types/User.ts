export type User = {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore: number;
    keyData: UserKeyData
};

export type UserKeyData = {
    calorieCount: number,
    proteinCount: number,
    carbohydrateCount: number,
    lipidCount: number,
}