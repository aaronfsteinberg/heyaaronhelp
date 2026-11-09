import ButtonLink, { buttonClasses } from '../components/ButtonLink';
import Layout from '../components/Layout';
import { asyncQuote, sessionsQuote, type Testimonial } from '../data/testimonials';

// Preview: Services page copy from the Site Copy doc.
const body = 'flex flex-col gap-4 text-[17px] leading-[1.6] font-light text-ink tablet:gap-5 tablet:text-lg tablet:leading-[1.7] desktop:text-xl';
const h2 = 'font-serif text-[22px] leading-[1.35] text-balance text-ink-dark tablet:text-2xl desktop:text-[26px]';

const ways: { title: string; text: string; quote: Testimonial }[] = [
  {
    title: 'Live sessions',
    text: 'These are meetings that are more like what you’re used to, on my metaphorical Zoom couch for an hour. It’s a chance to have my attention in real time with whatever’s actually happening in the moment. But I promise that we can make them feel more fun and lighthearted than you’re used to, while also making sure that we take the serious stuff seriously.',
    quote: sessionsQuote,
  },
  {
    title: 'Async voice and video',
    text: 'My innovation is that I do asynchronous video and voice work. On your own schedule, you send me voice or video messages with your questions and whatever you’re thinking, feeling, or musing about. I send back every single thing that comes up for me when I hear it. I in no way think I’m God. We both throw spaghetti at the wall, back and forth, and it helps you refine your life.',
    quote: asyncQuote,
  },
];

const philosophy = [
  'Although if you ask me, I’ll definitely give you my opinion and certainly the best practices, I really don’t like the orientation that a session has to be focused on a laundry list of things that are going wrong and the incessant problems we need to solve. When we do it this way, we tend to dread our sessions and not really want to keep going.',
  'I like it better to think of sessions or asynchronous communication as an exploration. You don’t have to come in with a problem to fix or only do it when something’s going wrong. You can bring an intention, something you want to talk about, or something you want to change. But in my model, we’re going to see what happens as you turn toward yourself. That’s usually where the good stuff is.',
  'A lot of my work is based in a psychodynamic philosophy (jargon, I know, sorry), which means that I believe that the necessary doorways emerge when you’re guided toward them and to make space for them, that our brains and consciousness are systems that actually know how to evolve instinctively.',
  'This does not mean I’m one of those people that think you have all the answers that you need inside yourself. The whole point of hiring me is that I’ve spent a ton of time studying all this stuff and understanding how people grow and heal. But my knowledge and skills are best utilized when we can build off of what comes up for you naturally in the midst of this type of growth experience. And when we do it this way, it becomes really fascinating and enjoyable, as opposed to something to dread.',
  'One of the most important things to me personally and as a practitioner is the attempt to face ourselves with humility and honesty, and the search for what’s most real within and outside. I think growth starts when we stop taking ourselves so seriously, and we can inhabit that magical place between defensiveness and self-deprecation.',
  'In a certain way, I believe that working on yourself is the process of living more and more in reality. There’s so much that we don’t know about ourselves and don’t know about the world. And instead of living in that uncertainty, we overlay our experiences with so many assumptions about ourselves and others, filling in the blanks in really poorly organized, poorly constructed ways that then become “truth.” The process of growing and developing is in a certain way the process of questioning all of that, looking in the mirror at the ways we are living in a fantasy world of exaggerated and overgeneralized negativity and positivity that cause us to loop in the same habits and feel torn and lost in the same ways over and over again, and instead living more and more in reality, which I believe leads to much greater freedom and well-being, which is kind of the whole point.',
];

export default function Coaching() {
  return (
    <Layout title="Services — Hey Aaron Help">
      <article className="pt-10 pb-20 tablet:pt-16 tablet:pb-24 desktop:pt-24 desktop:pb-30">
        <div className="site-container flex max-w-[860px] flex-col items-center gap-10 tablet:gap-12 desktop:gap-16">
          <div className="flex w-full flex-col gap-8 tablet:gap-10 desktop:gap-12">
            <h1 className="text-center font-serif text-[32px] leading-[1.2] text-ink tablet:text-[40px] desktop:text-5xl">
              Services
            </h1>

            <section className="mx-auto flex max-w-[700px] flex-col gap-3 tablet:gap-4">
              <h2 className={h2}>What coaching is</h2>
              <div className={body}>
                <p>
                  Historically, coaching asks, “Where are you now, and where do you want to go?” Whereas therapy asks,
                  “Where are you now, and how did you get here?” I’m trained in both, but do not practice as a licensed
                  therapist. And anyway, these days, the lines between coaching and therapy have blurred as therapy moves
                  away from the strictly medical model and coaches bring in therapeutic education and techniques.
                </p>
                <p>
                  One way to think about coaching is it’s a place to help you figure out what you want and get you closer
                  to it than you get on your own. In practice, it’s a guided conversation that uses inquiry, feedback,
                  education, and skill-building to help you get to know yourself better, learn better emotional
                  regulation skills, and feel more agency in your life to close the gap between how you want to think,
                  feel, and act, and what you end up doing in the heat of the moment. You’ll also learn the best
                  practices and understandings from all the fields I’ve studied, and the tools I’ve developed along the
                  way. I use a model that I’ve created and refined over the 16 years that I’ve been in this field.
                </p>
              </div>
              {/* Preview: placeholder until the framework handout exists. */}
              <div className="mt-4 flex justify-center tablet:mt-6">
                <span className={buttonClasses}>Learn My Framework</span>
              </div>
            </section>

            <section className="flex flex-col gap-3 tablet:gap-4">
              <h2 className={`${h2} mx-auto w-full max-w-[700px]`}>How I do it</h2>
              <div className={`${body} mx-auto w-full max-w-[700px]`}>
                <p>
                  This type of work is often done in the repeating session model. But there’s no real reason that this is
                  the way it has to be, other than the fact that this is the way it’s always been. However, I haven’t
                  entirely innovated away from this yet. So I work with couples and individuals in two different ways.
                </p>
              </div>
              <div className="mt-2 grid gap-5 tablet:grid-cols-2 tablet:gap-6">
                {ways.map((w) => (
                  <div key={w.title} className="flex flex-col gap-5 rounded-2xl bg-ice-100 p-6 tablet:p-8">
                    <h3 className="font-serif text-[22px] leading-[1.3] text-ink-dark tablet:text-2xl">{w.title}</h3>
                    <p className="text-[17px] leading-[1.6] font-light text-ink">{w.text}</p>
                    <figure className="m-0 mt-auto border-t border-ink/15 pt-5">
                      <blockquote className="m-0 text-[15px] leading-relaxed font-light text-ink italic">
                        “{w.quote.quote}”
                      </blockquote>
                      <figcaption className="mt-3 text-sm leading-[1.4] text-ink">
                        — {w.quote.name}, {w.quote.role}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center tablet:mt-6">
                <ButtonLink to="/contact">Get Started</ButtonLink>
              </div>
            </section>

            <section className="mx-auto flex max-w-[700px] flex-col gap-3 tablet:gap-4">
              <h2 className={h2}>My Practice Philosophy</h2>
              <div className={body}>
                {philosophy.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </Layout>
  );
}
