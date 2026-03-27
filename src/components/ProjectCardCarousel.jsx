import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function ProjectCardCarousel({ 
  tag,
  title,
  description
}) {
  return (
    <article className="h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
      <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
        {tag}
      </span>
      <FaArrowUpRightFromSquare />
      <h3 className="mt-4 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-300">
        {description}
      </p>
    </article>
  )

}