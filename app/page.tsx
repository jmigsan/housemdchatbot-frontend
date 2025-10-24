"use client";

import { useState } from "react";

import ChatInterface from "./components/ChatInterface";
import MsnHeader from "./components/MsnHeader";
import MsnFooter from "./components/MsnFooter";
import ProfileImages from "./components/ProfileImages";
import Image from "next/image";
import winXpDesktop from "@/app/assets/win xp desktop.webp";
import winXpTaskbar from "@/app/assets/win xp taskbar.png";
import WindowBorder from "./components/WindowBorder";
import ExplanationText from "./components/ExplanationText";
import FirstMessageProgressBar from "./components/FirstMessageProgressBar";

const Home = () => {
    const [showFirstTimeMessage, setShowFirstTimeMessage] = useState(false);

    return (
        // Outer container
        <div className='flex justify-center items-center lg:h-screen lg:-mt-5'>
            {/* Background */}
            <Image
                src={winXpDesktop}
                alt='Website background'
                quality={100}
                className='fixed top-0 left-0 w-screen h-screen -z-10 object-cover'
            />
            <Image
                src={winXpTaskbar}
                alt='taskbar'
                quality={100}
                className='fixed top-0 left-0 w-screen h-screen -z-10'
            />

            <div className='flex flex-col gap-10 lg:flex-row items-center m-5 lg:m-0'>
                {/* Chatbot */}
                <div className='sm:w-[41.5rem]'>
                    <WindowBorder title='Dr Gregory House - Conversation'>
                        {/* Chat container */}
                        <div className='flex flex-col lg:w-[41rem] h-[33rem] rounded-t-xl rounded-b-sm shadow-lg-and-msn-inset overflow-hidden bg-linear-to-b from-msn-dark via-msn-light to-msn-light'>
                            {/* Header */}
                            <MsnHeader />
                            <div className='shadow-lg-and-msn-inset h-full flex p-3 pb-4 gap-2'>
                                {/* Chat interface */}
                                <ChatInterface
                                    setShowFirstTimeMessage={
                                        setShowFirstTimeMessage
                                    }
                                />
                                {/* Images */}
                                <div className='hidden sm:block'>
                                    <ProfileImages />
                                </div>
                            </div>
                            {/* Footer */}
                            <MsnFooter />
                        </div>
                    </WindowBorder>
                </div>

                {/* Explanation */}
                <div className='sm:w-[41.5rem] lg:w-auto'>
                    <WindowBorder title='How I made this'>
                        <div className='flex flex-col lg:w-[20rem] h-[33rem] rounded-t-xl rounded-b-sm shadow-lg-and-msn-inset overflow-hidden bg-[#ede8d7] p-1 pt-2'>
                            <div className='bg-[#fdfcff] border-2 border-[#b8b5ad] rounded-sm py-1 px-3 overflow-y-scroll'>
                                <ExplanationText />
                            </div>
                        </div>
                    </WindowBorder>
                </div>
            </div>

            {showFirstTimeMessage && (
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <WindowBorder title='Loading...'>
                        <div className='flex flex-col w-[25rem] rounded-t-xl rounded-b-sm shadow-lg-and-msn-inset overflow-hidden bg-[#ede8d7] p-1 pt-2'>
                            <FirstMessageProgressBar />
                        </div>
                    </WindowBorder>
                </div>
            )}
        </div>
    );
};
export default Home;
