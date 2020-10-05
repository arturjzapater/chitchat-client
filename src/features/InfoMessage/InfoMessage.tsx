import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types/State'

const InfoMessage: React.FC = () => {
  const info = useSelector((state: State) => state.infoMessage)

  if (info === '') return null
  return (
    <section className="bubble m-2 sm:w-4/5 md:w-3/5 lg:1/2 sm:mx-auto">
      <p>{info}</p>
    </section>
  )
}

export default InfoMessage
