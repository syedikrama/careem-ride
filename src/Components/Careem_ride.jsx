import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Careem_ride() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [pickup, setPickup] = useState('');
  let [drop, setDrop] = useState('');
  let [ridetype, setRidetype] = useState('');

  let [passengers, setPassengers] = useState('');
  let [date, setDate] = useState('');

  let [payment, setPayment] = useState('');
  let [request, setRequest] = useState('');
  let [note, setNote] = useState('');

  //  let [terms, setTerms] = useState('');
  let [show, setShow] = useState(false);
  let [promo, setPromo] = useState('');
  let [msg, setMsg] = useState('');

  let [userData, setUserData] = useState([]);

  //  https://67ad88483f5a4e1477ddf737.mockapi.io/user


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://67ad88483f5a4e1477ddf737.mockapi.io/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);



  async function submit() {
    try {
      let axios_responce = await axios.post("https://67ad88483f5a4e1477ddf737.mockapi.io/user", {
        name: name,
        email: email,
        phone: phone,
        pickup: pickup,
        drop: drop,
        ridetype: ridetype,
        passengers: passengers,
        date: date,
        payment: payment,
        request: request,
        note: note,


      },

      )
      setMsg('Data Save Successfully')
      setShow(true)
      // clear()
      // console.log("Data has been sent")
      // setTimeout(() => {
      //     setShow(false);
      // }, 3000);
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div className='container w-50'>
      <h1>Careem Ride Booking Form </h1>
      {/* <form> */}
        <p className='text-start fw-bold'>User Information</p>
        <input className='form-control my-3' type="text" name="name" placeholder='Full name' value={name}
          onChange={(a) => { setName(a.target.value) }} required />

        <input className='form-control my-3' type="email" name="email" placeholder='Email' value={email}
          onChange={(a) => { setEmail(a.target.value) }} />

        <input className='form-control my-3' type="number" name="number" placeholder='Phone Number' value={phone}
          onChange={(a) => { setPhone(a.target.value) }} />
        <br />
        <p className='text-start fw-bold'>Ride Details</p>
        <input className='form-control my-3' type="text" name="pickup" placeholder='Pickup location' required value={pickup}
          onChange={(a) => { setPickup(a.target.value) }} />

        <input className='form-control my-3' type="text" name="pickup" placeholder='Drop off location' required value={drop}
          onChange={(a) => { setDrop(a.target.value) }} />

        <select className='form-control' name="" id="" value={ridetype}
          onChange={(a) => { setRidetype(a.target.value) }}>
          <option value="">Select a ride type</option>
          <option value="Economy">Economy</option>
          <option value="Go mini">Go mini</option>
          <option value="Business">Business</option>
          <option value="Bike">Bike</option>
          <option value="Delivery">Delivery</option>
        </select>

        <input className='form-control my-3' type="number" name="pickup" placeholder='Number of passenger' required value={passengers}
          onChange={(a) => { setPassengers(a.target.value) }} />
        <br />

        <p className='text-start fw-bold'>Ride preferences</p>
        <input className='form-control my-3' type="date" name="pickup" placeholder='Pickup Time' required value={date}
          onChange={(a) => { setDate(a.target.value) }} />

        <input className=' my-3' type="radio" name="payment" value='Cash'
          onChange={(a) => { setPayment(a.target.value) }} /> &nbsp; Cash &nbsp;
        <input className=' my-3' type="radio" name="payment" value='Credit/Debit Card'
          onChange={(a) => { setPayment(a.target.value) }} /> &nbsp; Credit/Debit Card &nbsp;
        <input className=' my-3' type="radio" name="payment" value='Wallet'
          onChange={(a) => { setPayment(a.target.value) }} /> &nbsp; Wallet

        <input className='form-control my-3' type="text" name="pickup" placeholder='Promo code' required value={promo}
          onChange={(a) => { setPromo(a.target.value) }} />
        <br />

        <p className='text-start fw-bold'>Special request</p>

        <input className=' my-3' type="checkbox" name="pickup" value='Need a child seat'
          onChange={(a) => { setRequest(a.target.value) }} /> &nbsp; Need a child seat &nbsp;
        <input className=' my-3' type="checkbox" name="pickup" value='Wheelchair accessible'
          onChange={(a) => { setRequest(a.target.value) }} /> &nbsp; Wheelchair accessible &nbsp;
        {/* <textarea>Aditional Notes</textarea> */}

        <p className='text-start fw-bold'>Terms & condition</p>
        <input className=' my-3' type="checkbox" name="pickup" required value='Agree to terms & condition'
          onChange={(a) => { setNote(a.target.value) }} /> &nbsp; Agree to terms & condition &nbsp;

        <button className='btn btn-primary my-3' onClick={submit} >Submit</button>

        {show && (
        <div className="alert alert-success mt-3 text-center">
          {msg}
        </div>
      )}

      {/* Display the submitted data in a table */}
      <h2 className='mt-5'>Submitted User Data</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Pickup</th>
            <th>Drop</th>
            <th>Passenger</th>


          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.pickup}</td>
              <td>{user.drop}</td>
              <td>{user.passengers}</td>


            </tr>
          ))}
        </tbody>
      </table>

      {/* </form> */}
    </div>
  )
}
