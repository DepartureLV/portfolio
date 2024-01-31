import { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCheckSquare, faCoffee);

import "./output.css";

function App() {
  const [projectSearch, setProjectSearch] = useState("");

  return (
    <main className="max-w-full m-auto bg-inherit">
      <>
        <nav className="w-full flex items-center justify-between py-3 px-6 item-center border-b border-primary">
          <img
            src="https://pngfre.com/wp-content/uploads/apple-logo-7-1024x1024.png"
            alt="logo"
            className="h-[40px] w-[40px]"
          />
          <ul className="flex items-center gap-4">
            <li>
              <form className="flex gap-2 w-[200px]">
                <button
                  className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-primary bg-slate-200/80 dark:highlight-white/5 hover:bg-slate-100"
                  required
                  type="text"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  enterKeyHint="go"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Quick Search
                  <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                    ⌘ K
                  </span>
                </button>
              </form>
            </li>
            <li className="box-border w-16 text-center">
              <a href="#" className="hover:text-primary hover:font-bold">
                Home
              </a>
            </li>
            <li className="box-border w-16 text-center">
              <a href="#" className="hover:text-primary hover:font-bold">
                Project
              </a>
            </li>
            <li className="box-border w-16 text-center">
              <a href="#" className="hover:text-primary hover:font-bold">
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="max-w-[1080px] m-auto my-6">
          <section className="flex pb-6 mb-6 border-b border-primary gap-4">
            <div className="flex-shrink">
              <h1 className="text-primary text-7xl font-jp font-bold mt-0 mb-4">
                ター
              </h1>
              <div>
                <p>
                  from
                  <span className="text-primary font-semibold"> Architect</span>
                </p>
                <h1 className="text-primary text-7xl font-bold my-4">
                  Nattawat Pitikomon
                </h1>
                <p>
                  to
                  <span className="text-primary font-semibold">
                    {` frontend Developer`}
                  </span>
                </p>

                <section className="mt-4">
                  <p className="text-pretty ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </section>

                <FontAwesomeIcon icon="fa-brands fa-github" />

                {/* <div class="flex gap-4">
                  <a href="mailto:nattawat.arch@gmail.com">
                    <span class="sr-only">Email</span>
                    <i class="fa-solid fa-envelope fa-2xl text-primary hover:text-primary/75"></i>
                  </a>
                  <a href="https://github.com/DepartureLV">
                    <span class="sr-only">Github</span>
                    <i class="fa-brands fa-github fa-2xl text-primary hover:text-primary/75"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nattawat-pitikomon/">
                    <span class="sr-only">LinkedIn</span>
                    <i class="fa-brands fa-linkedin fa-2xl text-primary hover:text-primary/75"></i>
                  </a>
                </div> */}
              </div>
            </div>

            <img src="./src/assets/react.svg" className="w-96 h-96" />
          </section>

          <section className="pb-6 mb-6 border-b border-primary">
            <h2 className="text-3xl mb-2 text-primary font-bold">Skills</h2>
            <ul className="flex gap-2">
              <li className="bg-primary py-2 px-4 text-white rounded-full">
                Communication
              </li>
              <li className="bg-primary py-2 px-4 text-white rounded-full">
                Javascript
              </li>
              <li className="bg-primary py-2 px-4 text-white rounded-full">
                React
              </li>
              <li className="bg-primary py-2 px-4 text-white rounded-full">
                Tailwind
              </li>
            </ul>
          </section>
        </div>

        <footer></footer>
      </>
    </main>
  );
}

export default App;
