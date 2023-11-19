export default function Gallery({ images }: { images: string[] }) {
  return (
    <section>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        {images.length} photo{images.length === 1 ? "" : "s"}
      </h2>
      <div className="grid grid-cols-3 gap-1">
        {images.map((image) => (
          <img
            key={image}
            className="h-44 w-full object-cover object-center"
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
