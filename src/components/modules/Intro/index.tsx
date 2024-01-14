import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/ui/theme/Header';

const Intro = () => (
  <div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
    <Header />
    <div className="container py-16 flex items-center flex-col md:flex-row justify-between">
      <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">Hi There ! 👋</h1>
        <h2 className="mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
          I’m Anil Kumar

					A Developer fasinated by the Web with a focus on creating high performant, scalable, responsive UI interfaces. Passionate about FE engineering and startups.   
        </h2>
        <Link href="https://linkedin.com/in/anilkumarbp" className="button button-primary">
          Where do I work ? 
        </Link>
				<Link href="#contact" className="button button-primary">
          Get in touch
        </Link>
      </div>
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/assets/illustrations/dev.svg"
          alt="I’m Anil and I’m a UI developer!"
          width={463}
          height={273}
          priority
        />
      </div>
    </div>
  </div>
);

export default Intro;
