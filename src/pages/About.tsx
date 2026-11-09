import ButtonLink from '../components/ButtonLink';
import Layout from '../components/Layout';

// Preview: About copy from the Site Copy doc.
const bio = [
  "After getting a bachelor’s in math and a brief failed stint as a professional poker player, I realized I needed to figure out what I actually liked to do. It was talking to people about what’s really going on with them.",
  "So in 2010 I got a life coaching certification from the Coaches Training Institute. Then I got a master’s in psychology from John F. Kennedy University. Since then I’ve earned more than ten coaching and post-grad therapy certifications, including a PCC credential from the ICF, NARM, complex and developmental trauma therapy, couples training through Relational Life Therapy, the Couples Institute, and the Gottman Institute (although I honestly don’t think the Gottmans’ training is very good), and ACT, CBT, and psychedelic guide training through the Congregation for Sacred Practices.",
  "Through one-on-one and one-on-two work, workshops, and corporate work, I’ve worked with over 1,000 clients and have many thousands of hours of sessions under my belt. I’ve also been featured in some fun places like NPR, Newsweek, and HuffPost and been on an assortment of podcasts, if you’re into that sort of thing.",
  "What’s important to know is that I both hate and love personal development. Too much of it is “leadership” and “business” coaches selling other coaches on how to become “leadership” and “business” coaches and sell “leadership” and “business” coaching to other coaches who have just gotten out of coaching school. Or scam artists implying they’ll solve all your problems in a 12k 6-month “container.”",
  "But personal development and therapy and workshops and healing stuff are also amazing. It’s just tough that the best stuff for growing and healing is buried under woo-woo magick, dense academia, and self-responsibility bro culture. However, I can hang with woo, I love school and do jiu-jitsu like a lot of those bros. So what I do is somehow all of that (well, not the scam stuff) and none of it. The questioning of why therapy and personal growth are the way they are — and the desire for it to be fun and enjoyable — guides a lot of my practice and creations. I’m very curious about the future of healing and personal development, and fascinated by the intersection of entertainment, art, technology, and psychological practices.",
  "I love people. I love relationships. I love trying to figure out what’s most real. And I’m obsessed with the questions of what it means to be yourself and what it means to have a successful relationship, and the practice of trying to execute these things. Like a lot of existential questions, these seem self-evident, but in my opinion, they’re really not. This obsessive, delightful search guides most of my life.",
  "Outside of all this personal growth stuff, I’m 40 years old. I live in the Bay Area, CA. I’ve been very happily married for 12 years although it got kinda hairy there after two kids. Those two kids are now 8 (Levon) and 10 (August) and I have a dog named Luna. I love reading, writing, golf (I was lucky enough to play low-level college golf), and jiu-jitsu. In fact, I coach the local elementary school jiu-jitsu classes through a nonprofit I created. I’m learning to be a personal trainer to mix in the physical. And although I am a coach I am really a wannabe artist, and I love making stuff."
];

const split = bio.findIndex((p) => p.startsWith('What’s important to know'));
const sections = [
  { heading: 'The bottom line', paras: bio.slice(0, split) },
  { heading: 'More about me', paras: bio.slice(split) },
];

export default function About() {
  return (
    <Layout title="About — Hey Aaron Help">
      <section className="pt-10 pb-20 tablet:pt-16 tablet:pb-28 desktop:pt-24 desktop:pb-40">
        <div className="site-container flex max-w-[700px] flex-col items-center gap-10 tablet:gap-12 desktop:gap-16">
          <img
            src="images/about-aaron.png"
            alt="Aaron Steinberg"
            width={180}
            height={180}
            className="mt-3 size-[140px] rounded-full object-cover object-bottom tablet:size-40 desktop:size-[180px]"
          />
          <div className="flex flex-col gap-4 tablet:gap-6">
            <h1 className="text-center font-serif text-[32px] leading-[1.2] text-ink tablet:text-[40px] desktop:text-5xl">
              About Me
            </h1>
            {sections.map((sec) => (
              <section key={sec.heading} className="mt-4 flex flex-col gap-3 tablet:mt-6 tablet:gap-4">
                <h2 className="font-serif text-[22px] leading-[1.35] text-balance text-ink-dark tablet:text-2xl desktop:text-[26px]">
                  {sec.heading}
                </h2>
                <div className="flex flex-col gap-4 text-[17px] leading-[1.6] font-light text-ink tablet:gap-5 tablet:text-lg tablet:leading-[1.7] desktop:text-xl">
                  {sec.paras.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <ButtonLink to="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </Layout>
  );
}
