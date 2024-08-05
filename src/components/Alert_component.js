
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import useTranslation from "next-translate/useTranslation"

const AlertComponent = () => {
 const [hideAlert,setHide] = useState('flex');
 const {t} = useTranslation('common');

    return (
        <div className={`bg-[#f2a057] w-11/12 h-12 mt-2 rounded-md ${hideAlert} justify-between items-center`}>
            <div className='mx-8'></div>
            <h3 className='text-base font-bold text-[#343443]'>{t('alertMessage')}</h3>
            <button onClick={() => { setHide('hidden') }} className='hover:bg-gray-200 hover:rounded-2xl hover:p-1 w-[1.5rem] h-[1.5rem] mx-4 flex justify-center items-center'><IoClose className='text-xl' /></button>
        </div>
    )
}

export default AlertComponent
