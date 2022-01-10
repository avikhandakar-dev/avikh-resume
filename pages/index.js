import { Fragment } from "react";
import { FiMail, FiSmartphone, FiUsers } from "react-icons/fi";
import { IoHomeOutline, IoLogoJavascript, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import {SiNextdotjs, SiTailwindcss} from "react-icons/si";
import {AiOutlineSketch} from "react-icons/ai";
import Image from "next/image";
export default function Home() {
  return (
    <Fragment>
      <div className="container mx-auto max-w-screen-xl">
        <main className="flex flex-col md:flex-row-reverse sm:m-12 shadow-2xl rounded-lg overflow-hidden">
          <div className="w-full lg:max-w-xs p-8 bg-gradient-to-b from-rose-100 via-teal-100 to-white">
            <div className="px-2 mb-12">
              <h1 className="text-center text-3xl font-semibold mb-2">
                Avi Khandakar
              </h1>
              <h2 className="text-center text-xl font-light">
                Fullstack Developer
              </h2>
            </div>

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <div className="flex items-center gap-4 my-3">
                <span className="text-2xl"><FiMail /></span>
                <a href="mailto:avikhandakar@gmail.com">avikhandakar@gmail.com</a>
              </div>
              <div className="flex items-center my-3 gap-4">
                <FiSmartphone className="text-2xl" />
                <a href="tel:+8801752439315">+880 1752 439 315</a>
              </div>
              <div className="flex items-center my-3 gap-4">
                <IoHomeOutline className="text-2xl" />
                <div>
                  <p>Rrajbari, 7700</p>
                  <p>Bangladesh</p>
                </div>
              </div>
            </div>

            {/* <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Personal</h2>
              <div className="flex items-center my-3 gap-4">
                <BsEgg className="text-2xl" />
                <span>Born on 14th of April 1990</span>
              </div>
              <div className="flex items-center my-3 gap-4">
                <FiUsers className="text-2xl" />
                <span>Married, one kid</span>
              </div>
            </div> */}

            <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Skills & Tools</h2>
              <ul className="list-none">
                
                <li className="flex items-center my-3 gap-4">
                  <IoLogoJavascript className="text-2xl" />
                  <p>JavaScript</p>
                </li>
                
                <li className="flex items-center my-3 gap-4">
                  <FaReact className="text-2xl" />
                  <p>React</p>
                </li>

                <li className="flex items-center my-3 gap-4">
                  <SiNextdotjs className="text-2xl" />
                  <p>Next.js</p>
                </li>
                <li className="flex items-center my-3 gap-4">
                  <IoLogoNodejs className="text-2xl" />
                  <p>Node / Express.js</p>
                </li>
                <li className="flex items-center my-3 gap-4">
                  <IoLogoPython className="text-2xl" />
                  <p>Python / Flask</p>
                </li>
                <li className="flex items-center my-3 gap-4">
                  <AiOutlineSketch className="text-2xl" />
                  <p>Sketch / Figma</p>
                </li>
                <li className="flex items-center my-3 gap-4">
                  <SiTailwindcss className="text-2xl" />
                  <p>Tailwind CSS</p>
                </li>
                
                
              </ul>
            </div>

            {/* <div className="font-light text-lg px-2 mb-12">
              <h2 className="text-xl font-semibold mb-4">Languages</h2>
              <h3 className="font-semibold">Bengali</h3>
              <p>Native</p>
              <h3 className="font-semibold">English</h3>
              <p>Fluent</p>
            </div> */}
          </div>
          <div className="content w-full p-12">
            <div className="prose">
              <h2 className="text-teal-500 uppercase relative pl-4"><span className="absolute inset-0 w-2 h-full bg-rose-300" />Objective</h2>
              <p>
                I'm a self-taught web developer focusing on the core web
                fundamentals - HTML, CSS and JS. I'm experienced in frontend
                frameworks like Vue and React and static site generators like
                Next.js and Gatsby. I use CSS frameworks like
                TailwindCSS or Bootstrap to speed up styling of my
                projects.
              </p>
              <p>
                I am highly motivated in expanding my skills day by day for
                better performance, testing and user experience.
              </p>
            </div>
            <hr className="mt-8 mb-12" />
            <div className="prose">
              <h2 className="text-teal-500 uppercase relative pl-4"><span className="absolute inset-0 w-2 h-full bg-rose-300" />Projects</h2>
              <h3 className="font-light italic text-gray-600">Some of my works</h3>
              <div className="mb-16">
                <h3>Buetian89 North America</h3>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                   About:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                  The BUETian89 Foundation of North America is a non-profit, non-political, non-religious, social organization.
                  </div>
                </section>
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Live:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    <a
                      href="https://buetian89na.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://buetian89na.org
                    </a>
                  </div>
                </section>
                
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Features:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    <ul>
                      <li>Static generation</li>
                      <li>Custom admin panel</li>
                      <li>Poll / Voting system</li>
                      <li>Blog content written in Markdown</li>
                      <li>Stripe payment</li>
                      <li>SEO</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Built with:
                  </div>
                  <div className="lg:w-8/12 w-full gap-4 inline-flex flex-wrap">
                    <span className="underline">Next.js</span>
                    <span className="underline">Tailwind</span>
                    <span className="underline">
                      Firebase
                    </span>
                    <span className="underline">
                      Stripe
                    </span>
                    <span className="underline">
                      SendGrid
                    </span>
                  </div>
                </section>
              </div>

              <div className="mb-16">
                <h3>The Grateful Giving</h3>
                
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Live:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    <a
                      href="https://mkdrivingschool.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://www.thegratefulgiving.com
                    </a>
                  </div>
                </section>
                
                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Features:
                  </div>
                  <div className="lg:inline-block lg:w-8/12 w-full">
                    <ul>
                      <li>Role-based access control</li>
                      <li>Admin panel</li>
                      <li>Paypal / Stripe payment</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-6">
                  <div className="lg:inline-block lg:w-3/12 lg:align-top italic mb-2">
                    Built with:
                  </div>
                  <div className="lg:w-8/12 w-full gap-4 inline-flex">
                    <span className="underline">Python</span>
                    <span className="underline">Flask</span>
                    
                    <span className="underline">
                      PythonAnywhere
                    </span>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-1">
                <div className="w-full">
                  <h3>MK Driving School</h3>
                  <a
                      href="https://www.thegratefulgiving.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://mkdrivingschool.vercel.app                    </a>
                  <div className="w-full aspect-[800/546] -ml-4 sm:-ml-6">
                    <Image src="/img/p1.jpg" width={800} height={546} />
                  </div>
                </div>
                <div className="w-full">
                <h3>Rijik Data Allah</h3>
                <a
                      href="https://rijik-data-allah.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://rijik-data-allah.vercel.app
                    </a>
                  <div className="w-full aspect-[800/546] -ml-4 sm:-ml-6">
                    <Image src="/img/p2.jpg" width={800} height={546} />
                  </div>
                </div>
              </div>
            </div>
            
            {/* <hr className="mt-8 mb-12" />
            <div id="projects" className="prose">
              <h2 className="text-teal-500 uppercase relative pl-4"><span className="absolute inset-0 w-2 h-full bg-rose-300" />Expand my skills</h2>
              <div className="mb-16">
                <h4 id="expand-knowledge-headline">
                  I'd like to expand my skills and knowledge in several fields
                </h4>
                <ul>
                  <li>TypeScript</li>
                  <li>Angular</li>
                  <li>Scalable Vector Graphics</li>
                  <li>Mobile development</li>
                  <li>
                    Learn additional language like Go, Rust
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </main>
      </div>
    </Fragment>
  );
}
