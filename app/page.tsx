export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="container mx-auto rounded-lg bg-gray-100 p-4 shadow-md">
          <div className="grid grid-cols-3 grid-rows-3 gap-4">
            <div className="col-span-2 row-span-1 min-h-[200px] bg-blue-500 flex justify-center items-center text-white">
              Box 1
            </div>

            <div className="col-span-1 row-span-2 bg-green-500 flex justify-center items-center text-white">
              Box 2
            </div>

            <div className="col-span-1 row-span-2 bg-yellow-500 flex justify-center items-center text-white">
              Box 3
            </div>

            <div className="col-span-1 row-span-1 bg-red-500 flex justify-center items-center text-white">
              Box 4
            </div>

            <div className="col-span-2 row-span-1 bg-purple-500 flex justify-center items-center text-white">
              Box 5
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
