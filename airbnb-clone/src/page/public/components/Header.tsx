import LupaIcon from '../../icons/LupaIcon'

export default function Header({ onBuscarClick }: { onBuscarClick: () => void }) {
  return (
    <div className=" pt-4 px-6 flex items-center justify-center">
      <button
        onClick={ onBuscarClick }
        className=" border border-gray-200 
        rounded-full w-full py-4 text-sm font-bold 
        font-nunito flex items-center justify-center
        shadow-lg"
      >
        <div className=" flex items-center gap-2">
          <LupaIcon className="w-3" stroke="2.5" />

          <span className="">Empieza la búsqueda</span>
        </div>
      </button>
    </div>
  )
}
