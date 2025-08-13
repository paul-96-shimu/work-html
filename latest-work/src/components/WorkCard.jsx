export default function WorkCard({ icon = '📱', title, description }) {
	return (
		<article className="relative overflow-hidden rounded-3xl bg-neutral-50 p-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] ring-1 ring-neutral-200">
			<div className="absolute -right-12 top-1/2 h-[260px] w-[260px] -translate-y-1/2 rounded-full bg-neutral-200/60 blur-2xl" />

			<div className="flex items-start gap-4">
				<div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-neutral-900 text-white text-lg">{icon}</div>
				<div>
					<h3 className="text-2xl sm:text-[28px] font-semibold leading-snug">{title}</h3>
				</div>
			</div>

			<p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">{description}</p>

			<div className="mt-8 flex items-center justify-between">
				<a href="#" className="group inline-flex items-center gap-2 text-neutral-800">
					<span className="text-sm">Explore</span>
					<svg className="h-4 w-4 transition -translate-x-0.5 group-hover:translate-x-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
						<path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
					</svg>
				</a>

				<svg className="h-10 w-10 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
					<path d="M6 12h12" />
					<path d="M12 6v12" />
				</svg>
			</div>

			<DecorativeDots />
		</article>
	)
}

function DecorativeDots() {
	return (
		<svg className="pointer-events-none absolute bottom-7 left-1/2 h-8 w-8 -translate-x-1/2 text-neutral-300" viewBox="0 0 100 100" stroke="currentColor" strokeWidth="6" fill="none">
			<circle cx="20" cy="20" r="4" />
			<circle cx="50" cy="20" r="4" />
			<circle cx="80" cy="20" r="4" />
			<circle cx="35" cy="50" r="4" />
			<circle cx="65" cy="50" r="4" />
			<circle cx="20" cy="80" r="4" />
			<circle cx="50" cy="80" r="4" />
			<circle cx="80" cy="80" r="4" />
		</svg>
	)
}