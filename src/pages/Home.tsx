import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router';
import ButtonLink, { lightButtonClasses } from '../components/ButtonLink';
import Layout from '../components/Layout';
import TestimonialBanner from '../components/TestimonialBanner';
import TestimonialRotator from '../components/TestimonialRotator';
import { featured, rotation } from '../data/testimonials';
import { display, lede } from '../styles';

// Desktop logo sizes keep each artwork's proportions within the Figma row's
// 156×36 / 206×30 slots. Multi-part logos place each layer as in Figma
// (left, top, width, height as % of the logo).
const press = [
  { name: 'NPR', w: 105, h: 36, opacity: 'opacity-55', layers: [{ src: '/images/press-logo-npr.svg' }] },
  { name: 'Newsweek', w: 187, h: 30, opacity: 'opacity-50', layers: [{ src: '/images/press-logo-newsweek.png' }] },
  {
    name: 'TODAY',
    w: 194.5,
    h: 30,
    opacity: 'opacity-50',
    layers: [
      { src: '/images/press-logo-today-rainbow.svg', box: { x: 0, y: 0, w: 30.3, h: 98.26 } },
      { src: '/images/press-logo-today-wordmark.svg', box: { x: 33.19, y: 11.86, w: 66.81, h: 88.14 } },
    ],
  },
  { name: 'HuffPost', w: 206, h: 24, opacity: 'opacity-50', layers: [{ src: '/images/press-logo-huffpost.svg' }] },
  {
    name: 'Cosmopolitan',
    w: 164.5,
    h: 30,
    opacity: 'opacity-50',
    layers: [{ src: '/images/press-logo-cosmopolitan.svg' }],
  },
];

const questions = [
  '“...what do you make of this?”',
  '“...how do I get out of this loop I’m stuck in?”',
  '“...how do we have an actually good relationship?”',
  '“...how do I get my f*&#ing life to work better?”',
  '“...who am I, really?”',
];

const topics = [
  ['General Well-Being', 'Performance'],
  ['Leadership & Communication', 'Relationships'],
];

// The questions read as incoming messages: white bubbles with the tail bottom-left,
// stepped across the column so they don't sit in a flat stack.
const bubble =
  'w-fit max-w-[92%] rounded-[24px] rounded-bl-md bg-white px-5 py-3 font-serif text-[19px] leading-[1.3] text-ink-dark shadow-[0_12px_28px_-16px_rgba(18,60,88,0.45)] tablet:max-w-[86%] tablet:rounded-[30px] tablet:rounded-bl-lg tablet:px-7 tablet:py-4 tablet:text-2xl desktop:text-[28px]';
const bubbleOffsets = ['', 'ml-[7%] tablet:ml-[9%]', 'ml-[2%] tablet:ml-[3%]', 'ml-[8%] tablet:ml-[13%]', 'ml-[4%] tablet:ml-[6%]'];

