import ChatInterface from "./components/ChatInterface";
import MsnHeader from "./components/MsnHeader";
import MsnFooter from "./components/MsnFooter";
import ProfileImages from "./components/ProfileImages";
import Image from "next/image";
import winXpDesktop from "@/app/assets/win xp desktop.webp";
import winXpTaskbar from "@/app/assets/win xp taskbar.png";
import WindowBorder from "./components/WindowBorder";
import ExplanationText from "./components/ExplanationText";

const Home = () => {
    return (
        // Outer container
        <div className='flex justify-center items-center h-screen -mt-5'>
            {/* Background */}
            <Image
                src={winXpDesktop}
                alt='Website background'
                fill={true}
                quality={100}
                style={{ zIndex: -2, objectFit: "cover" }}
            />
            <Image
                src={winXpTaskbar}
                alt='taskbar'
                fill={true}
                quality={100}
                style={{ zIndex: -1 }}
            />

            <div className='flex gap-10'>
                {/* Chatbot */}
                <WindowBorder title='Dr Gregory House - Conversation'>
                    {/* Chat container */}
                    <div className='flex flex-col w-[41rem] h-[33rem] rounded-t-xl rounded-b-sm shadow-lg-and-msn-inset overflow-hidden bg-linear-to-b from-msn-dark via-msn-light to-msn-light'>
                        {/* Header */}
                        <MsnHeader />
                        <div className='shadow-lg-and-msn-inset h-full flex p-3 pb-4 gap-2'>
                            {/* Chat interface */}
                            <ChatInterface />
                            {/* Images */}
                            <ProfileImages />
                        </div>
                        {/* Footer */}
                        <MsnFooter />
                    </div>
                </WindowBorder>

                {/* Explanation */}
                <WindowBorder title='How I made this'>
                    <div className='flex flex-col w-[20rem] h-[33rem] rounded-t-xl rounded-b-sm shadow-lg-and-msn-inset overflow-hidden bg-[#ede8d7] p-1 pt-2'>
                        <div className='bg-[#fdfcff] border-2 border-[#b8b5ad] rounded-sm py-1 px-3 overflow-y-scroll'>
                            <ExplanationText />
                        </div>
                    </div>
                </WindowBorder>
            </div>
        </div>
    );
};
export default Home;
