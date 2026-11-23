import type { CSSProperties } from 'react';
import type { BannerTestimonial } from '../data/testimonials';

interface BannerBodyProps {
  t: BannerTestimonial;
  /** Skip the photo until it is needed (used by the rotating banner). */
  showPhoto?: boolean;
}

/**
 * Photo, quote and attribution for one banner.
 *
 * Desktop: the wide photo fills the card and the quote sits over its empty side.
 * Tablet: the person's side of the photo sits beside the quote.
 * Mobile: the photo sits above the quote.
 * On tablet and mobile only the photo's outer edge is softened into the card, so
 * the person is never faded.
 */
export function BannerBody({ t, showPhoto = true }: BannerBodyProps) {
  const dark = t.tone === 'dark';
  const left = t.photo === 'left';

  return (
    <div
      className={`relative isolate flex h-full flex-col tablet:flex-row tablet:items-center desktop:min-h-[340px] ${
        dark ? 'text-white' : 'text-ink-dark'
      }`}
      style={
        {
          backgroundImage: `linear-gradient(${t.tint[0]}, ${t.tint[1]})`,
          '--pos': t.position ?? 'center',
        } as CSSProperties
      }
    >
      {showPhoto && (
        <img
          src={t.src}
          alt=""
          loading="lazy"
          className={`-z-10 h-[210px] w-full flex-none object-cover [mask-image:linear-gradient(to_bottom,black_86%,transparent)] tablet:absolute tablet:inset-y-0 tablet:h-full tablet:w-[52%] desktop:inset-0 desktop:w-full desktop:[mask-image:none] desktop:[object-position:var(--pos)] ${
            left
              ? 'object-left tablet:left-0 tablet:[mask-image:linear-gradient(to_right,black_88%,transparent)]'
              : 'object-right tablet:right-0 tablet:[mask-image:linear-gradient(to_left,black_88%,transparent)]'
          }`}
        />
      )}
      {!showPhoto && <div className="h-[210px] flex-none tablet:hidden" />}

      <figure
        className={`relative m-0 px-6 pt-2 pb-8 tablet:w-[52%] tablet:py-9 tablet:pr-6 tablet:pl-12 desktop:px-0 desktop:py-12 ${
          left ? 'tablet:ml-auto desktop:ml-[39.8%] desktop:w-[50%]' : 'desktop:ml-[8.6%] desktop:w-[46.5%]'
        }`}
      >
        <div className="relative">
          <span
            aria-hidden="true"
            className={`block h-[26px] font-serif text-[40px] leading-none tablet:absolute tablet:-top-0.5 tablet:-left-7 tablet:h-auto tablet:text-[36px] desktop:-top-1 desktop:-left-[45px] desktop:text-[48px] ${
              dark ? 'text-white/25' : 'text-ink-dark/15'
            }`}
          >
            “
          </span>
          <blockquote className="m-0 font-serif text-lg leading-[1.5] text-pretty tablet:text-[17px] desktop:text-[22px]">{t.quote}”</blockquote>
        </div>
        <figcaption className="mt-5 flex flex-col font-sans desktop:mt-[26px]">
          <span className="text-lg leading-[1.4] font-bold desktop:text-xl">{t.name}</span>
          {t.role && <span className="text-[15px] leading-[1.4] desktop:text-base">{t.role}</span>}
        </figcaption>
      </figure>
    </div>
  );
}

/** A testimonial as a wide rounded banner made from the person's photo. */
export default function TestimonialBanner({ t }: { t: BannerTestimonial }) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <BannerBody t={t} />
    </div>
  );
}
