import useTranslation from 'next-translate/useTranslation';


const PalestineProgram = () => {
    const { t } = useTranslation('common');

    return (
        <div className="flex justify-evenly items-center bg-[#1e4387] w-[67rem] h-52 rounded-md my-10">
            <div className='flex flex-col justify-around place-items-start min-h-48'>
                <h1 className='text-3xl font-bold text-white'>{t('palestineProgram')}</h1>
                <p className='text-base text-white'>{t('specialProgram')}</p>
                <button className='m-1 bg-[#f2a057] text-white text-2xl w-64 py-2 rounded-xl'>{t('studyNow')}</button>
            </div>
            <img className='h-40' src='https://www.joacademy.com/_next/static/media/palestine-banner.8350d942.jpg' />
        </div>
    )
}

export default PalestineProgram
