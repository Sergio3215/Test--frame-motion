import Image from "next/image";
import localFont from "next/font/local";
import { motion, useScroll, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
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


function FadeImage({ src, alt }) {
  // Usamos useRef para referenciar cada imagen
  const ref = useRef(null);
  // useInView verifica si la imagen está en el viewport
  const isInView = useInView(ref, { once: false });

  return (
    <motion.img
      ref={ref}
      src={src}
      alt={alt}
      // Cambia la opacidad dependiendo de si la imagen está en la vista
      animate={{ opacity: isInView ? 1 : 0}}
      transition={{ duration: 4 }}
      style={{ width: '100%', height: 'auto', marginBottom: '20px' }} // Estilos para cada imagen
    />
  );
}

export default function Home() {

  const [arrNumber, setArrNumber] = useState([1, 2, 3, 4, 5]);
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {
          arrNumber.map((num) => {
            return (
              <>
                <FadeImage src={`/gatito${num}.jpg`}
                  alt={"image de gatito " + num}
                  key={num}
                />
              </>
            )
          })
        }
      </main>
    </div>
  );
}
