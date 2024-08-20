import {invsy} from "@/lib/invsy-client";
import {redirect} from "next/navigation";

export default async function Page() {
    // create a new chat
    const {id} = await invsy.new({
        title: 'new chat'
    })

    redirect(`/${id}`)
}