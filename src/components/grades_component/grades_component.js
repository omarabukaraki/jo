
import { useState } from 'react';
import point from '../../../public/point.svg';
import point_orange from '../../../public/point_orange.svg';
import cap from '../../../public/cap.svg';
import cap_blue from '../../../public/cap_blue.svg';
import useTranslation from 'next-translate/useTranslation';
import GradeIconBtn from "./grade_icon_btn";
import GradeLine from "./grade_line";
import GradeTextBtn from "./grade_text_btn";

const GradesComponent = () => {
    const { t } = useTranslation('common');

    const [activeYear, setActiveYear] = useState(null);
    const [capImage, setCapImage] = useState(cap);
    const [capColor, setCapColor] = useState('text-[#f2a057]');
    const [activeButton, setActiveButton] = useState(null);

    const handlePointClick = (year) => {
        setActiveYear(year);
        setCapImage(cap_blue);
        setCapColor('text-primary');
        setActiveButton(year); 
    };

    const handleCapClick = () => {
        setCapImage(cap);
        setActiveYear(null);
        setCapColor('text-[#f2a057]');
        setActiveButton('2007'); 
    };

    const getImageSrc = (year) => (activeYear === year ? point_orange : point);

    const getTextColor = (year) => (activeYear === year ? 'text-[#f2a057]' : 'text-primary');

    return (
        <>
            <h1 className='text-center text-4xl font-bold pt-16'>{t('programTitle')}</h1>
            <div className='w-full h-48 mt-10 flex flex-col place-items-center'>
                <div className='w-11/12 flex rounded-md h-1/4'>
                    <GradeIconBtn
                        src={capImage}
                        year={'2007'}
                        color={capColor}
                        click={handleCapClick}
                    />
                    <GradeIconBtn
                        click={() => handlePointClick('2008')}
                        src={getImageSrc('2008')}
                        year={'2008'}
                        color={getTextColor('2008')}
                    />
                    <GradeIconBtn
                        click={() => handlePointClick('2009')}
                        src={getImageSrc('2009')}
                        year={'2009'}
                        color={getTextColor('2009')}
                    />
                    <GradeIconBtn
                        click={() => handlePointClick('2006')}
                        src={getImageSrc('2006')}
                        year={'2006'}
                        color={getTextColor('2006')}
                    />
                </div>
                <GradeLine />

                <div className='w-11/12 flex bg-white rounded-md h-1/4'>
                    <GradeTextBtn
                        text={t('programTrackerTawjihi2007')}
                        active={activeButton === '2007'}
                        click={handleCapClick}
                    />
                    <GradeTextBtn
                        text={t('programTrackerTawjihi2008')}
                        active={activeButton === '2008'}
                        click={() => handlePointClick('2008')}
                    />
                    <GradeTextBtn
                        text={t('programTrackerTawjihi2009')}
                        active={activeButton === '2009'}
                        click={() => handlePointClick('2009')}
                    />
                    <GradeTextBtn
                        text={t('programTrackerComplementary2006')}
                        active={activeButton === '2006'}
                        click={() => handlePointClick('2006')}
                    />
                </div>
            </div>
        </>
    );
}

export default GradesComponent;
