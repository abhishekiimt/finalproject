import Link from 'next/link';
import styles from '../styles/world.module.css';

const Links = () => {

 const linnks = [
        {
            id: 1,
            href : '/worldclock/africa',
            href_name : 'Africa'
        },
        {
            id: 2,
            href : '/worldclock/america',
            href_name : 'America'
        },
        {
            id: 3,
            href : '/worldclock/asia',
            href_name : 'Asia'
        },
        {
            id: 4,
            href : '/worldclock/atlantic',
            href_name : 'Atlantic'
        },
        {
            id: 5,
            href : '/worldclock/australia',
            href_name : 'Australia'
        },
        {
            id: 6,
            href : '/worldclock/europe',
            href_name : 'Europe'
        },
        {
            id: 7,
            href : '/worldclock/indian',
            href_name : 'Indian Ocean'
        },
        {
            id: 8,
            href : '/worldclock/pacific',
            href_name : 'Pacific Ocean'
        },
    ]
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    
                    {linnks.map( url =>(
                        <Link href={url.href} key={url.id}>
                        <div className={styles.card}>
                            <h3>{url.href_name}</h3>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}



export default Links