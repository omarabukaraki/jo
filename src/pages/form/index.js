import FormComponent from '@/components/form_component/Form_component';
import useTranslation from 'next-translate/useTranslation'
import { useForm } from "react-hook-form";

const Form = () => {
  const { t } = useTranslation('common');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className='bg-[#f9f9f9] flex justify-center'>
      <div className='w-1/2 bg-white my-10 flex flex-col items-center rounded-lg'>
        <h1 className='text-xl font-bold text-primary my-6'>{t('registrationTitle')}</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='w-10/12 h-full'>
          <FormComponent register={register("fullName", { required: 'This felid is required' })} label={t('fullNameLabel')} placeholder={t('fullNameExample')} type={'text'} />
          <p className='text-red-500'>{errors.fullName?.message}</p>
          <FormComponent register={register("phoneNumber", { required: 'This felid is required' })} label={t('phoneNumberLabel')} placeholder={t('phoneNumberExample')} type={'text'} />
          <p className='text-red-500'>{errors.phoneNumber?.message}</p>
          <FormComponent register={register("password", { required: 'This felid is required' })} label={t('passwordLabel')} placeholder={t('passwordExample')} type={'password'} />
          <p className='text-red-500'>{errors.password?.message}</p>
          <FormComponent register={register("confirmPassword", { required: 'This felid is required' })} label={t('confirmPasswordLabel')} placeholder={''} type={'password'} />
          <p className='text-red-500'>{errors.confirmPassword?.message}</p>
        </form>

        <p className='my-2'>{t('termsOfServiceText')} <span className='text-primary font-bold'>{t('termsOfServiceLink')}</span> {t('privacyPolicyText')} <span className='text-primary font-bold'>{t('privacyPolicyLink')}</span></p>

        <button onClick={handleSubmit(onSubmit)} className='w-1/2 py-2 bg-primary text-base text-white font-bold rounded-lg mt-2 mb-12'>{t('saveButton')}</button>
      </div>
    </div>
  )
}

export default Form


