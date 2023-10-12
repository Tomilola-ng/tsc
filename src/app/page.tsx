import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between my-4 w-full md:w-[50rem] p-2 mx-auto">
      <Hero />
    </main>
  );
}
