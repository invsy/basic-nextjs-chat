import {InvsyServer} from "invsy";
import {user} from "@/lib/user";

export const invsy = new InvsyServer(
    process.env.INVSY_API_KEY!,
    process.env.INVSY_PROJECT_ID!,
    user
)