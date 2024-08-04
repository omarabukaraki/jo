import useTranslation from 'next-translate/useTranslation';


const HomeHeader = () => {
    const { t, lang } = useTranslation('common');

    return (
        <>
            <h1 className="text-5xl font-bold text-primary text-center mt-12">{t('homeTitle')}</h1>
            <h3 className="text-center text-2xl mt-6">{t('homeDescription')}</h3>
        </>
    )
}

export default HomeHeader
