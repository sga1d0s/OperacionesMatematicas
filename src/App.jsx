import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0);

    const [operation, setOperation] = useState([
        {
            name: 'suma',
            operation: ( count +2)
        },
        {
            name: 'resta',
            operation: ( -2)
        },
        {
            name: 'multiplica',
            operation: (1*2)
        },
        {
            name: 'divide',
            operation: (1 /2)
        },
    ]);

    // useEffect(() => {


    //     operation.map((item, index) => {

    //         const resultado

    //     });

    //     const result =

    //     return () => {
    //         second
    //     }
    // }, [count])


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

                                <h2>{count}</h2>
                                <h2>{count + item.operation}</h2>

                            </div>


                        </div>
                    })
                }
            </div>

        </>
    )
}

export default App
