import AlertComponent from '@/components/Alert_component.js';
import {programSectionData} from '../../../utils.js';
import GradesComponent from '@/components/grades_component/grades_component.js';
import ProgramCart from '@/components/program_component/Program_Cart.js';


const ProgramPage = () => {

    return (
        <div className='bg-[#f9f9f9] flex flex-col justify-center place-items-center pb-10'>
             <AlertComponent/>
             <GradesComponent/>
            <div className='mt-10 flex flex-wrap justify-center'>
                {
                    programSectionData.map((data, index) => {
                        return <ProgramCart key={index} data={data}/>
                    })
                }
            </div>
        </div>
    )
}

export default ProgramPage
