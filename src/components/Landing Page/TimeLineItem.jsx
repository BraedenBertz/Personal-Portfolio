import React from 'react';

function TimelineItem({ year, title, duration, details }) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 \
            border border-white dark:border-stone-900 dark:bg-stone-700" />
            <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-base md:text-xl">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 \
               bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
                  {title}
               </h3>
               <p className="my-1 text-2xl font-normal leading-none text-stone-800 dark:text-stone-500">
                  {duration}
               </p>
            </div>
            <p className="my-2 text-lg font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
   )
}

export default TimelineItem;