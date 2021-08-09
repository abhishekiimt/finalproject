import styles from '../styles/Main.module.css'
import Link from 'next/link'

export default function Home() {

  const urlPath = [
    {
      id : 1,
      path : '/feed/1',
      app_name : 'Go to feed ▶️, News APP'
    },
    {
      id : 2,
      path : '/dom',
      app_name : 'Sentiment Analysis APP'
    },
    {
      id : 3,
      path : '/omdb',
      app_name : 'AI Genrated Photo APP'
    },
    {
      id : 4,
      path : '/crypto',
      app_name : 'Crypto Currencies Tracker APP'
    },
    {
      id : 5,
      path : '/worldclock',
      app_name : 'World Clock REAL Time APP'
    },
    {
      id : 6,
      path : 'http://restapiofpm.herokuapp.com/api/ministers/',
      app_name : 'REST API of PM of India'
    },
  ]
  return (
    <div className={styles.cont}>
      <div className={styles.main}>
      <h1 className={styles.title}><span>Multipurpose</span> API App</h1>
      <p className={styles.description}>Visit This site to explore the Public API Projects</p>
      ⤵️⤵️⤵️⤵️
      </div>
      <div className={styles.hero}>
        <div className={styles.grid}>
          {urlPath.map((paths) =>(
            <Link key={paths.id} href={paths.path}>
            <a className={styles.card}>
              {paths.app_name}
            </a>
            </Link>
          ))}
        </div>
        </div>    
    </div>
  )
}
