import WorkCard from './WorkCard'

export default function LatestWorkSection() {
	return (
		<section className="relative mx-auto max-w-6xl px-6 py-20">
			<div className="grid grid-cols-12 items-start gap-y-6">
				<div className="col-span-12 sm:col-span-7">
					<h2 className="font-['Playfair Display'] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-balance">
						<span className="block">My Latest</span>
						<span className="relative inline-block">
							<span className="mr-1">Work</span>
							<span className="text-[var(--brand-accent)]">.</span>
							<UnderlineScribble className="absolute -bottom-2 left-1 h-[10px] w-[140px] md:h-[12px] md:w-[170px]" />
						</span>
					</h2>
				</div>
				<div className="col-span-12 sm:col-span-5 flex flex-col items-end gap-4">
					<span className="font-[Caveat] text-neutral-500 text-base sm:text-lg">
						We’ve done it carefully and simply, combined with the ingredients.
					</span>
					<ArrowDivider />
					<CarouselNav />
				</div>
			</div>

			<div className="mt-10 grid grid-cols-12 gap-6 overflow-hidden">
				<div className="col-span-12 md:col-span-8">
					<WorkCard
						icon="📱"
						title="Mobile Application Design."
						description="Commonly used in the graphic, print & publishing industries for previewing visual layout and mockups."
					/>
				</div>
				<div className="hidden md:block md:col-span-4">
					<div className="h-full w-full rounded-3xl bg-neutral-100" />
				</div>
			</div>
		</section>
	)
}

function UnderlineScribble({ className = '' }) {
	return (
		<svg className={className} viewBox="0 0 200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2 14 C 50 5, 80 5, 120 12 S 180 18, 198 8" stroke="var(--brand-accent)" strokeWidth="4" strokeLinecap="round" fill="none" />
		</svg>
	)
}

function ArrowDivider() {
	return (
		<div className="relative w-full max-w-sm">
			<div className="h-px w-full bg-neutral-300" />
			<svg className="absolute -right-1 -top-3 h-6 w-6 text-neutral-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
				<path d="M8 5h8m0 0l-3-3m3 3l-3 3" />
			</svg>
		</div>
	)
}

function CarouselNav() {
	return (
		<div className="flex items-center gap-3">
			<button aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-neutral-300 text-neutral-700 transition hover:bg-neutral-100">
				<span className="-ml-0.5">←</span>
			</button>
			<button aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full bg-neutral-900 text-white transition hover:opacity-90">
				<span className="-mr-0.5">→</span>
			</button>
		</div>
	)
}