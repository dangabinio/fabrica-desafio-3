import styles from './Usuario.module.css'

function Usuario({nome, idade, foto}){
    return(
        <div className='slytes.div_ user'>

            <img src={foto}></img>
            <h1 className={styles.titulo}>{nome}</h1>
            <p>{idade}</p>
        </div>
    )
}

export default Usuario