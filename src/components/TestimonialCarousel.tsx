import { useRef } from 'react';
import type { Testimonial } from '../data/testimonials';

/** Horizontal, swipeable row of testimonial cards with prev/next buttons. */
export default function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
  };
  return (
    <div className="site-container mt-14 tablet:mt-16">
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:thin] tablet:gap-6"
      >
        {items.map((t) => (
          <figure
            key={t.name}
            className="m-0 flex w-[85%] flex-none snap-start flex-col justify-between gap-5 rounded-2xl bg-white p-6 text-left shadow-sm tablet:w-[46%] tablet:p-8 desktop:w-[31.5%]"
          >
            <blockquote className="m-0 text-[16px] leading-relaxed font-light text-ink tablet:text-[17px]">
              “{t.quote}”
            </blockquote>
            <figcaption className="flex flex-col gap-1 text-ink">
              <span className="text-base leading-[1.4] font-medium">{t.name}</span>
              <span className="text-sm leading-[1.4] font-light">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => scroll(-1)}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark"
        >
          <img src="images/arrow-right.svg" alt="" width={20} height={20} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => scroll(1)}
          className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-navy text-white hover:bg-navy-dark"
        >
          <img src="images/arrow-right.svg" alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  );
}
