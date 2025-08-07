import RoomCard from "./RoomCard";
import Titles from "./Titles";

const Rooms = () => {
  return (
    <div className="container flex flex-col items-start min-h-screen gap-3 mx-auto py-20 my-20">
      <div className="flex flex-col items-start gap-10">
        <Titles title="Bienestar Asegurado" subtitle="Nuestras Habitaciones" />
        <p className="max-w-xl text-lg">
          Elegí la habitación perfecta para vos y asegurá tu lugar en uno de los
          destinos termales más reconocidos de Argentina. Reservá en pocos
          pasos, sin complicaciones.
        </p>
      </div>
      <div className="grid w-full px-10 grid-cols-1 gap-20 mt-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Card */}
        <RoomCard
          title="Habitación Estándar"
          description="Comodidad simple y funcional para un descanso reparador."
          image="/room-2.jpg"
        />
        <RoomCard
          title="Habitación Superior"
          description="Elegancia y amplitud para quienes buscan un plus de confort."
          image="/room-1.jpg"
        />
        <RoomCard
          title="Habitación Matrimonial"
          description="El espacio ideal para compartir y relajarse en pareja."
          image="/room-3.jpg"
        />
      </div>
    </div>
  );
};

export default Rooms;
