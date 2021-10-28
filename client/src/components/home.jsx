
import React from 'react'
import FormCallApi from './formCallApi';

function Home() {
  const propsData = {
    country: {
      title: 'Get Country',
      field: 'name',
      queryAPI: '/name/country-matched'
    },
    numPeople: {
      title: 'Get Number of people',
      field: 'country_code',
      queryAPI: '/name/client-num'
    }
  }
  return (
    <>
      <FormCallApi data={propsData.country} />
      <FormCallApi data={propsData.numPeople} />
    </>
  )
}

export default Home
