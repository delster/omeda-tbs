import React, { useState } from 'react'
import styled from 'styled-components'

const Game = styled.div`
  width: 95%;
  max-width: 1200px;
  background-color: #f0f0f0;
`
const TurnOrder = styled.div``
const CombatArea = styled.div``
const UserInput = styled.div``

const Client = () => {
  const [characters, setCharacters] = useState([])
  const [turnOrder, setTurnOrder] = useState([])

  // Populate our character slots with randoms.
  const fillWithRandomCharacters = () => {
    let chars = []
/* Set current characters as a set of randoms.
    for(let i=0;i<6;i++) {
      chars.push( Character.random() )
    }
*/
    setCharacters(chars)
  }

  // Go to the next person in queue, and subtract their remaining delay from all actors.
  const handleNextTurn = () => {
    let timeToPass = turnOrder[0].delay
    setTurnOrder(turnOrder.shift)
    characters.map(char => {char.delay -= timeToPass})
  }

  return (
    <Game>
      <TurnOrder order={turnOrder} />
      <CombatArea chars={characters} />
      <UserInput />
    </Game>
  )
}

export default Client