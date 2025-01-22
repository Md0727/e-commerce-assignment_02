import React from 'react'

const SkeletonCategory = () => {
    return (
        <div>
            <div className="flex mb-4 flex-col justify-center">
                <div className="relative bg-white p-4  shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg rounded-lg">
                    <div className="flex items-center">
                        <div className="flex flex-col gap-2 animate-pulse">
                            <div className="h-3 w-56 rounded-full bg-gray-200 dark:bg-gray-700" />
                            <div className="h-3 w-56 rounded-full bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: "\n  .mask {\n    mask-image: linear-gradient(180deg, white, rgba(255, 255, 255, 0));\n  }\n" }} />
        </div>

    )
}

export default SkeletonCategory;