export default function Home() {
  // The press logos spread edge to edge; when the last one wraps onto a row of
  // its own, centre it instead of leaving it at the left.
  const pressList = useRef<HTMLUListElement>(null);
  const [loneLast, setLoneLast] = useState(false);

  useLayoutEffect(() => {
    const ul = pressList.current;
    if (!ul) return;
    const check = () => {
      const last = ul.lastElementChild as HTMLElement | null;
      const prev = last?.previousElementSibling as HTMLElement | null;
      setLoneLast(!!last && !!prev && last.offsetTop >= prev.offsetTop + prev.offsetHeight);
    };
    const ro = new ResizeObserver(check);
    ro.observe(ul);
    return () => ro.disconnect();
  }, []);

  return (
    <Layout title="Hey Aaron Help — Coaching for Individuals and Groups" overlayHeader>
      {/* Hero */}
      {/* On mobile the hero slides up under the sticky header (h-20) and the
          copy sits at the bottom of a full-height, face-centred crop. The
          photo's height and left offset interpolate between the Figma frames
          at 390px (906px tall, left −728.78px) and 767px (897px, −534.75px). */}
      <section className="@container relative -mt-20 flex h-[800px] flex-col overflow-hidden tablet:mt-0 tablet:block tablet:h-[704px] desktop:h-[946px]">
        <img
          src="/images/hero.jpg"
          alt=""
          fetchPriority="high"
          className="absolute bottom-0 left-[calc(-728.78px+(100cqw-390px)*0.51467)] h-[calc(906px-(100cqw-390px)*0.02387)] w-auto max-w-none tablet:inset-0 tablet:size-full tablet:max-w-full tablet:object-cover tablet:object-[30%_100%] desktop:object-[50%_100%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-black/50 to-[72.125%] mix-blend-multiply tablet:hidden"
        />
        <div className="relative flex flex-1 flex-col items-center justify-end gap-8 px-8 pb-16 text-center tablet:site-container tablet:block tablet:flex-none tablet:px-0 tablet:pt-[142px] tablet:pb-0 tablet:pl-12 tablet:text-left desktop:pt-[190px]">
          <h1 className="max-w-[539px] font-serif text-5xl leading-none text-balance text-white tablet:mb-8 tablet:max-w-none tablet:leading-[1.1] tablet:whitespace-nowrap tablet:text-ink desktop:mb-10 desktop:text-7xl">
            Working on yourself <br className="hidden tablet:inline" />
            doesn’t have to suck.
          </h1>
        </div>
      </section>

      {/* Featured in */}
      <section
        aria-labelledby="featured-title"
        className="bg-ice-400 pt-10 pb-[50px] tablet:pt-16 tablet:pb-20 desktop:pt-20 desktop:pb-25"
      >
        <div className="site-container @container">
          <h2
            id="featured-title"
            className="mb-4 text-center font-serif text-sm leading-[1.4] text-black tablet:text-base tablet:leading-[22.4px]"
          >
            Featured in
          </h2>
          {/* --s is the rendered px per logo px. From tablet up the logos stay on
              one row and shrink proportionally once the full-size row (logos +
              side padding + 4 minimum gaps) no longer fits the container. */}
          <ul
            ref={pressList}
            className="flex flex-wrap items-center justify-between gap-6 px-8 mix-blend-multiply [--s:0.5px] tablet:flex-nowrap tablet:gap-10 tablet:px-16 tablet:[--s:min(0.6px,(100cqw-289px)/var(--total))] desktop:gap-16 desktop:px-24 desktop:[--s:min(0.8px,(100cqw-449px)/var(--total))]"
            style={{ '--total': press.reduce((sum, p) => sum + p.w, 0) } as CSSProperties}
          >
            {press.map((p) => (
              <li
                key={p.name}
                role="img"
                aria-label={p.name}
                className={`relative h-[calc(var(--h)*var(--s))] w-[calc(var(--w)*var(--s))] ${loneLast ? 'last:mx-auto' : ''} ${p.opacity}`}
                style={{ '--w': p.w, '--h': p.h } as CSSProperties}
              >
                {p.layers.map((l) => (
                  <img
                    key={l.src}
                    src={l.src}
                    alt=""
                    className="absolute inset-0 size-full"
                    style={
                      'box' in l
                        ? { left: `${l.box.x}%`, top: `${l.box.y}%`, width: `${l.box.w}%`, height: `${l.box.h}%` }
                        : undefined
                    }
                  />
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Hey, Aaron... — the questions arrive as messages and the offer is Aaron's reply */}
      <section className="overflow-hidden bg-ice-200 pt-15 pb-20 tablet:py-24 desktop:py-30">
        <div className="site-container flex flex-col items-center">
          <h2 className="text-center text-ink">
            <span className={`block ${lede}`}>Here’s what people ask me:</span>
            <span className="mt-1 block font-serif text-[40px] leading-[1.1] tablet:mt-2 tablet:text-[52px] desktop:text-[64px]">
              “Hey, Aaron...”
            </span>
          </h2>

          <div className="mt-8 flex w-full max-w-[900px] flex-col tablet:mt-12">
            <ul className="flex flex-col gap-3 tablet:gap-4">
              {questions.map((q, i) => (
                <li key={q} className={`${bubble} ${bubbleOffsets[i % bubbleOffsets.length]}`}>
                  {q}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-end justify-end gap-3 tablet:mt-8 tablet:gap-4">
              <p className="max-w-[560px] rounded-[24px] rounded-br-md bg-navy px-5 py-4 text-[17px] leading-normal font-light text-white tablet:rounded-[30px] tablet:rounded-br-lg tablet:px-7 tablet:py-5 tablet:text-xl tablet:leading-[1.45]">
                I offer live sessions and asynchronous video and voice support to help individuals and couples explore
                these questions, and all the other important ones. It’s sort of like therapy, but you actually look
                forward to it.
              </p>
              <img src="/images/logo-header.svg" alt="" width={56} height={56} className="size-10 flex-none tablet:size-14" />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 tablet:mt-14">
            <ButtonLink to="/contact">Book a Call</ButtonLink>
            <p className="text-[15px] leading-[1.4] font-light text-ink tablet:text-base">
              Worst case, you had a nice conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Practitioner overview */}
      <section className="bg-paper pt-15 pb-20 tablet:py-24 desktop:py-30">
        <div className="site-container grid max-w-[1060px] items-center gap-9 tablet:grid-cols-[240px_minmax(0,1fr)] tablet:gap-12 desktop:grid-cols-[340px_minmax(0,1fr)] desktop:gap-20">
          <div className="relative mx-auto size-[180px] tablet:size-[240px] desktop:size-[340px]">
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-full bg-ice-300 tablet:translate-x-4 tablet:translate-y-4 desktop:translate-x-5 desktop:translate-y-5"
            />
            <img
              src="/images/about-aaron.png"
              alt="Aaron Steinberg"
              width={340}
              height={340}
              loading="lazy"
              className="relative size-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5 text-[17px] leading-[1.6] font-light text-ink tablet:text-lg desktop:gap-6 desktop:text-xl">
            <p className="font-serif text-[30px] leading-[1.2] font-normal text-ink-dark tablet:text-[38px] desktop:text-5xl">
              Technically, I’m a{' '}
              <Link to="/services" className="underline decoration-1 underline-offset-[6px] hover:text-navy">
                life coach
              </Link>
              .
            </p>
            <p>
              It also pains me to call myself a coach, yet I also refuse to tell you I’m a “self-awareness and freedom
              specialist” or some nonsense like that. I’m kind of just a guy.
            </p>
            <p>
              But I’ve also been meditating since I was five, and I’ve studied as much psychology, spirituality,
              personal growth, healing, transformation — whatever we want to call it — and neuroscience as I possibly
              can. I’m obsessed with giving people a safe place (painfully co-opted word, but I mean it sincerely) to be
              and become all of who they are.
            </p>
            <p>
              I’m trying to engage deeply and honestly with what we’re doing here and how to make the most out of life.
              So, hey. If you want a partner who’s done this a lot to help figure out your version, that’s what I’m here
              for.
            </p>
            <div className="mt-2 flex justify-center tablet:justify-start">
              <ButtonLink to="/about">About Me</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* What we can work on — the official list is a card lying on top of the big stuff underneath */}
      <section className="bg-ice-100 pt-15 pb-10 tablet:pt-24 tablet:pb-12 desktop:pt-30 desktop:pb-14">
        <div className="site-container flex flex-col items-center">
          <h2 className={`${display()} text-center`}>What we can work on</h2>
          <div className="mt-9 w-full max-w-[940px] tablet:mt-14">
            <div className="relative z-10 mx-auto w-[calc(100%-28px)] max-w-[760px]">
              <span aria-hidden="true" className="absolute inset-0 rotate-2 rounded-2xl bg-ice-400" />
              <div className="relative flex -rotate-1 flex-col gap-2 rounded-2xl bg-white px-6 py-6 shadow-[0_18px_40px_-18px_rgba(13,45,67,0.55)] tablet:flex-row tablet:justify-center tablet:gap-10 tablet:px-10 tablet:py-8 desktop:gap-12">
                {topics.map((col) => (
                  <ul key={col[0]} className="flex flex-col gap-2">
                    {col.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-4 text-lg leading-[1.4] font-light text-ink tablet:text-xl tablet:whitespace-nowrap desktop:text-[22px]"
                      >
                        <img src="/images/check.svg" alt="" width={24} height={25} className="flex-none" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="-mt-12 rounded-3xl bg-navy px-6 pt-[84px] pb-10 text-center text-white tablet:-mt-14 tablet:rounded-[32px] tablet:px-14 tablet:pt-[104px] tablet:pb-14 desktop:px-20 desktop:pb-16">
              <p className="text-[17px] leading-normal font-light text-ice-300 tablet:text-xl">
                That’s the official list. But honestly, what I really love is the big stuff:
              </p>
              <p className="mt-3 font-serif text-[26px] leading-[1.25] text-balance tablet:mt-4 tablet:text-4xl desktop:text-[44px] desktop:leading-[1.2]">
                who you are, identity crises, what the hell we’re doing here, and what makes a relationship actually
                work.
              </p>
              <div className="mt-8 tablet:mt-10">
                <ButtonLink to="/services" className={lightButtonClasses}>
                  Services
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-title" className="bg-ice-100 pt-15 pb-20 tablet:pt-14 tablet:pb-24 desktop:py-24">
        <h2 id="testimonials-title" className={`${display()} text-center`}>
          Testimonials
        </h2>
        <div className="site-container mt-8 flex flex-col gap-6 tablet:mt-10 tablet:gap-8 desktop:gap-10">
          {featured.map((t) => (
            <TestimonialBanner key={t.name} t={t} />
          ))}
          <TestimonialRotator items={rotation} />
        </div>
      </section>

      {/* Start — Aaron's own message, with the logo as his avatar */}
      <section className="bg-ice-300 pt-[70px] pb-24 tablet:py-28 desktop:py-[130px]">
        <div className="site-container flex justify-center">
          <div className="relative w-full max-w-[880px] rounded-[32px] rounded-br-lg bg-navy px-6 py-12 text-center text-white tablet:rounded-[48px] tablet:rounded-br-xl tablet:px-16 tablet:py-16 desktop:py-20">
            <h2 className="font-serif text-[30px] leading-[1.2] text-balance tablet:text-[44px] desktop:text-[56px] desktop:leading-[1.15]">
              Schedule time to get to know me.
            </h2>
            <p className="mt-2 text-[17px] leading-normal font-light text-ice-300 tablet:mt-3 tablet:text-xl">
              Let’s see if this is your thing.
            </p>
            <div className="mt-7 tablet:mt-9">
              <ButtonLink to="/contact" className={lightButtonClasses}>
                Book a Call
              </ButtonLink>
            </div>
            <img
              src="/images/logo-header.svg"
              alt=""
              width={80}
              height={80}
              className="absolute -right-2 -bottom-6 size-14 rounded-full bg-ice-300 ring-4 ring-ice-300 tablet:-right-6 tablet:-bottom-8 tablet:size-20"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
