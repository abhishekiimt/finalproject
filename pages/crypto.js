import style from '../styles/Crypto.module.css'

const crypto = ({ data }) => {
    console.log(data)
    return (
        <div className={style.container}>
            <div className={style.title}>Crypto <span>Currencies</span></div>
            {data.map((crypto, index) =>(
                <div key={index}>
                    <div className={style.hero}>
                    <img src={crypto.image} height='50' width='50' alt="hello"/>
                    <h4>{crypto.name}</h4>
                    <h5>{crypto.symbol}</h5>
                    <p>Current Price : ${crypto.current_price}</p>
                    <p>{crypto.price_change_percentage_24h}</p>
                    <p>{crypto.market_cap_rank}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    const data = await res.json()
    
    if (!data) {
        return {
          notFound: true,
        }
      }

    return {
        props: {data}
    }
}

export default crypto
