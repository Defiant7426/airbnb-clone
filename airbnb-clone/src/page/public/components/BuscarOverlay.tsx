import LupaIcon from "../../icons/LupaIcon";
import XIcon from "../../icons/XIcon";
import { motion } from "motion/react";
import { useState } from "react";

export default function BuscarOverlay({ onClose }: { onClose: () => void }) {
  const [active, setActive] = useState<"alojamientos" | "experiencias">("alojamientos");

  return (
    <div className="bg-fondo fixed inset-0 z-50 flex flex-col justify-between">
      
      {/* Cabecera animada */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center py-3 px-4"
      >
        <button
          onClick={onClose}
          className="p-2 border border-gray-400 rounded-full transition-colors"
        >
          <XIcon className="w-3.5" stroke="2.5" />
        </button>

        <div className="relative flex justify-center items-center gap-5 pr-20">
          <button
            onClick={() => setActive("alojamientos")}
            className={`font-medium ${active === "alojamientos" ? "text-black" : "text-gray-500"}`}
          >
            Alojamientos
          </button>
          <button
            onClick={() => setActive("experiencias")}
            className={`font-medium ${active === "experiencias" ? "text-black" : "text-gray-500"}`}
          >
            Experiencias
          </button>

          <motion.div
            layout
            className="absolute -bottom-1 h-[2px] bg-black"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            style={{
              width: active === "alojamientos" ? "95px" : "90px",
              left: active === "alojamientos" ? 0 : 116
            }}
          />
        </div>
      </motion.div>
        
      {/* Contenido central */}
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white flex-grow rounded-2xl my-2 mx-4 p-5 shadow-shairbnb"
      >
        <h1 className="font-bold text-3xl">
          ¿A dónde quieres ir?
        </h1>
        
        <div className="flex justify-self-start gap-2 rounded-xl border border-gray-500 px-4 py-4 mt-5 w-full cursor-text text-sm">
          <LupaIcon className="w-5" stroke="2.5"/>
          <input type="text" placeholder="Explora destinos" className="w-full bg-transparent focus:outline-none text-gray-700" />
        </div>

        <div className="flex flex-nograp gap-5 mt-5 text-sm overflow-x-scroll scrollbar-hide">
          <div className="shrink-0">
            <img src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Búsqueda flexible</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/86307179-60ee-4a7e-a4cb-c32d511bee0b.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Argentina</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Estados Unidos</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/0907be0d-30dd-47c0-a0d5-cbef355fbadf.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Colombia</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/c61d10f5-4ab3-4d16-bed7-0449e15c8277.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Caribeña</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/bae0a615-cabb-45f6-9548-359fc6cef4fe.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Brasil</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/66a7dcd7-607a-48b0-9962-4e14179615c0.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">América Central</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">España</p>
          </div>
          <div className="shrink-0">
            <img src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320" alt="" 
            className="w-32 rounded-2xl border border-gray-300" />
            <p className="mt-1">Europa</p>
          </div>{/**https://a0.muscache.com/im/pictures/a0fd6dfc-6bec-4abb-850e-9ab78ed7bf37.jpg?im_w=320 */}
        </div>
      </motion.div>

      {/*sub contenido*/ }
      <motion.button 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center bg-white flex-grow text-sm rounded-2xl my-2 mx-4 p-5 shadow-md">
            <span className="font-medium text-gray-600">Cúando</span>
            <span className="font-medium">Agregar fechas</span>
      </motion.button>

      <motion.button 
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex justify-between items-center bg-white flex-grow text-sm mt-2 rounded-2xl my-2 mx-4 p-5 shadow-md">
            <span className="font-medium text-gray-600">Quién</span>
            <span className="font-medium">Agregar huéspedes</span>
      </motion.button>

      <div className="h-60 bg-transparent">

      </div>

      {/* Pie animado */}
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex justify-between items-center px-6 py-3"
      >
        <span className="text-black font-semibold underline">
          Limpiar todo
        </span>
        <button className="bg-gradient-to-r from-[#e61d4d] to-[#d70666] px-6 py-2.5 rounded-md text-white font-medium flex justify-center items-center gap-2">
          <LupaIcon className="w-4" stroke="3" />
          Buscar
        </button>
      </motion.div>

    </div>
  );
}