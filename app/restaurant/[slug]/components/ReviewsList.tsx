import ReviewCard from "./ReviewCard";

export default function ReviewsList() {
  return (
    <section>
      <h2 className="mb-7 mt-10 border-b pb-5 text-3xl font-bold">
        What 100 people are saying
      </h2>
      <div className="flex flex-col gap-7">
        <ReviewCard />
      </div>
    </section>
  );
}
