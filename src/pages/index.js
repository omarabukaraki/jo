import Head from "next/head";
import NavBar from "../components/nav_bar_component/Nav_bar";
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useEffect, useState } from "react";
export default function Home() {
  const { t,lang } = useTranslation('common');
  
  const [data,setData] = useState();
  const [language,setLanguage] = useState([0,'en']);


useEffect(()=>{
  fetch("https://admin.joacademy.net/api/v1/settings", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,ar;q=0.8,en-GB;q=0.7",
      "api": `${language[0]}`,
      "lang": `${language[1]}`,
    },
  }).then(res => res.json())
    .then(result => {
      setData(result)
    });
},[])



  return (

    <>
      <div >
        <h1 className="text-5xl font-bold text-primary text-center mt-12">{t('homeTitle')}</h1>
        <h3 className="text-center text-2xl mt-6">{t('homeDescription')}</h3>
        <div className="programs flex justify-center mt-8">
       
        {data?.data.programs.map((prog)=>{
          return   <div className="program w-64 h-96 bg-primary rounded-lg mx-2 ">
          <h3 className="text-white font-bold text-2xl text-center mt-8 mx-12">{prog.name}</h3>

        </div>
         })}
        
        </div>
      </div>
    </>
  );
}



// "referrer": "https://www.joacademy.com/",
// "referrerPolicy": "strict-origin-when-cross-origin",
// "body": null,
// "method": "GET",
// "mode": "cors",
// "credentials": "omit"

// "priority": "u=1, i",
// "program": "3",
// "sec-ch-ua": "\"Not/A)Brand\";v=\"8\", \"Chromium\";v=\"126\", \"Google Chrome\";v=\"126\"",
// "sec-ch-ua-mobile": "?0",
// "sec-ch-ua-platform": "\"Windows\"",
// "sec-fetch-dest": "empty",
// "sec-fetch-mode": "cors",
// "sec-fetch-site": "cross-site"