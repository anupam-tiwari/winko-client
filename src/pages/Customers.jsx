import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

import testlist from '../assets/JsonData/test.json'

const client = axios.create({
    baseURL: "https://winko-server.herokuapp.com/subscribers"
})

const customerTableHead = [
    '',
    'name',
    'number',
    'location',
    'registeration date',
]



const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{index}</td> 
        <td>{item.name}</td>
        <td>{item.number}</td>
        <td>{item.location}</td>
        <td>{item.subdate}</td>
        {/* <td>{item.total_spend}</td>
        <td>{item.location}</td>   */}
    </tr>
)

const Customers = () => {
    
    let[customer, setCustomer] = useState(null); 

    // useEffect(() => {
    //      axios.get("http://localhost:4000/subscribers/")
    //      .then(
    //          response => setCustomer(response.data))
    //          console.log(customer)
    // }, []);
    useEffect (() => {
        axios.get(`https://winko-server.herokuapp.com/subscribers`)
      .then(res => {
        const persons = res.data;
        setCustomer(persons)
      })
    }, [])

    console.log(customer)
    return (
        <div>
            <h2 className="page-header">
                customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            {customer && (<Table
                                limit='10'
                                headData={customerTableHead}
                                renderHead={(item, index) => renderHead(item, index)}
                                bodyData={customer}
                                renderBody={(item, index) => renderBody(item, index)}
                            />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
