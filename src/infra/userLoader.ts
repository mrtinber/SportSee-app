import { SOURCE } from "../variables/constants";
import { ApiUser } from "./api/apiUser";
import { InMemoryUser } from "./inMemoryUser";

export const userLoader = () => {
    switch (SOURCE) {
        case "api":
            return new ApiUser();
        default:
            return new InMemoryUser();
    }
}