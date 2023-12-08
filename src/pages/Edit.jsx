import React from 'react'
import { Button, Form, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-select'


function Edit() {
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },

  ]
  return (
    <>
           <div className='container mt-5'>

<h1 className='text-center fw-bolder'>Update Employee Details</h1>


<div className='mt-3 shadow border rounded p-2 '>

  <div className='text-center'>
    <img style={{ height: '80px', width: '80px' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="no image" />
  </div>

  <Form className='mt-3'>

    <Row>

      {/* firstname */}
      <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputfname" label="FirstName">
        <Form.Control type="text" placeholder="FirstName" />
      </FloatingLabel>

      {/* Lastname */}

      <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputlname" label="LastName">
        <Form.Control type="text" placeholder="LastName" />
      </FloatingLabel>

      {/* email */}

      <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputemail" label="Email">
        <Form.Control type="email" placeholder="Email" />
      </FloatingLabel>

      {/* mobile */}

      <FloatingLabel className='mb-3 col-lg-6' controlId="floatingInputmobile" label="Mobile">
        <Form.Control type="text" placeholder="Mobile" />
      </FloatingLabel>


      {/* radio button  */}

      <Form.Group className='mb-3 col-lg-6' >

        <Form.Label>Select Gender</Form.Label>

        <Form.Check

          label="Male"
          name="gender"
          type={"radio"}
          value={"male"}
        />

        <Form.Check

          label="FeMale"
          name="gender"
          type={"radio"}
          value={"female"}
        />

      </Form.Group>


      {/* select dropdown */}
      <Form.Group className='mb-3 col-lg-6' >

        <Form.Label>Select Employee Status</Form.Label>

        <Select options={options} />

      </Form.Group>


      {/* file upload */}

      <Form.Group className='mb-3 col-lg-6' >

        <Form.Label>Choose Profile Picture</Form.Label>

        <Form.Control type="file" name='user profile' />

      </Form.Group>

      {/* employee location */}
      <Form.Group className='mb-3 col-lg-6' >

        <Form.Label>Employee Location</Form.Label>

        <Form.Control type="text" placeholder="Employee Location" />

      </Form.Group>


      <Button type='submit' variant='primary'>Submit</Button>

    </Row>


  </Form>


</div>

</div>

    </>
  )
}

export default Edit