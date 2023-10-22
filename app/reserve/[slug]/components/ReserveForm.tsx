export default function ReserveForm() {
  return (
    <form className=" mt-10 grid w-[660px] grid-cols-2 gap-4">
      <input
        type="text"
        className="rounded border p-3"
        placeholder="First name"
      />
      <input
        type="text"
        className="rounded border p-3"
        placeholder="Last name"
      />
      <input
        type="text"
        className="rounded border p-3"
        placeholder="Phone number"
      />
      <input type="text" className="rounded border p-3" placeholder="Email" />
      <input
        type="text"
        className="rounded border p-3"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="rounded border p-3"
        placeholder="Requests (optional)"
      />
      <button className="col-span-2 rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-300">
        Complete reservation
      </button>
      <p className="col-span-2 mt-4 text-sm ">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Standard text message rates may apply. You may
        opt out of receiving text messages at any time.
      </p>
    </form>
  );
}
