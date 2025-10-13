const WindowBorder = ({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) => {
    return (
        <div className='p-1 bg-linear-to-b from-[#0163f5] to-[#0044e9] rounded-t-xl rounded-b-sm shadow-[inset_2px_2px_4px_#3c95ff,inset_-2px_-2px_4px_#00138c]'>
            <div className='flex justify-between'>
                <div className='p-0.5 pl-2 pb-1 text-white text-shadow-black text-shadow-xs text-xl -my-0.5'>
                    {title}
                </div>
                <div className='flex items-center gap-0.5 pr-0.5'>
                    <div className='bg-radial-[at_0%_0%] from-[#95b2f9] to-[#1e6bf6] to-75% border-2 border-white rounded-sm w-5 h-5 text-white shadow-[inset_-0.5px_-0.5px_2px_#013fc0]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-full h-full fill-current pr-1 pt-[6px] pb-0.5'
                            viewBox='0 0 100 100'
                        >
                            <path
                                id='gisRectangle0'
                                fillRule='nonzero'
                                stroke='none'
                                strokeDasharray='none'
                                strokeDashoffset='188.976'
                                strokeLinecap='butt'
                                strokeLinejoin='round'
                                strokeMiterlimit='4'
                                strokeOpacity='1'
                                strokeWidth='7'
                                d='M8.5 22.5A3.5 3.5 0 0 0 5 26v48a3.5 3.5 0 0 0 3.5 3.5h83A3.5 3.5 0 0 0 95 74V26a3.5 3.5 0 0 0-3.5-3.5h-83z'
                                color='currentColor'
                                colorInterpolation='sRGB'
                                colorRendering='auto'
                                display='inline'
                                opacity='1'
                                vectorEffect='none'
                                visibility='visible'
                            />
                        </svg>
                    </div>
                    <div className='bg-radial-[at_0%_0%] from-[#95b2f9] to-[#1e6bf6] to-75% border-2 border-white rounded-sm w-5 h-5 text-white shadow-[inset_-0.5px_-0.5px_2px_#013fc0]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-full h-full fill-current'
                            viewBox='0 0 20 20'
                        >
                            <path
                                fill='#ffffff'
                                fillRule='evenodd'
                                d='M4 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm2 1v8h8V6H6Z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </div>
                    <div className='bg-radial-[at_0%_0%] from-[#f0a896] to-[#e13a03] to-75% border-2 border-white rounded-sm w-5 h-5 text-white shadow-[inset_-0.5px_-0.5px_2px_#b53512]'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-full h-full fill-current'
                            viewBox='0 0 32 32'
                        >
                            <path d='m24.778 21.42l-5.502-5.503l5.5-5.502l-2.827-2.83l-5.503 5.502l-5.502-5.502l-2.828 2.83l5.5 5.502l-5.5 5.502l2.83 2.828l5.5-5.502l5.5 5.502z' />
                        </svg>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
};
export default WindowBorder;
