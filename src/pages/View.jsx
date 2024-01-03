import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { allUsers } from '../service/allApi';
import { BASE_URL } from '../service/basrUrl';

function View() {

  const [user, setUser] = useState({})
  const { id } = useParams()
  console.log(id);


  useEffect(() => {
    getuser()
  }, [])


  const getuser = async () => {
    const { data } = await allUsers("")
    console.log(data);



    setUser(data.find(item => item._id === id))


  }



  return (
    <>

      <div className='container' style={{ height: '80vh' }}>
        { user?
          
            <Card className='shadow col-lg-6  mt-5 p-3 ms-auto '>

              <div className='image text-center'>

                <img className='border rounded p-1 circle' style={{ height: '80px', width: '80px', borderRadius: '50%' }} 
                src={`${BASE_URL}/uploads/${user.profile}`} alt="no image" />


              </div>

              <div className='text-center'>

                <h3>{user.fname}{user.lname}</h3>
                <h5>Email:{user.email}</h5>
                <h5>Mobile:{user.mobile}</h5>
                <h5>Gender:{user.gender}</h5>
                <h5>Status:{user.status}</h5>
                <h5>Location:{user.location}</h5>


              </div>

            </Card>:""
       }
      </div>


    </>
  )
}

export default View