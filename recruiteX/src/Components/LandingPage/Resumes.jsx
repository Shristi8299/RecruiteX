
function Resumes()
{
    return(
        <>
        <div className="row resume_image mt-1">
    <div className="blur">
        <div className="row">
            {/* Use responsive column classes */}
            <div className="col-12 col-sm-3"></div>
            <div className="col-12 col-sm-6 text-center">
                <div className="mt-5 text-light fs-4">Featured Tour Package</div>
                <div className="h1 mt-3 text-light">Make A Different Online Resume</div>
                <button className="btn upload_resume mt-5">Upload Your CV</button>
            </div>
            <div className="col-12 col-sm-3"></div>
        </div>
    </div>
</div>
        </>



// {/* <>

// <div className="row upload_cv_section d-flex align-items-center justify-content-center">
//               <div className="row-12 text-center">
//               <span className=''>FEATURED TOURS PACKAGES</span>
//                 <h1 className=''>Make a Difference with Your</h1>
//                 <h1 className=''>Online Resume!</h1>
//                 <button className='btn btn-outline-light text-light px-4  mt-4 rounded-0'>UPLOAD YOUR CV</button>
//               </div>
//             </div>

// </> */}
    )
}
export default Resumes;