export default function Description({ description }: { description: string }) {
  return (
    <section className="mt-4">
      <p className="text-lg font-light">{description}</p>
    </section>
  );
}
