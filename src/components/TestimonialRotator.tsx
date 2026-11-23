import { useRef, useState } from 'react';
import type { BannerTestimonial } from '../data/testimonials';
import { BannerBody } from './TestimonialBanner';

const arrowButton =
  'flex size-11 cursor-pointer items-center justify-center rounded-full bg-navy transition-colors hover:bg-navy-dark';

/**
 * One banner that cycles through a list of testimonials, with previous/next
 * buttons (and swipe on touch screens). Every slide is stacked in the same grid
 * cell, so the banner keeps the height of its tallest slide and nothing below
 * it moves when the slide changes.
 */
export default function TestimonialRotator({ items }: { items: BannerTestimonial[] }) {
  const count = items.length;
  const [index, setIndex] = useState(0);
  // Photos load for the current slide and its neighbours, then stay loaded.
  const [loaded, setLoaded] = useState(() => new Set([0, 1 % count, count - 1]));
  const touchX = useRef<number | null>(null);

  const go = (step: number) => {
    const next = (index + step + count) % count;
    setIndex(next);
    setLoaded((prev) => new Set([...prev, next, (next + 1) % count, (next - 1 + count) % count]));
  };

  return (
    <div>
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="More testimonials"
        className="grid overflow-hidden rounded-2xl"
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        {items.map((t, i) => (
          <div
            key={t.name}
            aria-hidden={i !== index}
            className={`[grid-area:1/1] transition-[opacity,visibility] duration-500 ${
              i === index ? 'visible opacity-100' : 'invisible opacity-0'
            }`}
          >
            <BannerBody t={t} showPhoto={loaded.has(i)} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-5 tablet:mt-6">
        <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)} className={arrowButton}>
          <img src="/images/arrow-right.svg" alt="" width={18} height={18} className="rotate-180" />
        </button>
        <span aria-live="polite" className="min-w-14 text-center text-sm text-ink tabular-nums">
          {index + 1} / {count}
        </span>
        <button type="button" aria-label="Next testimonial" onClick={() => go(1)} className={arrowButton}>
          <img src="/images/arrow-right.svg" alt="" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
