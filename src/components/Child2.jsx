import { Button } from '@chakra-ui/react'
import React from 'react'
import style from "./child2.module.css"

const Child2 = () => {
  return (
    <div className={style.child2}>
        <p className={style.signin}>Sign In</p>
        <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default Child2