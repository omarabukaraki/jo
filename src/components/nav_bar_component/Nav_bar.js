import Image from "next/image";
import logo from '../../../public/logo.svg'
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineGlobal } from "react-icons/ai";
import { useRef, useState } from "react";
import LinkComponent from "./Link_component";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation';

const NavBar = () => {
  const langMenu = useRef();
  const linksMenu = useRef();

  const enBtn = useRef();
  const nav = useRef();
  const [isDisabled, setDisabled] = useState(false);
  const { t } = useTranslation('common');




  const handleLangBtn = () => {


    if (isDisabled === false) {
      langMenu.current.className = 'absolute top-16 mt-3 bg-white rounded-md shadow-xl w-32 h-20';
      setDisabled(true);
    } else {
      langMenu.current.className = 'hidden top-16 mt-3 bg-white rounded-md shadow-xl w-32 h-20';
      setDisabled(false);
    }
  }

  return (
    <>
      <nav ref={nav} className="bg-primary w-full h-24 flex justify-between  place-items-center px-32 ">

      <Link href='/' className="w-fit h-fit">
          <Image
            src={logo}
            alt="Jo Logo"
            width={220}
            height={50}
            priority
          />
        </Link>

        <div className="flex " ref={linksMenu} >
          <LinkComponent route={'/'} linkName={t('navMenuAbout')} />
          <LinkComponent route={'/'} linkName={t('navMenuNews')} />
          <LinkComponent route={'/'} linkName={t('navMenuEvents')} />
          <LinkComponent route={'/'} linkName={t('navMenuSalesPoints')} />
          <LinkComponent route={'/'} linkName={t('navMenuAgent')} />
          <LinkComponent route={'/'} linkName={t('navMenuContact')} />
          <LinkComponent route={'/form'} linkName={t('registerForm')} />
        </div>


        <button onClick={handleLangBtn} className="bg-white w-20 h-12 rounded-md flex justify-center place-items-center">
          <AiOutlineGlobal className="text-2xl text-primary mx-1" />
          <IoIosArrowDown className="text-2xl text-primary mx-1" />
          <div dir="ltr" ref={langMenu} className=" hidden top-16 mt-3 bg-white rounded-md shadow-xl w-32 h-20">
            <div className="flex flex-col place-items-start justify-evenly  h-full w-full">
              <Link ref={enBtn} onClick={handleLangBtn} href="/" locale="en" className="w-full"><h3 className="font-bold text-sm text-primary w-full text-start pl-4 pr-4 h-full ">EN</h3></Link>
              <div className="bg-gray-100 w-full h-[0.01rem]"></div>
              <Link onClick={handleLangBtn} href="/" locale="ar" className="w-full"><h3 className="font-bold text-sm text-primary w-full text-start pl-4 pr-4 h-full">AR</h3></Link>
            </div>
          </div>
        </button>
       
      </nav>
    </>
  )
}

export default NavBar
