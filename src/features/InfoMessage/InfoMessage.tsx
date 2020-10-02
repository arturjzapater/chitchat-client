import React from 'react'
import { useSelector } from 'react-redux'
import { State } from '../../types/State'

const InfoMessage: React.FC = () => {
  const info = useSelector((state: State) => state.infoMessage)

  if (info === '') return null
  return (
    <section>
      <p>{info}</p>
    </section>
  )
}

export default InfoMessage
