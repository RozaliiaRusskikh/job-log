export function TimelineSkeleton() {
  return (
    <div className="flex w-full justify-center overflow-hidden animate-pulse">
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="flex items-center justify-center pb-2 pt-4">
          <div className="ml-2 h-4 w-44 rounded-md bg-gray-200 mb-3" />
        </div>
        <div className="mt-0 grid h-[410px] grid-cols-5 items-end gap-1 rounded-md bg-white p-4 justify-items-center">
          {Array.from({ length: 25 }, (_, i) => (
            <div key={i} className=" h-14 w-full sm:w-28 rounded bg-gray-200" />
          ))}
        </div>
      </div>
    </div>
  );
}

export function JobStatusSkeleton() {
  return (
    <div className="hidden md:block relative w-full overflow-hidden md:col-span-4 animate-pulse">
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[450px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 md:gap-4">
          <div className="flex md:col-start-1 md:col-end-13 justify-around items-center">
            <div className="flex-col items-center">
              <div className="ml-2 h-4 w-4/5 rounded-md bg-gray-200 mb-3" />
              <div className="h-40 w-40 md:h-60 md:w-60 rounded bg-gray-200" />
            </div>
            <div className=" h-52 w-52 md:h-96 md:w-96 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function MetricsSkeleton() {
  return (
    <>
      <TimelineSkeleton />
      <JobStatusSkeleton />
    </>
  );
}
