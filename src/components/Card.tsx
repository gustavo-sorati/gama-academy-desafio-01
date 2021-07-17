import React, { useState } from 'react'
import {AiFillCloseCircle} from 'react-icons/ai';
import {BiMailSend} from 'react-icons/bi';
import { Confete } from './Confete';

import styles from './styles.module.scss';

interface CardProps {
  setCardStatus: any;
  confete: any;
  setConfete: any;
}

export const Card = ({setCardStatus, confete, setConfete}: CardProps) => {

  function handleClick() {
    setCardStatus(false);
    setConfete(false)
  }

  return (
    <>
      {confete && (
        <>
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
          <Confete />
        </>

      )}
      <div className={styles.card}>
        <AiFillCloseCircle
          className={styles.closeBtn}
          size={30} />

        <BiMailSend
          className={styles.mail}
          size={128} />

        <strong>E-mail Cadastrado com sucesso!</strong>

        <button onClick={handleClick}>Concluir</button>
      </div>
      <div className={styles.wrapper}></div>
    </>
  )
}

