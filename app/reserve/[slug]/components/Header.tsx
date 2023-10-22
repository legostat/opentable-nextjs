export default function Header() {
  return (
    <header>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex gap-4">
        <div className="h-18 w-32">
          <img
            src="https://images.otstatic.com/prod1/49153814/2/medium.jpg"
            alt=""
            className="h-18 w-full rounded object-cover object-center"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Aiāna Restaurant Collective</h1>
          <div className="mt-3 flex gap-6">
            <p>Tues, 22, 2023</p>
            <p>7:30 PM</p>
            <p>3 people</p>
          </div>
        </div>
      </div>
    </header>
  );
}
