import drHouseImage from "@/app/assets/housemd.jpg";
import msnAvatarImage from "@/app/assets/msnavatar.jpg";
import Image, { StaticImageData } from "next/image";

const ProfileImages = () => {
    const ProfileImageBorder = ({
        image,
        alt,
    }: {
        image: StaticImageData;
        alt: string;
    }) => {
        return (
            <div className='bg-msn-banner p-1 rounded-lg border-2 border-msn-border'>
                <Image
                    src={image}
                    alt={alt}
                    className='rounded-lg border-1 border-msn-border'
                />
                <div className='flex justify-end p-1 pt-2'>
                    <div className='w-0 h-0 border-x-5 border-t-7 border-l-transparent border-r-transparent border-t-gray-700' />
                </div>
            </div>
        );
    };

    return (
        <div className='flex flex-col justify-between h-full w-35'>
            {/* Dr Gregory house */}
            <ProfileImageBorder image={drHouseImage} alt='Dr Gregory house' />
            {/* You */}
            <ProfileImageBorder image={msnAvatarImage} alt='You' />
        </div>
    );
};
export default ProfileImages;
