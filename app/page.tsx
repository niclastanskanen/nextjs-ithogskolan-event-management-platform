import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Discover Amazing Events
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Find and join events that match your interests. Create your own
            events and connect with people.
          </p>
        </div>
        <SearchBar />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">Eventlist</div>
          <div className="hidden lg:block">Calendar</div>
        </div>
      </section>
    </div>
  );
}
