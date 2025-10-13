import Image from "next/image";
import houseMdMsnLogo from "@/app/assets/housemd msn logo.png";

const MsnHeader = () => {
    return (
        <div className='bg-msn-banner shadow-sm-and-msn-inset flex justify-end p-1 pr-12'>
            <Image
                src={houseMdMsnLogo}
                alt='house md msn logo'
                className='h-5 w-auto -mb-0.5'
            />
        </div>
    );
};
export default MsnHeader;
