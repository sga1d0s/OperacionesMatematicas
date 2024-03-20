import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const [operation, setOperation] = useState([
        {
            name: 'suma',
            operation: "+",
        },
        {
            name: 'resta',
            operation: "-",
        },
        {
            name: 'multiplica',
            operation: "*",
        },
        {
            name: 'divide',
            operation: "/",
        },
    ]);


    return (
        <>

            <h1>Operaciones mátemáticas</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    más
                </button>
                <h1>
                    {count}
                </h1>
                <button onClick={() => setCount((count) => count - 1)}>
                    menos
                </button>
            </div>

            <div className='container'>

                {/*  Código JavaScript */}
                {
                    // Recorremos operations
                    operation.map((item, index) => {

                        return <div
                            key={index}
                            className={`card container-${index}`}
                        >

                            <div className='operation'>
                                <h2>{item.name} dos</h2>

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
