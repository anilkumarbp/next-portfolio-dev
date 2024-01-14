import Link from 'next/link';
import Image from 'next/image';

const Skills = () => (
  <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
    <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
      <div className="flex-none lg:flex-1">
        <Image
          src="/assets/illustrations/skills.svg"
          alt="I’m Anil Kumar and I’m a UI developer!"
          width={447}
          height={326}
        />
      </div>
      <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
        <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
        <p className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography">
				 8+ years of end-to-end software development experience with focus on front-end engineering. Expertise includes development of high performant & scalable mobile first, responsive user interfaces using latest javscript frameworks and web technologies. Proficient in leading projects, including mentorship, stakeholder management, prioritization and communication.
        </p>
        <Link href="#contact" className="button button-primary">
          Get in touch  
        </Link>
      </div>
    </div>
  </div>
);

export default Skills;
