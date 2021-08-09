import style from '../styles/Main.module.css'

const aiphotos = ({ data }) => {

    const img_data = data.faces[0].urls[4][512] 
    return (
        <div className={style.conta}>
            <div className={style.imghero}>
            <img src={img_data} alt="hellpo" />
            </div>
            <button className={style.button} onClick={()=> location.reload()}>New Image</button>
        </div>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch('https://api.generated.photos/api/v1/faces?api_key=yBhaceqG9MCaSawlNWK55w&gender=female&order_by=random')
    const data = await res.json()
    console.log()

    return {
        props: {data}
    }
}

export default aiphotos
