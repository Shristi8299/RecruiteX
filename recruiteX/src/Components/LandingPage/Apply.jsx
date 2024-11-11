// import { GoArchive } from "react-icons/go";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaUserCheck, FaUsers } from "react-icons/fa";
import '../../App.css'

function Apply() {
    return (
//         <>
//            <div className="row apply_image text-center mt-1 pt-2">
//     <div className="text_color mt-5">Apply Process</div>
//     <div className="h1 text-light">How It Works</div>

//     <div className="row ">
//         {/* Use responsive column classes */}
//         <div className="col-12 col-sm-2"></div>
//         <div className="col-12 col-sm-8">
//             <div className="row">
//                 {/* Adjust each step's column size for better responsiveness */}
//                 <div className="col-12 col-sm-4 mb-4">
//                     <div className="box_border">
//                         <div className="job_search text-center ">
//                             <h1 className="child_div_apply_ic mt-3"><GoArchive /></h1>
//                             <div className="h4 child_div_apply mt-3">1. Search A Job</div>
//                             <div className="tex px-4  mt-3 pb-4">Text editing and text formatting, etc., fonts, and sizes. It was developed to integrate the features included.</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-12 col-sm-4 mb-4">
//                     <div className="box_border">
//                         <div className="job_search text-center ">
//                             <h1 className="child_div_apply_ic mt-3"><GoArchive /></h1>
//                             <div className="h4 child_div_apply mt-3">2. Search A Job</div>
//                             <div className="tex px-4  mt-3 pb-4">Text editing and text formatting, etc., fonts, and sizes. It was developed to integrate the features included.</div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-12 col-sm-4 mb-4">
//                     <div className="box_border">
//                         <div className="job_search text-center ">
//                             <h1 className="child_div_apply_ic mt-3"><GoArchive /></h1>
//                             <div className="h4 child_div_apply mt-3">3. Search A Job</div>
//                             <div className="tex px-4  mt-3 pb-4">Text editing and text formatting, etc., fonts, and sizes. It was developed to integrate the features included.</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="col-12 col-sm-2"></div>
//     </div>
// </div>

//         </>


<>
<div className="row text-center mt-4 apply_job_section">
    <div className="col-sm-12 mt-5">
    <p className='apply_job_heading'>Apply Process</p>
    <h1>How it Works</h1>
    <div className="row d-flex justify-content-center">
        <div className="col-4 job_search_card">
            <div><AiOutlineFileSearch size={50} /></div>
            <b className=''>1.Search a job</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             </p>
        </div>
        <div className="col-4 job_search_card">
            <div ><FaUserCheck size={50}  /></div>
            <b className=''>2.Apply for job</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
        <div className="col-4 job_search_card">
            <div><FaUsers size={50} /></div>
            <b className=''>3.Get your job</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           </p>
        </div>
    </div>
    </div>
   
</div>
</>
    )
}
export default Apply;