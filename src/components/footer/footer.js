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
import Link from 'next/link';
import {linkWhatsapp} from '../../../utils.js'




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
                            <Link target='_blank' href={'https://apps.apple.com/jo/app/jo-academy/id1667155848'}> <div className='w-36 bg-black text-white p-2 font-bold rounded-md border-2 flex items-center mx-6'><FaApple className='mx-2 text-4xl' />
                                {t('getItNowPlayStore')}</div></Link>

                            <Link target='_blank' href={'https://play.google.com/store/apps/details?id=com.jo_Joacademy&pli=1'}>
                                <div className='w-36 bg-black text-white p-2 font-bold rounded-md border-2 flex items-center mx-6'>
                                    <IoLogoGooglePlaystore className='mx-2 text-4xl' />
                                    {t('getItNowGoogleStore')}</div></Link>

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
                            <Link target='_blank' href={'https://www.facebook.com/JoAcademy.Tawjihi'} className='text-2xl text-white'><FaFacebookF /></Link>
                            <Link target='_blank' href={'https://x.com/JoAcademy3'} className='text-2xl text-white'><FaXTwitter /></Link>
                            <Link target='_blank' href={'https://www.instagram.com/joacademy/'} className='text-2xl text-white'> <AiFillInstagram /></Link>
                            <Link target='_blank' href={'https://www.youtube.com/channel/UCsCAA9Njj3NC1ujdJ9OHg6A/videos'} className='text-2xl text-white'><FaYoutube /></Link>
                            <Link target='_blank' href={linkWhatsapp} className='text-2xl text-white'> <IoLogoWhatsapp /></Link>
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


