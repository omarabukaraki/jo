import useTranslation from 'next-translate/useTranslation'

const Form = () => {
  const {t} = useTranslation('common');
  return (
   <div className='bg-gray-300 flex justify-center'>
     <div className='w-1/2 h-96 bg-white my-10 text-center'>
       <h1 className='text-xl font-bold text-primary my-6'>{t('registrationTitle')}</h1> 
    </div>
   </div>
  )
}

export default Form


// "registrationTitle": "Please fill the registration details below",
// "fullNameLabel": "Full Name",
// "fullNameExample": "Mohamed Ahmed Saad",
// "phoneNumberLabel": "Phone Number",
// "phoneNumberExample": "Example: 790000000",
// "countryCode": "962+",
// "passwordLabel": "Password",
// "passwordExample": "Example: 12345678",
// "confirmPasswordLabel": "Confirm Password",
// "termsOfServiceText": "By creating an account on Jo Academy, you agree to the",
// "termsOfServiceLink": "Terms of Service",
// "privacyPolicyText": "and",
// "privacyPolicyLink": "Privacy Policy",
// "saveButton": "Save"