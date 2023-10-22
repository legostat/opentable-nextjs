export default function ReviewCard() {
  return (
    <div className="border-b pb-7">
      <div className="flex gap-10">
        <div className="flex w-1/6 flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
            <h3 className="text-2xl text-white">MJ</h3>
          </div>
          <p className="text-center">Michael Jordan</p>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-5">
            <div className="flex">*****</div>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">
              Laurie was on top of everything! Slow night due to the snow storm
              so it worked in our favor to have more one on one with the staff.
              Delicious and well worth the money.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
