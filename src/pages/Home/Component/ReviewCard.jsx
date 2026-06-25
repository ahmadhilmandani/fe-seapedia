import { mergeProps } from "solid-js";


export default function ReviewCard(props) {
  const mergedProps = mergeProps({
    'reviewer_name': 'reviewer_name',
    'reviewer_role': 'a role',
    'rating': 5,
    'comment': 'a nice comment about SEAPEDIA'
  }, props)

  return (
    <>
      <div class="bg-white border-l-[6px] border-y border-y-muted-100 border-r border-r-muted-100 border-primary-200 p-8 md:p-10 max-w-2xl w-full">



        <p class="text-lg md:text-xl italic leading-relaxed ">
          {mergedProps.comment}
        </p>

        <div class="flex gap-2 items-center mt-2 mb-6">
          <span class="text-warning-400 text-2xl leading-none">★</span>
          <div class='text-primary-400'>
            {mergedProps.rating} / 5
          </div>
        </div>

        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
            <img src={`https://xvatar.vercel.app/api/avatar/${mergedProps.reviewer_name}`} alt={mergedProps.reviewer_name} />
          </div>

          <div class="flex flex-col">
            <span class="text-primary-700 font-semibold text-lg leading-tight">
              {mergedProps.reviewer_name}
            </span>
            <span class="text-muted-400 text-base">
              {mergedProps.reviewer_role}
            </span>
          </div>
        </div>

      </div>
    </>
  )
}