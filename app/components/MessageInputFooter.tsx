import { Message } from "@/lib/types";

const MessageInputFooter = ({ messages }: { messages: Message[] }) => {
    const InputFooterBorder = ({ children }: { children: React.ReactNode }) => {
        return (
            <div className='bg-linear-to-b from-msn-dark to-msn-light border-t-2 border-msn-border text-[17px] pl-2'>
                {children}
            </div>
        );
    };

    if (messages.length < 1) return "";

    const lastMessage = messages[messages.length - 1];

    // Format the date and time
    const messageDate = lastMessage.timestamp.toLocaleDateString("en-GB");
    const messageTime = lastMessage.timestamp.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    if (messages[messages.length - 1].role == "user") {
        return (
            <InputFooterBorder>
                Dr Gregory House has read your message on {messageDate} at{" "}
                {messageTime}.
            </InputFooterBorder>
        );
    } else {
        return (
            <InputFooterBorder>
                You have read the message from Dr Gregory House on {messageDate}{" "}
                at {messageTime}.
            </InputFooterBorder>
        );
    }
};

export default MessageInputFooter;
