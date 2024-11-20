import MonthlyCalendar from "@/components/MonthlyCalendar";

const CalendarPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Event Calendar
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Browse and discover events by date
          </p>
        </div>
        <MonthlyCalendar />
      </section>
    </div>
  );
};

export default CalendarPage;
