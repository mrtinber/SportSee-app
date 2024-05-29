import { SOURCE } from "../variables/constants";
import { ApiUser, InMemoryUser } from "./userService";

export const userLoader = () => {
    switch (SOURCE) {
        case "api":
            return new ApiUser();
        default:
            return new InMemoryUser();
    }
}