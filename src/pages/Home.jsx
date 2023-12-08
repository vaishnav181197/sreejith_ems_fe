import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hometable from '../component/Hometable'
import LoadingSpinner from '../component/LoadingSpinner'



function Home() {

  const [showspin, setshowSpin] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setshowSpin(false)
    }, 2000);
  })

  return (
    <>

      <div>
        {
          showspin?
         <LoadingSpinner/>:

          <div className='container'>

            <div className='search-all d-flex align-items-center '>

              <div className='search d-flex align-items-center mt-5'>

                <span className='fw-bolder text-dark'> Search: </span>
                <input type="text" className='form-control ms-3' style={{width:'400px'}} placeholder='Serach By Employee Name' />

              </div>

              <Link className='btn btn-warning ms-auto mt-5' to={'/add'}><i class="fa-solid fa-user-plus"></i> Add</Link>

            </div>


           
            
            <Hometable/>

       

          </div>
          
          }
      </div>


    </>
  )
}

export default Home