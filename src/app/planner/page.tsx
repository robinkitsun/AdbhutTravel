import PlannerClient from "@/components/planner/PlannerClient";

export default function PlannerPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-24">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Travel Planner</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Let our AI craft the perfect, personalized travel itinerary just for you. Simply fill in your preferences below to get started.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <PlannerClient />
        </div>
      </section>
    </>
  );
}
