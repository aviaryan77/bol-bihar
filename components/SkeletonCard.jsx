const SkeletonCard = ({ key }) => {
  return (
    <>
      <div
        key={key}
        className="align-center relative justify-start rounded-md p-4 py-8 shadow"
      >
        <div className="animate-pulse space-x-4">
          <div className="flex-1 space-y-2  py-1">
            <div className="h-10 rounded bg-gray-400"></div>
            <div className="space-y-3">
              <div className="grid h-20 grid-cols-3 gap-4">
                <div className="col-span-2 h-20 rounded bg-gray-400"></div>
                <div className="col-span-1 h-20 rounded bg-gray-400"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-8 h-10 w-10 rounded-full bg-gray-400"></div>
                <div className="h-10 w-40 rounded bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
