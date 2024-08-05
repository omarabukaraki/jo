import Link from 'next/link';
import logo from '../../../public/jo_logo.svg'
import Image from "next/image";


const ProgramComponent = (props) => {
    return (
       <Link href={'/program'}>
        <div style={{ backgroundColor: props.color }} className={`program w-64 h-96 rounded-lg mx-2 flex flex-col place-items-center mt-6 hover:mt-0 duration-500`}>
            <div className="w-full h-1/3 flex place-items-center justify-center"><h3 className="text-white font-bold text-2xl text-center px-12 ">{props.name}</h3></div>
            <img className="max-w-32 h-4/6 pb-4" src={props.image} />
            <div className="absolute bottom-9 mr-40  w-24 h-24">
                <Image
                    src={logo}
                    alt="Jo Logo"
                    width={220}
                    height={50}
                    priority
                />
            </div>
        </div>
       </Link>
    )
}

export default ProgramComponent


