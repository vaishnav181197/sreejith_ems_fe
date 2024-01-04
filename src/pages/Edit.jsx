import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-select'

import LoadingSpinner from '../component/LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addUser, allUsers } from '../service/allApi';
import { useNavigate, useParams } from 'react-router-dom';
import { registerContext } from './ContextShare';



function Edit() {
  const{registerData,setregisterData}= useContext(registerContext)
  const navigate=useNavigate()
 
   const [showspin, setshowSpin] = useState(true)
   const [exiuser,setExiUser]=useState({})
  
   // normal inputs
   const [normalUserInput, setNormalUserInput] = useState({
     fname: "",
     lname: "",
     email: "",
     mobile: "",
     location: "",
     gender: ""
 
   })
 
 
 
 
   // to hold status
   const [status, setstatus] = useState("")
   // to hold file
   const [profile, setprofile] = useState("")
 
   // to create a state for holding upload data
 
   const [preview, setPreview] = useState("")
 
   useEffect(() => {
     if (profile) {
       URL.createObjectURL(profile)
       setPreview(URL.createObjectURL(profile))
     }
 
     setTimeout(() => {
       setshowSpin(false)
     }, 2000);
   }, [profile])
 
 
   const options = [
     { value: 'Active', label: 'Active' },
     { value: 'InActive', label: 'InActive' },
 
   ]
 
   // define function to attach normal input into state
   const getandsetUserNormalInput = (e) => {
     const { name, value } = e.target
     setNormalUserInput({ ...normalUserInput, [name]: value })
   }
   // console.log(normalUserInput);
   // console.log(status);
   // console.log(profile);
   const { id } = useParams()

   const getuser = async () => {
    const { data } = await allUsers("")
    // console.log(data);

      let existingUser=data?.find(item => item._id === id)
     console.log(existingUser,"exi");
     setExiUser(existingUser)
    


  }


   useEffect(()=>{
    getuser()
    console.log(exiuser,"esxi")
   },[id])


   const handlefile = (e) => {
     console.log(e.target.files[0])
   
     setprofile(e.target.files[0])
    
   }
   
 
 
   const handleSubmit = async (e) => {
     e.preventDefault()
 
     const { fname, lname, email, mobile, gender, location } = normalUserInput
     if (!fname || !lname || !email || !mobile || !gender || !location || !status ) {
       toast.warning('please fill the form completely')
     }
     else {
       // toast.success("form completely filled")
 
       const data = new FormData()
       data.append("fname", fname)
       data.append("lname", lname)
       data.append("email", email)
       data.append("mobile", mobile)
       data.append("gender", gender)
       data.append("status", status)
       data.append("profile", profile)
       data.append("location", location)
 
       const headers = {
         "Accept": "*/*",
         "content-type": "multipart/form-data"
       }
 
       //  api call 
 
       const response = await addUser(data, headers)
 
 
       console.log(response);
 
       if(response.status===200){
         setNormalUserInput({...normalUserInput,
           fname: "",
           lname: "",
           email: "",
           mobile: "",
           location: "",
           gender: ""
       
         })
         setstatus("")
         setprofile("")
         setregisterData(response.data)
         
         navigate('/')
       }
 
      
 
 
 
     }
 
   }
 
 
 
 
   return (
     <>
 
       {
         showspin ?
           <LoadingSpinner /> :
           <div className='container mt-5'>
 
             <h1 className='text-center fw-bolder'>update Employee Details</h1>
 
 
             <div className='mt-3 shadow border rounded p-2 '>
 
               <div className='text-center'>
                 <img style={{ height: '80px', width: '80px' }} src={preview ? preview : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} alt="no image" />
               </div>
 
               <Form className='mt-3'>
 
                 <Row>
 
                   {/* firstname */}
                   <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputfname" label="FirstName">
                     <Form.Control type="text" name='fname' onChange={e => getandsetUserNormalInput(e)} value={exiuser.fname} placeholder="FirstName" />
                   </FloatingLabel>
 
                   {/* Lastname */}
 
                   <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputlname" label="LastName">
                     <Form.Control name='lname' onChange={e => getandsetUserNormalInput(e)} value={exiuser.lname} type="text" placeholder="LastName" />
                   </FloatingLabel>
 
                   {/* email */}
 
                   <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputemail" label="Email">
                     <Form.Control name='email' onChange={e => getandsetUserNormalInput(e)} value={exiuser.email} type="email" placeholder="Email" />
                   </FloatingLabel>
 
                   {/* mobile */}
 
                   <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputmobile" label="Mobile">
                     <Form.Control name='mobile' onChange={e => getandsetUserNormalInput(e)} value={exiuser.mobile} type="text" placeholder="Mobile" />
                   </FloatingLabel>
 
 
                   {/* radio button  */}
 
                   <Form.Group className='mb-3 col-lg-6' >
 
                     <Form.Label>Select Gender</Form.Label>
 
                     <Form.Check
 
                       label="Male"
                       name="gender"
                       type={"radio"}
                       value={"male"}
                       onChange={e => getandsetUserNormalInput(e)}
                     />
 
                     <Form.Check
 
                       label="FeMale"
                       name="gender"
                       type={"radio"}
                       value={"female"}
                       onChange={e => getandsetUserNormalInput(e)}
                     />
 
                   </Form.Group>
 
 
                   {/* select dropdown */}
                   <Form.Group className='mb-3 col-lg-6' >
 
                     <Form.Label>Select Employee Status</Form.Label>
 
                     <Select options={options} onChange={e => setstatus(e.value)} value={exiuser.status}/>
 
                   </Form.Group>
 
 
                   {/* file upload */}
 
                   <Form.Group className='mb-3 col-lg-6' >
 
                     <Form.Label>Choose Profile Picture</Form.Label>
 
                     <Form.Control type="file" onChange={e => handlefile(e)} name='user profile' />
 
                   </Form.Group>
 
                   {/* employee location */}
                   <Form.Group className='mb-3 col-lg-6' >
 
                     <Form.Label>Employee Location</Form.Label>
 
                     <Form.Control type="text" name='location' onChange={e => getandsetUserNormalInput(e)} value={exiuser.location} placeholder="Employee Location" />
 
                   </Form.Group>
 
 
                   <Button onClick={e => handleSubmit(e)} type='submit' variant='primary'>Submit</Button>
 
                 </Row>
 
 
               </Form>
 
 
             </div>
 
           </div>
 
       }
       <ToastContainer />
 
     </>
   )
 
  

}

export default Edit