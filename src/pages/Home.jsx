import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hometable from '../component/Hometable'
import LoadingSpinner from '../component/LoadingSpinner'
import { deleteContext, registerContext } from './ContextShare'
import { Alert } from 'react-bootstrap'
import { allUsers, deleteUser } from '../service/allApi'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Home() {
  const [allUserdata,setallUserdata]=useState([])
  const [showspin, setshowSpin] = useState(true)
  const {registerData,setregisterData}=useContext(registerContext)
   const{deleteData,setDeleteData}=useContext(deleteContext)


  useEffect(() => {
    getAllemployess()
    setTimeout(() => {
      setshowSpin(false)
    }, 2000);
  },[])

  // function definition for api call 

  const getAllemployess=async()=>{
    const response=  await allUsers()
    console.log(response);
    if(response.status==200){
      // console.log(response.data);
      setallUserdata(response.data)
      

    }
    else{
          toast.error("can not fetch data")
    }
  }
// function defnition for romove data 
  const removeUser=async(id)=>{
    const response=  await deleteUser(id)

    if(response.status===200){
      getAllemployess()
      setDeleteData(response.data)
    }
    else{
      toast.error("operation failed !!! please try after some time!!")
    }
  }


  return (
    <>

    {
      deleteData&&<Alert variant='danger' onClose={()=>setDeleteData("")} dismissible>
      {deleteData.fname.toUpperCase()} removed successfully.......
    </Alert>
    }


    {
      registerData&&<Alert variant='success' onClose={()=>setregisterData("")} dismissible>
        {registerData.fname.toUpperCase()} registered successfully.......
      </Alert>
    }

    

      <div>
        {
          showspin?
         <LoadingSpinner/>:

          <div className='container'>

            <div className='search-all d-flex align-items-center '>

              <div className='search d-flex align-items-center mt-5'>

                <span className='fw-bolder text-dark'> Search: </span>
                <input type="text"  className='form-control ms-3' style={{width:'400px'}} placeholder='Serach By Employee Name' />

              </div>

              <Link className='btn btn-warning ms-auto mt-5' to={'/add'}><i class="fa-solid fa-user-plus"></i> Add</Link>

            </div>


           
            
            <Hometable displayData={allUserdata} removeuser={removeUser}/>

       

          </div>
          
          }
      </div>

      <ToastContainer />
    </>
  )
}

export default Home