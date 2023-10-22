export default function RestaurantContainer({
  children,
}: {
  children: React.ReactElement | Array<React.ReactElement>;
}) {
  return (
    <main className="mx-auto -mt-11 mb-4 flex w-2/3 justify-between">
      {children}
    </main>
  );
}
