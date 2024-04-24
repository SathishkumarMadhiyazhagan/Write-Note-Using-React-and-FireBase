import Skeleton from "react-loading-skeleton";

export const SkeletonCard = () => {
    return (
        <div className="max-w max-h-auto p-6 bg-white my-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mx-4">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{<Skeleton />}</h5>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{<Skeleton count={3} />}</p>
            <div className="flex flex-wrap justify-between font-medium items-center">
                {<Skeleton width="70px" />}
            </div>
        </div>
    )
}
