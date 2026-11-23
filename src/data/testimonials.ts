export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

/** A testimonial shown as a wide banner: the person's photo extended across a rounded card. */
export interface BannerTestimonial {
  name: string;
  role?: string;
  quote: string;
  /** 1500×615 image with the person on one side and room for the quote on the other. */
  src: string;
  /** Which side of the banner the person is on. */
  photo: 'left' | 'right';
  /** Light banners take dark text, dark banners take white text. */
  tone: 'light' | 'dark';
  /** Top and bottom colours of the banner's text side; they sit behind the text on smaller screens. */
  tint: [string, string];
  /** Desktop crop as a CSS object-position (the image is cropped top and bottom there). */
  position?: string;
}

/** The three banners that are always shown on Home. */
export const featured: BannerTestimonial[] = [
  {
    name: 'Michael Garrett',
    role: 'Founder & CEO, Plunge',
    quote:
      'Aaron’s ability to get to the core of an issue made our work together incredibly valuable and transformative. I highly recommend him to other executives, or really anyone seeking impactful guidance.',
    src: '/images/testimonial-michael.jpg',
    photo: 'left',
    tone: 'light',
    tint: ['#e3e2e6', '#e7e0d7'],
  },
  {
    name: 'Lane 8',
    role: 'Musician & Producer',
    quote:
      'Aaron’s ability to convey complex concepts in a lighthearted and accessible way—while still being sincere—is incredibly useful. He is terrific at what he does and his work has helped me tremendously. I highly recommend his services.',
    src: '/images/testimonial-lane8.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#071465', '#08165f'],
  },
  {
    name: 'Erika Shelton',
    role: 'Yoga Teacher and Entrepreneur',
    quote:
      'Aaron helped me understand myself and how to communicate effectively. He’s helped me progress and grow as a person, and I love soaking up all the good things he has to offer.',
    src: '/images/testimonial-erika.jpg',
    photo: 'left',
    tone: 'light',
    tint: ['#afd8dc', '#fcf4e2'],
    position: 'center 28%',
  },
];

/**
 * The fourth banner on Home cycles through these. Each banner image is the person's
 * headshot placed on the right and extended to the left with a soft wash of its own
 * colours. Quotes are trimmed from the full versions in the testimonials doc.
 */
