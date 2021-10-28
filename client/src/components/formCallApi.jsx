import axios from 'axios';
import React, { useState } from 'react'
import {serverApi} from '../constants/api'

function FormCallApi(props) {
  const {field, queryAPI, title } = props.data;
  const [data, setData] = useState('');
  const [result, setResult] = useState('');

  const onChange = e => {
    setData(e.target.value)
  }
  const getResult = e => {
    e.preventDefault()

    console.log(`${serverApi}${queryAPI}`);

    axios.post(`${serverApi}${queryAPI}`, {
      [field]: data
    }).then(res => {
      setResult(res.data)
      console.log(res.data);
    }).catch(e => console.log(e))
  }
  return (
    <>
      <div className='container'>
        <h1 className="text-center mt-5 mb-4">{title}</h1>
        <div className="col-8 offset-2 p-5 alert alert-primary">
          <form className="row" onSubmit={getResult}>
            <div className="col-9">
              <input type="text" name={field} value={data} onChange={onChange} className='form-control' />
            </div>
            <div className="col-3">
              <button className='btn btn-primary w-100'>Submit</button>
            </div>
          </form>
          <div className='mt-3'>Result: {result || 'not found'}</div>
        </div>
      </div>
    </>
  )
}

export default FormCallApi
