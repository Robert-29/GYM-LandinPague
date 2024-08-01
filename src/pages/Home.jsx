import { NavBar } from "../components/NavBar";
import { useState, useEffect } from 'react';

const Palabras = [
  'IMPRESCINDIBLE',
  'MOTIVADOR',
  'FASCINANTE',
  'ENTRETENIDO',
  'CURIOSO',
  'MATERIAL'
];

// Definir el componente ChangingText
function CambiarTexto() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationKey(prevKey => prevKey + 1);
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % Palabras.length);
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2 className="text-white text-5xl font-montserrat font-bold">
      TODO LO <span key={animationKey} className="inline-block animate-fade-in">{Palabras[currentWordIndex]}</span>
    </h2>
  );
}

export function Home() {
  return (
    <header>
      <NavBar />
      <div className="w-[100%] relative">
        <img src="/img/imagen1.jpg" alt="" className="w-full h-auto" />
        <div className="pl-16 absolute inset-0 flex flex-col items-start justify-center">
          <CambiarTexto/>
          <h2 className="text-white text-5xl font-montserrat font-bold">DEL GYM</h2>
          <p className="text-white font-montserrat">
            ¡Descubre el mejor lugar para tu entrenamiento! Todo el mundo <br />
            del gimnasio en un solo lugar para que puedas entrenar de manera <br />
            más inteligente y efectiva.
          </p>
        </div>
      </div>
    </header>
  );
}
