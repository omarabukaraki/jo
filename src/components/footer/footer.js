import useTranslation from 'next-translate/useTranslation';
import FooterText from './Footer_text';
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaWindows } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from '../../../public/jo_logo.svg';
import Image from "next/image";




const Footer = () => {
    const { t } = useTranslation('common');


    return (
        // This code need refactor and create a components
        <div className="flex flex-col justify-evenly w-full h-[32rem] bg-primary">
            <div></div>
            <div className='flex'>
                <div className="flex justify-evenly items-center w-1/2 h-full">

                    <div>
                        <h3 className='text-white font-bold text-lg'>{t('quickLinksTitle')}</h3>
                        <FooterText text={t('quickLinksCourses')} />
                        <FooterText text={t('quickLinksTeacherShababek')} />
                        <FooterText text={t('quickLinksJoSchool')} />
                        <FooterText text={t('quickLinksTeachers')} />
                        <FooterText text={t('quickLinksFiles')} />
                        <FooterText text={t('quickLinksJoacademyScholarships')} />
                        <FooterText text={t('quickLinksPackagesAndOffers')} />
                    </div>
                    <div>
                        <h3 className='text-white font-bold text-lg'>{t('supportTitle')}</h3>
                        <FooterText text={t('supportHelp')} />
                        <FooterText text={t('supportContactTechnicalSupport')} />
                        <FooterText text={t('supportJoNews')} />
                        <FooterText text={t('supportAboutUs')} />
                        <FooterText text={t('supportLibraries')} />
                        <FooterText text={t('supportTermsAndConditions')} />
                        <FooterText text={t('supportPrivacyPolicy')} />
                    </div>

                </div>
                <div className="w-1/2 h-full flex items-center">
                    <div className='w-full h-[20.5rem] flex flex-col justify-between items-center'>
                        <h3 className='text-gray-200 text-base my-4'>{t('installMobileApp')}</h3>
                        <div className='flex'>
                            <div className='w-36 bg-black text-white p-2 font-bold rounded-md border-2 flex items-center mx-6'><FaApple className='mx-2 text-4xl' />
                                {t('getItNowPlayStore')}</div>
                            <div className='w-36 bg-black text-white p-2 font-bold rounded-md border-2 flex items-center mx-6'>
                                <IoLogoGooglePlaystore className='mx-2 text-4xl' />
                                {t('getItNowGoogleStore')}</div>
                        </div>
                        <h3 className='text-gray-200 text-base my-4'>{t('downloadDesktopApp')}</h3>
                        <div className='flex'>
                            <div className='w-36 bg-white text-blue-500 p-2 font-bold rounded-md border-2 flex items-center mx-6'><FaApple className='mx-2 text-4xl' />
                                <span className='text-black'>{t('getItForMac')}</span></div>
                            <div className='w-36 bg-white text-white p-2 font-bold rounded-md border-2 flex items-center mx-6'>
                                <FaWindows className='mx-2 text-4xl text-blue-500' />
                                <span className='text-black'>{t('getItForWindows')}</span></div>
                        </div>
                        <h3 className='text-gray-200 text-base my-4'>{t('socialMediaPages')}</h3>
                        <div className='w-1/3 flex justify-evenly '>
                            <h1 className='text-2xl text-white'><FaFacebookF /></h1>
                            <h1 className='text-2xl text-white'><FaXTwitter /></h1>
                            <h1 className='text-2xl text-white'> <AiFillInstagram /></h1>
                            <h1 className='text-2xl text-white'><FaYoutube /></h1>
                            <h1 className='text-2xl text-white'> <IoLogoWhatsapp /></h1>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center text-white'>{t('allRightsReserved')}</h3>
            <Image className='absolute mt-64'
                src={logo}
                alt="Jo Logo"
                width={250}
                height={50}
                priority
            />
        </div>
    )
}

export default Footer


