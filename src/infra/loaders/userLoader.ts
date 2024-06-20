import { SOURCE } from "../constants/api";
import { ApiUser } from "../gateways/apiUser";
import { InMemoryUser } from "../inmemory/inMemoryUser";

export const userLoader = () => {
    switch (SOURCE) {
        case "api":
            return new ApiUser();
        default:
            return new InMemoryUser();
    }
}