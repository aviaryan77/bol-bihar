const SkeletonCard = ({ key }) => {
  return (
    <>
      {/* <div className="h-100% flex  w-1/2 flex-col justify-start border px-8">
        <div className=" h-100% w-full  animate-pulse flex-row items-center justify-center space-x-1 rounded-xl border p-6 ">
          <div className="flex flex-col space-y-2">
            <div className="h-6 w-11/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-10/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
            <div className="h-6 w-9/12 rounded-md bg-gray-300 "></div>
          </div>
        </div>
      </div> */}
      <div
        key={key}
        className=" w-full max-w-sm justify-start rounded-md  border-blue-300 p-4 shadow"
      >
        <div className=" animate-pulse space-x-4">
          <div className="flex-1 space-y-2  py-1">
            <div className="h-10 rounded bg-slate-700"></div>
            <div className="space-y-3">
              <div className="grid h-40 grid-cols-3 gap-4">
                <div className="col-span-2 h-40 rounded bg-slate-700"></div>
                <div className="col-span-1 h-40 rounded bg-slate-700"></div>
              </div>
              <div className="flex  items-center justify-center">
                <div className="mr-8 h-10 w-10 rounded-full bg-slate-700"></div>
                <div className="h-10 w-40 rounded bg-slate-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
