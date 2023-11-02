import Header from "./components/Header";
import RestaurantContainer from "./components/RestaurantContainer";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <RestaurantContainer>{children}</RestaurantContainer>
    </>
  );
}
