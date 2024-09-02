import CardWrapper, { Activity, Ratings } from './ui/cards';

export default async function Page() {
  return (
    <main>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <CardWrapper />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <div className="flex w-full flex-col md:col-span-4">
            <Ratings />
          </div>
          <div className="flex w-full flex-col md:col-span-4">
            <Activity/>
          </div>
      </div>
      
    </main>
  );
}