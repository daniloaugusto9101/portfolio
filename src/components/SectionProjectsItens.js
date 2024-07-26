import Image from 'next/image';
import SmallText from './SmallText';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function SectionProjectsItens({ projects }) {
  return (
    <div className="flex flex-col gap-40">
      {projects.map((item, index) => (
        <div key={index} className={`flex flex-col gap-10 ${item.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          <div className="flex justify-center md:w-1/2">
            <Image src={item.img} alt={item.imgAlt} width={500} height={500} className="cursor-pointer" />
          </div>
          <div
            className={`flex flex-col justify-between text-center md:w-1/2 ${
              item.reverse ? 'md:text-right' : 'md:text-left'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mb-3">
                {item.hardSkillList.map((skill, index) => (
                  <SmallText key={index} text={skill} />
                ))}
              </p>
            </div>
            <p className="mb-4">{item.description}</p>
            <div className={`flex justify-center gap-2 ${item.reverse ? 'md:justify-end' : 'md:justify-start'}`}>
              <a
                href="#"
                className="flex items-center rounded-md border border-customPurple-700 px-2 py-1 text-customPurple-500 transition duration-300 ease-in-out hover:bg-customPurple-700 hover:text-white"
              >
                <FaExternalLinkAlt className="mr-2" />
                Site
              </a>
              <a
                href="#"
                className="flex items-center rounded-md border border-customPurple-700 px-2 py-1 text-customPurple-500 transition duration-300 ease-in-out hover:bg-customPurple-700 hover:text-white"
              >
                <FaGithub className="mr-2" />
                Github
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
