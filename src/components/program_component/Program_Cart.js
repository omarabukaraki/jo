import useTranslation from "next-translate/useTranslation"


const ProgramCart = ({key,data}) => {
  const { t } = useTranslation('common');

  return (
    <div className='bg-white shadow-md w-[21rem] h-44 rounded-md mx-2 my-2 hover:mx-0 hover:my-0 hover:w-[22rem] hover:h-[12rem]  duration-200'>
    <h3 className='w-full h-1/4 font-bold flex justify-center place-items-center'>{t(`${data.title}`)}</h3>
    <div className='w-full h-4/6 flex justify-center'>
        <img className='w-1/3' src={data.image}/>
    </div>
</div>
  )
}

export default ProgramCart
