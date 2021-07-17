import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from '../../components/Card';

import styles from './styles.module.scss';

const regex  = {
  rx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  message: 'Porfavor insira um e-mail válido.'
}

export const Home = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const [cardStatus, setCardStatus] = useState(false);

  const [confete, setConfete] = useState(false);

  function checkEmail(event: any) {
    event.preventDefault();
    const formElement = event.target;

    if(formElement.email.value === ''){
      setError(regex.message);
    } else if(regex.rx.test(email.toLowerCase())){
      window.localStorage.setItem('@zaara-email', email);
      setError('');
      formElement.email.value = '';
      setCardStatus(true);
      setConfete(true);
    } else {
      setError(regex.message);
    }
  }

  function handleFocus(event: any){
    const label = event.target.nextElementSibling;

    (label as HTMLElement).style.transform = 'translate(0, -4rem)';
    (label as HTMLElement).style.fontSize = '1rem';
  }

  function handleBlur(event: any){
    const label = event.target.nextElementSibling;

    (label as HTMLElement).style.transform = 'translate(0, 0)';
    (label as HTMLElement).style.fontSize = '1.5rem';
  }

  return (
    <main className={styles.main}>

      {/* -- CONTEUDO -- */}
      <div className={styles.mainContainer}>
        <div className={styles.hero}>
          <img src="https://images.unsplash.com/photo-1615222443417-6d76586644a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1898&q=80" alt="Capa de fundo da Marca" />

          <img
          src="https://images.unsplash.com/photo-1615222443417-6d76586644a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1898&q=80"
          alt="up-tribe"
          className={styles.bgCard} />
        </div>

        <section className={styles.content}>
          <nav className={styles.menu}>
            <strong>
              Não esqueça de conferir nossas redes sociais! &nbsp; &nbsp;
              <Link to="https://github.com/gustavo-sorati" target="_blank">
                #github
              </Link>
            </strong>

            <span>Zaara</span>
          </nav>

          <h2>Subscreva,</h2>
          <h1>e não perca as promoções</h1>

          <form onSubmit={checkEmail}>
            <div>
              <div className={styles.inputComponent}>
                <input
                  type="email"
                  name="email"
                  onChange={({target}: any) => setEmail(target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <label>
                  Insira aqui o seu e-mail
                </label>
              </div>

              <button>Subscrever</button>
            </div>
            <span className={styles.error}>{error}</span>

          </form>
        </section>

        {cardStatus && (
          <Card setCardStatus={setCardStatus} confete={confete} setConfete={setConfete} />
        )}

      </div>
    </main>
  )
}
