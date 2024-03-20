import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");

    const [values, setValues] = useState([
        {
            name: '+',
            operation: "+",
            color: 'lightgrey',
        },
        {
            name: '-',
            operation: "-",
            color: 'lightblue',

        },
        {
            name: '*',
            operation: "*",
            color: 'lightgreen',

        },
        {
            name: '/',
            operation: "/",
            color: 'lightpink',

        },
    ]);

    const boxClick = (index) => {
        // Recibe el index del click en la caja y lo usa para setear el color
        const color = values[index].color;
        setColor(color);
    };

    useEffect(() => {
        // Generamos el número aleatorio
        const randomNumber = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        // Usamos el operador opcional para evitar errores si no hay un elemento en esa posición
        const randomColor = values[randomNumber]?.color;
        setColor(randomColor)

        // return () => {
        //     second
        //   }
    }, [count]);


    return (
        <>
            <h1>Operaciones mátemáticas</h1>
            <div
                className="count"
                style={{ backgroundColor: `${color}` }}
            >
                <button
                    onClick={() => setCount((count) => count - 1)}>
                    menos 1
                </button>
                <h1>
                    {count}
                </h1>
                <button
                    onClick={() => setCount((count) => count + 1)}>
                    más 1
                </button>
            </div>

            <div className='container'>

                {/*  Código JavaScript */}
                {
                    // Recorremos values
                    values.map((item, index) => {

                        return <div
                            key={index}
                            className={`card card-${index}`}
                            style={{ backgroundColor: `${item.color}` }}
                            // Mandamos el index de la caja a boxClick para indicarle la caja elegida
                            onClick={() => boxClick(index)}
                        >
                            <div className='operation'>
                                <h2>{item.name} 2</h2>
                                {/* Evaluamos el string como operación matemática */}
                                <h2>{eval(`${count}` + `${item.operation}` + `2`)}</h2>

                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default App
