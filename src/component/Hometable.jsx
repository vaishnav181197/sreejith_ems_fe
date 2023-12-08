import React from 'react'

import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



function Hometable() {
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
                        <tr>
                            <td>1</td>
                            <td>Mark wel</td>
                            <td>Mark@gmail.com</td>
                            <td>9846757754</td>
                            <td>Active</td>
                            <td><img style={{ width: '70px', height: '70px', borderRadius: '50%' }} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="no image" /></td>
                            <td>

                                <span>

                                     <Link to={'/view/:id'}> <i class="fa-solid fa-eye text-success fs-3 me-2 "></i> </Link>

                                     <Link to={'/edit/:id'}> <i class="fa-solid fa-pen text-primary fs-3 me-2 "></i> </Link>

                                     <span><i class="fa-solid fa-trash fs-3 "></i> </span>




                                </span>
                            </td>
                        </tr>

                    </tbody>
                </Table>





            </div>


        </>
    )
}

export default Hometable