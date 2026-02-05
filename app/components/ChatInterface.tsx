"use client";

import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { Message } from "@/lib/types";
import MessageInputFooter from "./MessageInputFooter";

const ChatInterface = ({
    setShowFirstTimeMessage,
}: {
    setShowFirstTimeMessage: Dispatch<SetStateAction<boolean>>;
}) => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const ws = useRef<WebSocket | null>(null);
    const [loading, setLoading] = useState(false);

    const initialMessage: Message = {
        role: "model",
        content:
            "If you're here to ask for directions, you're at the wrong place. If you're here to ask me for a doctor, you're also at the wrong place.",
        timestamp: new Date(),
    };

    useEffect(() => {
        setMessages((prev) => [...prev, initialMessage]);
    }, []);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
                chatContainerRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        ws.current = new WebSocket(
            process.env.NEXT_PUBLIC_WS_URL ||
                "ws://localhost:8000/api/ws/chat/runpod"
        );

        ws.current.onopen = () => {
            console.log("WebSocket connection established");
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("WebSocket message received:", data);
            setMessages((prev) => [
                ...prev,
                {
                    role: data.role,
                    content: data.content,
                    timestamp: new Date(data.timestamp),
                },
            ]);
            setLoading(false);
            setShowFirstTimeMessage(false);
        };

        ws.current.onerror = (error) => {
            console.error(
                "WebSocket error:",
                JSON.stringify(error, Object.getOwnPropertyNames(error))
            );
            setLoading(false);
            setShowFirstTimeMessage(false);
        };

        ws.current.onclose = () => {
            console.log("WebSocket connection closed");
        };

        return () => {
            if (ws.current) {
                ws.current.close();
                ws.current = null;
            }
        };
    }, []);

    const handleSend = () => {
        if (input.trim() === "") return;

        console.log("Sending message:", input);

        if (ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(
                JSON.stringify({
                    role: "user",
                    content: input,
                    timestamp: new Date().toISOString(),
                })
            );
        } else {
            console.error("WebSocket not connected");
        }

        setMessages((prev) => [
            ...prev,
            { role: "user", content: input, timestamp: new Date() },
        ]);
        setInput("");
        setLoading(true);

        if (messages.length <= 2) {
            setShowFirstTimeMessage(true);
        }
    };

    return (
        <div className='flex flex-col gap-2'>
            {/* Message box */}
            {/* <div className='w-[29.7rem] h-[20rem] border-2 border-msn-border rounded-t-xl overflow-hidden'> */}
            <div className='w-full h-[20rem] border-2 border-msn-border rounded-t-xl overflow-hidden flex flex-col'>
                {/* Header */}
                <div className='bg-msn-light p-1 pl-2 border-b-2 border-msn-border shadow-sm-and-msn-inset'>
                    Dr Gregory House
                </div>
                {/* Messages */}
                <div
                    className='bg-white pt-1 flex-1 overflow-y-auto pb-2 break-words'
                    ref={chatContainerRef}
                >
                    {messages.map((message, index) => (
                        <div className='px-2' key={`${index}-${Date.now()}`}>
                            <div>
                                {message.role == "user"
                                    ? "You"
                                    : "Dr Gregory House"}{" "}
                                said:
                            </div>
                            <div className='pl-4 whitespace-pre-wrap leading-tight'>
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Input box */}
            {/* <div className='w-[29.7rem] flex-grow bg-white border-2 border-msn-border rounded-xl overflow-hidden flex flex-col'> */}
            <div className='w-full flex-grow bg-white border-2 border-msn-border rounded-xl overflow-hidden flex flex-col'>
                <div className='flex flex-grow'>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                e.preventDefault();
                                if (!loading && !e.shiftKey) {
                                    handleSend();
                                }
                            }
                        }}
                        className='resize-none focus:outline-none w-full px-2 py-1 leading-tight'
                    />
                    <div className='flex items-center justify-center p-[5px]'>
                        <button
                            onClick={handleSend}
                            className='shadow-sm-and-msn-inset rounded-md p-[18px] border-2 border-msn-border hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                            disabled={loading}
                        >
                            Send
                        </button>
                    </div>
                </div>
                <MessageInputFooter messages={messages} />
            </div>
        </div>
    );
};
export default ChatInterface;
