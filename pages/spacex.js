import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import style from '../styles/Home.module.css'



const Spacex = ({ launches }) => {
    console.log('launches', launches)
    return (
        <div>
            <main className={style.main}>
                <h1 className={style.title}>
                    SpaceX Launches
                </h1>
                <p className={style.description}>
                    Latest launches from SpaceX
                </p>
                <div className={style.flex}>
                    {launches.map(launch =>{
                        return(
                            <a key={launch.id} href="">
                                <h3>{launch.mission_name} &rarr;</h3>
                                <p> <strong>Launch Time: </strong> {new Date(launch.launch_date_local).toLocaleDateString('en-US')}</p>
                            </a>

                        )
                    })}
                </div>
            </main>
            
        </div>
    )
}

export const getStaticProps = async (context) => {
    const client = new ApolloClient({
        uri: "https://api.spacex.land/graphql/",
        cache: new InMemoryCache()
    })

    const {data} = await client.query({
        query:gql`
        {
            launches(limit: 10) {
              launch_date_local
              launch_site {
                site_name_long
              }
              launch_year
              launch_success
              links {
                article_link
                video_link
              }
              mission_name
              rocket {
                rocket_name
              }
              ships {
                name
                speed_kn
                status
              }
              upcoming
            }
          }
          
        `
    })

    console.log('data', data)
    return {
        props: {
            launches : data.launches
        }
    }
}

export default Spacex
