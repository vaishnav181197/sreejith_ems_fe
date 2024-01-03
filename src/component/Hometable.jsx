import React from 'react'
import { Button } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../service/basrUrl';



function Hometable({ displayData, removeuser }) {
    console.log(displayData);
    return (
        <>

            <div className='table mt-5'>

                <h1 className='fw-bolder'>List of All Employees</h1>


                <Table bordered hover className='mt-3 shadow'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FullName</th>
                            <th>E-mail</th>
                            <th>Mobile</th>
                            <th>Status</th>
                            <th>Profile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                             
                          displayData.length>0?

                          displayData.map((item,index)=>(

                            <tr>
                                <td>{index+1}</td>
                                <td>{item.fname}{item.lname}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td><Button className={item.status==="Active"?"btn btn-success":"btn btn-danger"} >{item.status}</Button>   </td>
                                <td><img style={{ width: '70px', height: '70px', borderRadius: '50%' }} src={`${BASE_URL}/uploads/${item.profile}`} alt="no image" /></td>
                                <td>

                                    <span>

                                        <Link to={`/view/${item._id}`}> <i class="fa-solid fa-eye text-success fs-3 me-2 "></i> </Link>

                                        <Link to={`/edit/${item._id}`}> <i class="fa-solid fa-pen text-primary fs-3 me-2 "></i> </Link>

                                        <span onClick={()=>removeuser(item._id)}><i class="fa-solid fa-trash fs-3 "></i> </span>




                                    </span>
                                </td>
                            </tr>









                          )):<tr className='w-100 text-danger mt-5'>

                           Nothing to Display!!!!!!!

                          </tr>



                           


                        }







                    </tbody>
                </Table>





            </div>


        </>
    )
}

export default Hometable