import Image from "next/image";
import logo from '../../../public/arrow.svg';

const GradeLine = () => {
    return (
        <>
            <div className='w-11/12 flex rounded-md h-1/2'>
                <div className='w-1/4 flex justify-center my-7'>
                    <Image
                        src={logo}
                        alt="Jo Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
                <div className='w-1/4 flex justify-center'>
                    <Image
                        src={logo}
                        alt="Jo Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
                <div className='w-1/4 flex justify-center'>
                    <Image
                        src={logo}
                        alt="Jo Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
                <div className='w-1/4 flex justify-center'>
                    <Image
                        src={logo}
                        alt="Jo Logo"
                        width={150}
                        height={50}
                        priority
                    />
                </div>
            </div>
            <div className='absolute mt-[6rem] b w-11/12 h-[0.02rem] bg-gray-300'></div>
        </>
    )
}

export default GradeLine
