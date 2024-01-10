import styles from './card.module.css';


export default async function Card() {
    const cards = await fetch('http://localhost:8080/destino/alldestino').then(res => res.json());
    console.log(cards);

    return (
        <div className={styles.container}>
            {cards?.map((card) => (
                <div key={card.id} className={styles.card}>
                    <div className={styles.card_title}>
                        <p>{card.nome}</p>
                    </div>
                        <p>Valor: R$ {card.valor}</p>
                </div>
            ))}
        </div>
    )
} 