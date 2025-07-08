// src/app/page.js

import styles from "./page.module.css";

const Equipos = ({ equipos }) => {
  return (
    <div className={styles.container__list}>
      <h2 className={styles.title}>Equipos de Fútbol</h2>
      {equipos.map((equipo) => (
        <div key={equipo.id}>
          <h3 className={styles.nameclub}>{equipo.nombre}</h3>
          <ul>
            {equipo.plantilla.map((jugador) => (
              <li
                key={jugador.id}
                className={`${styles.jugadorCard} ${styles['card-equipo-' + equipo.id]}`}
              >
                <img
                  src={jugador.foto}
                  alt={jugador.nombre}
                  className={styles.foto}
                />
                <div>
                  <strong>{jugador.nombre}</strong>
                  <p>
                    Altura: {jugador.Altura}m <br />
                    Peso: {jugador.Peso}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const equiposData = [
    {
      id: 1,
      nombre: "Real Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Jude Bellingham",
          Altura: "1.86",
          Peso: "75Kg",
          foto:
            "https://berliner-zeitung.imgix.net/2023/10/22/06044718-f71f-4f0e-8d47-cfa034fdea57.jpeg?auto=format&fit=max&w=1880&auto=compress",
        },
        {
          id: 2,
          nombre: "Gonzalo García",
          Altura: "1.82",
          Peso: "74Kg",
          foto:
            "https://media.elcomercio.com/wp-content/uploads/2025/06/PORTADA-NOTA-EC-759-1024x683.jpg",
        },
        {
          id: 3,
          nombre: "Kylian Mbappé",
          Altura: "1.78",
          Peso: "75Kg",
          foto: "https://assets.telegraphindia.com/telegraph/2024/Sep/1725265011_kylian-mbappe.jpg",
        },
      ],
    },
    {
      id: 2,
      nombre: "Barcelona",
      plantilla: [
        {
          id: 1,
          nombre: "Pedri",
          Altura: "1.74",
          Peso: "60Kg",
          foto:
            "https://icdn.semprebarca.com/wp-content/uploads/2024/12/Pedri-10-1200x800.jpg",
        },
        {
          id: 2,
          nombre: "Pau Cubarsí",
          Altura: "1.84",
          Peso: "75Kg",
          foto:
            "https://estaticos-cdn.prensaiberica.es/clip/ee17f71f-61cd-4eff-b0df-f1d7e825ff1d_16-9-discover-aspect-ratio_default_0.jpg",
        },
        {
          id: 3,
          nombre: "Frenkie de Jong",
          Altura: "1.81",
          Peso: "74Kg",
          foto: "https://semprebarca.com/wp-content/uploads/2025/01/Frenkie-de-Jong-6.jpg",
        },
      ],
    },
    {
      id: 3,
      nombre: "Paris Saint-Germain",
      plantilla: [
        {
          id: 1,
          nombre: "khvicha kvaratskhelia",
          Altura: "1.83",
          Peso: "76Kg",
          foto:
            "https://images2.minutemediacdn.com/image/upload/c_crop,x_0,y_0,w_4000,h_2250/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/503/01jkjxahwrpgxv7p4n32.jpg",
        },
        {
          id: 2,
          nombre: "Vitinha",
          Altura: "1.72",
          Peso: "64Kg",
          foto:
            "https://parisinos.net/wp-content/uploads/2023/12/paris-saint-germain-v-montpellier-hsc-ligue-1-uber-eats-2-scaled.jpg",
        },
        {
          id: 3,
          nombre: "Nuno mendes",
          Altura: "1.8",
          Peso: "70Kg",
          foto:
            "https://assets.goal.com/images/v3/bltc27bece5cd8a7623/crop/MM5DCNJTGY5DQNRUHJXG653FHIYTQOJ2HA======/GettyImages-2172054587%20(1).jpg?auto=webp&format=pjpg&width=3840&quality=60",
        },
      ],
    },
     {
      id: 4,
      nombre: "Atlético de Madrid",
      plantilla: [
        {
          id: 1,
          nombre: "Julián Álvarez",
          Altura: "1.70",
          Peso: "71Kg",
          foto:
            "https://dims.apnews.com/dims4/default/81d02f7/2147483647/strip/false/crop/7680x5120+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Faf%2Fc2%2F801d213c908b06eaa44f19e74542%2Faf0a51c176ef4084945d192efb90377b",
        },
        {
          id: 2,
          nombre: "Antoine Griezmann",
          Altura: "1.76",
          Peso: "73Kg",
          foto:
            "https://madeinfoot.ouest-france.fr/photos/ligue-des-champions/2024/zoom/ldc-20241107082231-8325.jpg",
        },
        {
          id: 3,
          nombre: "Alexander Sorloth",
          Altura: "1.95",
          Peso: "90Kg",
          foto:
            "https://sporten.b-cdn.net/wp-content/uploads/2025/02/alexander-sorloth-1.jpg",
        },
      ],
    },

    {
      id: 5,
      nombre: "As Roma",
      plantilla: [
        {
          id: 1,
          nombre: "Paulo Dybala",
          Altura: "1.77",
          Peso: "75Kg",
          foto:
            "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1126%2Fr1258240_1296x729_16%2D9.jpg",
        },
        {
          id: 2,
          nombre: "Leandro Paredes",
          Altura: "1.82",
          Peso: "75Kg",
          foto:
            "https://media.ambito.com/p/88201b5ec60f37b33b1b9b55fdaf5fa4/adjuntos/239/imagenes/040/924/0040924777/leandro-paredes.jpg",
        },
        {
          id: 3,
          nombre: "Lorenzo Pellegrini",
          Altura: "1.86",
          Peso: "77Kg",
          foto:
            "https://images2.minutemediacdn.com/image/upload/c_crop,w_3022,h_1699,x_0,y_0/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/theplayertribune/01fpdqzgsf0jj9x43qwr.jpg",
        },
      ],
    },
    

  ];

  return (
    <main className={styles.main}>
      <div>
        <h1>Mi Aplicación de Fútbol</h1>
        <Equipos equipos={equiposData} />
      </div>
    </main>
  );
}
