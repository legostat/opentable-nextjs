export default function Gallery() {
  return (
    <section>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">5 photos</h2>
      <div className="grid grid-cols-3 gap-1">
        <div className="h-44">
          <img
            className="h-44 w-full object-cover object-center"
            src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
            alt=""
          />
        </div>
        <div className="h-44">
          <img
            className="h-44 w-full object-cover object-center"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
            alt=""
          />
        </div>
        <div className="h-44">
          <img
            className="h-44 w-full object-cover object-center"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
            alt=""
          />
        </div>
        <div className="h-44">
          <img
            className="h-44 w-full object-cover object-center"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
            alt=""
          />
        </div>
        <div className="h-44">
          <img
            className="h-44 w-full object-cover object-center"
            src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
