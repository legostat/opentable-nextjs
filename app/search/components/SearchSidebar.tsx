export function SearchSidebar() {
  return (
    <aside className="-mt-4 flex w-1/5 flex-col gap-4 divide-y">
      <div className="pt-4">
        <h2 className="mb-2">Regions</h2>
        <p className="text-reg font-light">Toronto</p>
        <p className="text-reg font-light">Ottawa</p>
        <p className="text-reg font-light">Montreal</p>
        <p className="text-reg font-light">Hamilton</p>
        <p className="text-reg font-light">Kingstone</p>
        <p className="text-reg font-light">St. Jones</p>
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Cousine</h2>
        <p className="text-reg font-light">Mexican</p>
        <p className="text-reg font-light">Italian</p>
        <p className="text-reg font-light">Chinese</p>
        <p className="text-reg font-light">Japanese</p>
        <p className="text-reg font-light">Ukranian</p>
        <p className="text-reg font-light">Caribbean</p>
      </div>
      <div className="pt-4">
        <h2 className="mb-2">Price</h2>
        <div className="flex">
          <button className="w-full rounded-l border p-2 text-reg font-light">
            $
          </button>
          <button className="w-full border-b border-r border-t p-2 text-reg font-light">
            $$
          </button>
          <button className="w-full rounded-r border-b border-r border-t p-2 text-reg font-light">
            $$$
          </button>
        </div>
      </div>
    </aside>
  );
}
