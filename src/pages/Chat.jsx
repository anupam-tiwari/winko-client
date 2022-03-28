import React, {useState, useEffect}  from 'react'
import axios from 'axios'
import Table from '../components/table/Table'

const client = axios.create({
    baseURL: "https://winko-server.herokuapp.com/chat"
})

const customerTableHead = [
    '',
    'Customer Id',
    'date',
    'Latest Message'
]




const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{index}</td> 
        <td>{item._id}</td>
        <td>{item.date}</td>
        <td>{item.data[item.data.length - 1]}</td>
        <td>{item.subdate}</td>
        {/* <td>{item.total_spend}</td>
        <td>{item.location}</td>   */}
    </tr>
)


function Chat() {

    let[customer, setCustomer] = useState(null); 

    // useEffect(() => {
    //      axios.get("http://localhost:4000/subscribers/")
    //      .then(
    //          response => setCustomer(response.data))
    //          console.log(customer)
    // }, []);
    useEffect (() => {
        axios.get(`https://winko-server.herokuapp.com/chat`)
      .then(res => {
        const persons = res.data;
        setCustomer(persons)
      })
    }, [])




   

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
                        bodyData={customer.reverse()}
                        renderBody={(item, index) => renderBody(item, index)}
                    />)}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Chat