export const rotation: BannerTestimonial[] = [
  {
    name: "Kristy Arnett",
    role: "Author and Content Creator",
    quote:
      "When I first started working with Aaron, I was at the highest point in my career and the lowest point in my personal life. I was devastated, shaken, confused and completely lost. Every time we have a session, I hang up feeling so hopeful in the clarity he helped me find.",
    src: '/images/testimonials/kristy-arnett.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#24183b', '#231737'],
  },
  {
    name: "Jenna & Hagan",
    quote:
      "We feel so much more confident in our ability to show up and do what it takes to make our relationship better. Aaron has condensed many years of study and practice into his work. We felt understood in a deep way, and his vibrancy, enthusiasm, and clarity left us so energized!",
    src: '/images/testimonials/jenna-hagan.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#f4efe7', '#f4efe7'],
  },
  {
    name: "Paul & Angie",
    quote:
      "Aaron is one of the wisest, most compassionate and loving people we have ever met. We had reached out to Aaron when the two of us had come to, what felt like, a bit of a dead end in our relationship. Now, we have never been so happy, we have reached a point in our relationship that we never thought we would.",
    src: '/images/testimonials/paul-angie.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#13241a', '#13241a'],
  },
  {
    name: "Emily Long",
    role: "Founder and CEO at Edera",
    quote:
      "Aaron is a very skilled practitioner. Whatever you bring him — whether it’s work or relationships or personal wellbeing — he can be with you there and provide safe but also practical support and guidance. I highly recommend learning from him or working with him.",
    src: '/images/testimonials/emily-long.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#2b2a26', '#2b2a25'],
  },
  {
    name: "Zach Silverman",
    role: "COO at The Warming Store, former professional basketball player",
    quote:
      "I can’t recommend Aaron highly enough. He’s one of the most trustworthy and insightful individuals I’ve ever met. With his guidance and support I’ve been able to pursue my dreams and make them happen.",
    src: '/images/testimonials/zach-silverman.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#dfe5dc', '#dee3db'],
  },
  {
    name: "Jack Parmer",
    role: "Founder and CEO at FLOJOY",
    quote:
      "Aaron helped me change my life. Seeing Aaron helped uncover long-standing issues around perfectionism, self-worth, and vulnerability. I wouldn’t have had the language, framework, or courage to lean into them without his compassion and expertise. All his testimonials are true.",
    src: '/images/testimonials/jack-parmer.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#e6e1e0', '#e9e6e4'],
  },
  {
    name: "Courtney Joyce",
    role: "Executive Coach",
    quote:
      "Whatever you are bringing, he holds it. Aaron is one of my favorite humans. He’s got a good sense of humor and is very real. No bullshit. Working with him will be some of the best money you will spend for personal growth.",
    src: '/images/testimonials/courtney-joyce.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#e8ebe5', '#ecece8'],
  },
  {
    name: "Andrew Moreno",
    role: "Professional Poker Player",
    quote:
      "Aaron is someone who just understands human beings and their behavior. He’s masterfully guided me through difficult areas with calmness and I can honestly say that I haven’t been happier in quite a long time. I would highly recommend working with Aaron Steinberg as he has changed my life forever.",
    src: '/images/testimonials/andrew-moreno.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#1b1f2f', '#181e33'],
  },
  {
    name: "Ben Tollerene",
    role: "Professional Poker Player",
    quote:
      "Aaron is a warm and caring person with natural people skills. His insight and advice have helped me better understand behaviors that were getting in my way and change them. I would recommend him to anyone interested in improving their self-awareness, personal growth, or overall well-being.",
    src: '/images/testimonials/ben-tollerene.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#080a41', '#080d46'],
  },
  {
    name: "Iris McAlpin",
    role: "AMFT, Certified Master Trauma Therapist",
    quote:
      "Aaron is a unicorn. He’s whip smart and extremely analytical but also incredibly emotionally aware, heartfelt, and attuned. He’s the most skilled person I have ever met at balancing being searingly direct with being empathetic, compassionate, and loving in his delivery.",
    src: '/images/testimonials/iris-mcalpin.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#f8f5db', '#f8f5d9'],
  },
  {
    name: "Monica Sanny",
    role: "Lead Meditation Teacher at The David Lynch Foundation",
    quote:
      "Working with Aaron changed my life! I would not be where I am today without his brilliance, insight and support. I have grown more with him than any other time of my life. I truly believe he’s one of the greats in his field!",
    src: '/images/testimonials/monica-sanny.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#dedee2', '#dbdce6'],
  },
  {
    name: "NoAmy Wolves",
    role: "DJ",
    quote:
      "Aaron is skilled at listening and finding pieces to the puzzle that I didn’t even know existed. My thinking, and therefore my life, is so much different today than when I first met Aaron. Aaron helped me face my s#*! and provide a space for me to process it.",
    src: '/images/testimonials/noamy-wolves.jpg',
    photo: 'right',
    tone: 'dark',
    tint: ['#30151b', '#38181e'],
  },
  {
    name: "Dr. Sara Estrin",
    role: "Urgent Care Physician at Cedars-Sinai",
    quote:
      "Aaron has helped me face and work on core issues and fears, and I feel safe with his guidance through these dark, scary, vulnerable places. I find our sessions are invaluable. I respect and honor his brilliant work, and am so grateful for his presence in my life.",
    src: '/images/testimonials/sara-estrin.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#e2e2e2', '#e4e4e4'],
  },
  {
    name: "Jeanette Brousseau",
    role: "Tech Salesperson",
    quote:
      "Extremely compassionate, massive empath, genuinely cares. Aaron is one of the best people I’ve ever met. In every way Aaron has changed my life. Aaron has helped me feel at home within myself.",
    src: '/images/testimonials/jeanette-brousseau.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#f0f1f0', '#e4e4e5'],
  },
  {
    name: "Juan-Carlos Faust",
    role: "Photographer",
    quote:
      "I think Aaron has an unusually strong, grounded, and solid presence, a kind of unshakability that is fairly uncommon. I feel very cared for but I also feel very responsible for myself in our work. It’s an ability to empathize deeply without making someone feel like a victim.",
    src: '/images/testimonials/juan-carlos-faust.jpg',
    photo: 'right',
    tone: 'light',
    tint: ['#f0eeee', '#ebe7e6'],
  },
];

/** Shown on Services next to each way of working. */
export const sessionsQuote: Testimonial = {
  name: "Dr. Jaqueline Soboti",
  role: "DSW, Licensed Clinical Social Worker",
  quote:
    "Aaron is so good at helping you grow. He’s able to use anything you bring him to help you face challenges and grow tremendously, and he always seems to create big a-ha moments. He’s awesome.",
};

export const asyncQuote: Testimonial = {
  name: "Molly Millwood",
  role: "Ph.D. Psychologist",
  quote:
    "I have witnessed Aaron’s method of working asynchronously with people in need of support, and I have been consistently impressed by his skills and his approach.  He is both humble and confident, and he is accessible and friendly while maintaining professionalism.  As a licensed psychologist, I can say without hesitation that he has a strong, nuanced understanding – grounded in science – of what allows individuals and couples to function well and what makes them struggle.  Most importantly, Aaron demonstrates truly remarkable emotional attunement.  His warmth and compassion for those who seek his support are unparalleled.",
};
