export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen flex-col">
      <div>{new Date().toLocaleTimeString()}</div>
      {/* TODO: Dodaj przycisk do rewalidacji */}
    </main>
  );
}
