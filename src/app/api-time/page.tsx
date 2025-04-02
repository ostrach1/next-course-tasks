export default async function APITime() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl">Aktualny czas z API</h1>
      <p className="text-xl">??:??:??</p>
      {/* TODO: Dodaj przycisk rewalidacji */}
    </div>
  );
}
