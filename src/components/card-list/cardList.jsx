import React from 'react'
import './cardList.css'
import { Card } from '../card/card'

export const CardList = props => (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
)
