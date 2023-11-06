export default function Header({ name }: { name: string }) {
  const renderTitle = () => {
    const nameArray = name.split("-");
    const location = `(${nameArray[nameArray.length - 1]})`;

    return nameArray.slice(0, -1).concat(location).join(" ");
  };

  return (
    <header className="h-96 overflow-hidden">
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
        <h1 className="text-7xl capitalize text-white drop-shadow">
          {renderTitle()}
        </h1>
      </div>
    </header>
  );
}
