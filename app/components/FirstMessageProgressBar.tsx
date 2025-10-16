"use client";

import { useEffect, useState } from "react";

const FirstMessageProgressBar = () => {
    useEffect(() => {
        const audio = new Audio("/windows-xp-error.mp3");
        audio.play();
    }, []);

    const InfoText = () => {
        const infoMessages = [
            "Dr. Gregory House is warming up. This can take up 2 minutes.",
            "This isn't just a chatbot. It's powered by a finetuned LLM and RAG.",
            "He's running on a serverless GPU endpoint via RunPod",
            "He shuts down when idle to save costs.",
            "Once active, House responds in seconds.",
            "But cold starts are the price of affordability.",
            "Fun fact: Hugh Laurie (Gregory House) is British, not American!",
            "House's character was inspired by Sherlock Holmes.",
            "Like Holmes, House solves medical 'mysteries'.",
            "House relies on sharp reasoning and keen observation.",
            "But he's completely lacking in warmth or empathy.",
            "He's board-certified in both Infectious Disease and Nephrology.",
            "House's team solved over 150 impossible cases across 8 seasons.",
            "To keep this bot sustainable, I use RunPod's serverless endpoints.",
            "They auto-sleep when unused.",
            "This means no £300/month GPU bills just waiting for a single user!",
            "I only pay while House is 'thinking'.",
            "He's slow to wake up… but people aren't booting this up everyday.",
            "Thanks for your patience. Even geniuses need a moment to boot up.",
            "Unlike always-on cloud VMs, serverless endpoints sleep when unused",
            "This saves 90%+ on idle costs. Still costs something, though.",
            "This chatbot was finetuned on episodes of House, M.D.",
            "I finetuned it on a VM on Google Compute Engine.",
            "This chatbot uses RAG to answer questions.",
            "It has access to 1,000+ Wikipedia medical articles.",
            "They're in his Pinecone vector database.",
            "This bot uses RAG to ground responses in real medicine",
            "RAG prevents hallucinations.",
            "House once faked his own death to escape consequences.",
            "This GPU just powers off. Less drama, same effect.",
            "This bot is using a finetuned Qwen3-4B model.",
            "House was ranked #5 on 'Greatest TV Characters of All Time'.",
            "House's team included a believer, a skeptic, and a moral compass.",
            "Hugh Laurie improvised many of House's piano scenes.",
            "He's a classically trained musician in real life.",
        ];

        const [infoMessage, setInfoMessage] = useState(infoMessages[0]);
        const [infoMessageCount, setInfoMessageCount] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setInfoMessageCount(
                    (infoMessageCount + 1) % infoMessages.length
                );
                setInfoMessage(infoMessages[infoMessageCount]);
            }, 2500);

            return () => clearInterval(intervalId);
        }, [infoMessageCount]);

        return <div>{infoMessage}</div>;
    };

    const ProgressBar = () => {
        const [percentage, setPercentage] = useState(3.2);
        const [percentageArray, setPercentageArray] = useState<null[]>([]);

        useEffect(() => {
            if (percentage >= 100) return;
            const intervalId = setInterval(() => {
                setPercentage(percentage + 0.8);
                console.log(percentage);
            }, 992);

            return () => clearInterval(intervalId);
        }, [percentage]);

        useEffect(() => {
            const amountInArray = Math.floor(percentage / 3.125);
            setPercentageArray(Array(amountInArray).fill(null));
        }, [percentage]);

        return (
            <div className='border-1 border-black w-[324px] h-[1rem] rounded-sm bg-white flex p-0.5 gap-0.5'>
                {percentageArray.map((_, index) => (
                    <div
                        key={index}
                        className='bg-gradient-to-b from-green-200 from-0% via-green-500 via-75% to-green-200 w-2'
                    />
                ))}
            </div>
        );
    };

    return (
        <div className='flex flex-col items-center p-2 pb-4 gap-1'>
            <InfoText />
            <ProgressBar />
        </div>
    );
};
export default FirstMessageProgressBar;
