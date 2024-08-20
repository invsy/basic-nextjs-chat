import {ChatUi} from "@/components/chat-ui";
import {invsy} from "@/lib/invsy-client";

type Props = {
    params: {
        chat_id: string;
    };
}

export default async function ChatPage({params}: Props) {
    const chatId = params.chat_id
    const chat = await invsy.get(chatId);

    return (
        <>
            <ChatUi chat={chat}/>
        </>
    );
}