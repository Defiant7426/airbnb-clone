import { useState } from "react";
import Header from "./public/components/Header";
import BuscarOverlay from "./public/components/BuscarOverlay";


export default function Index() {

    const [isBucarOpen, setIsBuscarOpen] = useState(false) 

  return (
    <>
        <Header onBuscarClick={() => setIsBuscarOpen(true)} />

        {
            isBucarOpen && (
                <BuscarOverlay onClose={() => setIsBuscarOpen(false)} />
            )
        }

    </>
    
  )
}
