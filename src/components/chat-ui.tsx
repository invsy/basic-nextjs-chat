"use client"

import {useChat} from "ai/react";

type Props = {
    chat: any
}

export const ChatUi = ({ chat }: Props) => {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: `/api/chat/${chat.id}`,
        keepLastMessageOnError: true,
        initialMessages: chat.messages ? chat.messages : []
    });

    return (
        <>
            {messages.map((message, index) => (
                <div key={index}>
                    {message.role === 'user' ? 'User: ' : 'AI: '}
                    {message.content}
                </div>
            ))}

            <form onSubmit={handleSubmit}>
                <input name="prompt" value={input} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}