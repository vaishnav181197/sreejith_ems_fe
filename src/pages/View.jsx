import React from 'react'
import { Card } from 'react-bootstrap'

function View() {
  return (
    <>

      <div className='container' style={{ height: '80vh' }}>

        <Card className='shadow col-lg-6  mt-5 p-3 ms-auto '>

          <div className='image text-center'>

            <img className='border rounded p-1 circle' style={{ height: '80px', width: '80px', borderRadius:'50%' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="no image" />
             

          </div>

          <div className='text-center'>

            <h3>Max Miller</h3>
            <h5>Email:Max@gmail.com</h5>
            <h5>Mobile:9846757754</h5>
            <h5>Gender:Male</h5>
            <h5>Status:Active</h5>
            <h5>Location:mumbai</h5>


          </div>

        </Card>

      </div>


    </>
  )
}

export default View