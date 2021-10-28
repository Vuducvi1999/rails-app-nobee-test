import axios from 'axios';
import React, { useState } from 'react'
import {serverApi} from '../constants/api'

function Home() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const onChange = e => {
    setName(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    axios.post(`${serverApi}/name/country-matched`, {
      name: name
    }).then(data=> {
      setCountry(data.data)
    }).catch(e=>console.log(e))
  }
  return (
    <div className='container'>
      <h1 className="text-center mt-5 mb-4">Get matched country has popularity name</h1>
      <div className="col-8 offset-2 p-5 alert alert-primary">
        <form className="row" onSubmit={onSubmit}>
          <div className="col-9">
            <input type="text" name="name" value={name} onChange={onChange} className='form-control' />
          </div>
          <div className="col-3">
            <button className='btn btn-primary w-100'>Submit</button>
          </div>
        </form>
        <div className='mt-3'>Country matched: {country || 'not found'}</div>
      </div>
    </div>
  )
}

export default Home
