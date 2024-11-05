import Image from "next/image";
import localFont from "next/font/local";
import { motion, useScroll, useTransform, inView } from "framer-motion";
import { useState } from "react";
// import {gatito1} from "@/public/gatito1.jpg"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4, 5]);


  const [arrArticulo, setArrArticulo] = useState([{
    title: "¿Cómo se calcula?",
    body: `En realidad la teoría resulta súper sencilla:

1)Tomas tu carta natal y buscas el Nodo Norte.

2) El signo y el grado en el que se encuentran tu Nodo Norte los conviertes en el 0 de Aries.

3) Y de ahí calculas la distancia entre los demás puntos de la carta y el Nodo Norte para poder posicionarlos en la dracónica respetando la misma separación que en la natal.`
  }, {
    title: "Los entresijos de la carta dracónica",
    body: `La carta dracónica es una herramienta que se usaba en la Antigüedad pero que se ha vuelto a poner muy de moda en los últimos tiempos.

Como su nombre indica, está muy relacionada con los Nodos Lunares (también llamados cabeza y cola de «dragón» >> dracónica)

Se trata de una carta que refleja nuestra verdadera naturaleza espiritual, y que por lo tanto, podemos englobar dentro de la Astrología Evolutiva o Kármica, cuyo máximo referente es Jeff Wolf Greene (dejo el dato para quiénes estéis interesadas en este enfoque astrológico)

Ojo, que en esta carta NO vas a encontrar la expresión de tus rasgos de personalidad, sino que hace referencia al principio del alma como una guía para la actual encarnación. Es una información que te facilita el camino en los intentos de dejar atrás el ego para llegar a la esencia.`
  }, {
    title: "Carta dracónica. Qué es y para quién puede ser útil",
    body: `Hablemos de la carta dracónica. ¿Te apetece descubrirla? 😉

Entonces, estás de suerte, porque voy a explicarte qué es, cómo calcularla, cómo interpretarla y para quién puede resultar un recurso útil.`
  }, {
    title: "Interpretación de la carta dracónica y a quién puede serle útil",
    body: `Aquí te voy a compartir mi visión porque no puede ser de otra manera. Y al habla está una mujer con mucha tierra, poca agua y un mercurio súper racional a quien le irrita mucho el «todo vale» y el «soy un ser luz que camina por las nubes y te mira por encima del hombro por tener pasiones y ego»

Si ya me conoces sabes que mi abordaje de la Astrología es la Astrología para el Empoderamiento que se basa en la integración de arquetipos y ciclos astrológicos como herramienta de coaching y/o terapia.`
  }, {
    title: "¿Cómo se calcula?",
    body: `En realidad la teoría resulta súper sencilla:

Te pongo un ejemplo con mi carta: Mi Nodo Norte natal está a 5º 36´de Leo y mi Ascendente a 23º 59´de Leo. Bien, pues en la dracónica, el Nodo Norte pasa a ser el 0 de Aries y por tanto, mi Ascendente de la carta dracónica sería 18º22´de Aries. ¿Por qué? Pues porque esa es la distancia entre mi Ascendente natal y el Nodo Norte natal (23º59 – 5º 36´ = 18º 22´) Lo mismo que he hecho con el Ascendente lo haría con todas las casas y planetas.

Lo sé… es un trabajo de chinos que requiere paciencia y práctica. Por fortuna, astro.com nos lo pone fácil incluyendo la opción de calcular la carta dracónica en el menú «Extensa selección de cartas» (lo tenéis casi al final)`
  }]);

  const { scrollYProgress } = useScroll();
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          // arrNumber.map((num) => {
          //   return (
          //     <motion.div 
          //     initial={{ opacity: 0 }}
          //     animate={{ opacity: 1 }}
          //     exit={{ opacity: 0 }}>
          //       <img src={`/gatito${num}.jpg`} />
          //     </motion.div>
          //   )
          // })
        }
        <motion.img src={`/gatito1.jpg`} className="fixed top-0 left-0 w-1/2" />
        {
          arrArticulo.map((art, index) => {
            return(
              <div className="z-30 m-32 bg-white text-black">
                <h1 className="text-3xl">{art.title}</h1>
                <label>{art.body}</label>
              </div>
            )
          })
        }
      </main>
    </div>
  );
}
