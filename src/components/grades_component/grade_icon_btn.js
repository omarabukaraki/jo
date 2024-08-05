import Image from "next/image";



const GradeIconBtn = (props) => {
  return (
    <button onClick={props.click} className='w-1/4 flex flex-col justify-center place-items-center'>
    <h3 className={`font-bold text-xl my-2 ${props.color}`}>{props.year}</h3>
    <Image
        src={props.src}
        alt="Jo Logo"
        width={25}
        height={50}
        priority
    />
</button>
  )
}

export default GradeIconBtn
