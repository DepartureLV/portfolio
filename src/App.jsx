import { useEffect, useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab, fas);

import "./output.css";
import * as React from "react";
import Modal from "@mui/joy/Modal";
import { Sheet } from "@mui/joy";

function App() {
  const [textSearch, setTextSearch] = useState("");
  console.log(textSearch);

  const [searching, setSearching] = useState(false);

  console.log(searching);

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Vue.js",
    "Tailwind",
    "Bootstrap",
    "GitHub",
  ];

  const filters = ["filter1", "filter2", "filter3", "filter4", "filter5"];

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
              <button
                className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-primary bg-slate-200/30 dark:highlight-white/5 hover:bg-slate-100/70"
                required
                type="text"
                onClick={() => {
                  searching ? setSearching(false) : setSearching(true);
                }}
              >
                <FontAwesomeIcon
                  icon="fa-solid fa-magnifying-glass"
                  className="w-3 h-3 text-primary mr-1"
                />
                Quick Search
                <span className="ml-auto pl-3 flex-none text-xs font-semibold">
                  ⌘ K
                </span>
              </button>
              <Modal
                aria-describedby="modal-desc"
                open={searching}
                onClose={() => setSearching(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                autoFoucs={false}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    maxWidth: 1080,
                    minWidth: 500,
                    borderRadius: "md",
                    p: 3,
                    boxShadow: "lg",
                  }}
                >
                  <header>
                    <form>
                      <label htmlFor="docsearch"></label>
                      <input
                        placeholder="Type to find..."
                        value={textSearch}
                        maxLength={64}
                        onChange={(event) => {
                          setTextSearch(event.target.value);
                        }}
                        className="w-full h-auto py-2 mb-3 border-b border-primary"
                        enterKeyHint="go"
                        autoFocus={true}
                      />
                    </form>
                  </header>
                  <div className="grid grid-cols-2 gap-2">
                    {filters.map((filter) => {
                      return (
                        <p className="p-2 bg-primary/40 border border-primary rounded-full text-center text-white font-semibold">
                          {filter}
                        </p>
                      );
                    })}
                  </div>
                </Sheet>
              </Modal>
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

                <section className="my-4">
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

                <div className="flex gap-4">
                  <a href="mailto:nattawat.arch@gmail.com">
                    <span className="sr-only">Email</span>
                    <FontAwesomeIcon
                      icon="fa-solid fa-envelope"
                      size="2x"
                      className="text-primary hover:text-primary/50"
                    />
                  </a>
                  <a href="https://github.com/DepartureLV">
                    <span className="sr-only">Github</span>
                    <FontAwesomeIcon
                      icon="fa-brands fa-github"
                      size="2x"
                      className="text-primary hover:text-primary/50"
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/nattawat-pitikomon/">
                    <span className="sr-only">LinkedIn</span>
                    <FontAwesomeIcon
                      icon="fa-brands fa-linkedin"
                      size="2x"
                      className="text-primary hover:text-primary/50"
                    />
                  </a>
                </div>
              </div>
            </div>

            <img src="./src/assets/react.svg" className="w-96 h-96" />
          </section>

          <section className="pb-6 mb-6 border-b border-primary">
            <h2 className="text-3xl mb-2 text-primary font-bold">Skills</h2>
            <ul className="flex gap-2">
              {skills.map((skill) => {
                return (
                  <li
                    key={skill}
                    className="bg-primary py-2 px-4 text-white rounded-full"
                  >
                    {skill}
                  </li>
                );
              })}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl mb-2 text-primary font-bold">
              Experiences
            </h2>
            <div className="grid grid-cols-[50px_minmax(0,_1fr)_minmax(0,_1fr)] gap-4">
              <div>
                <img
                  src="./src/assets/react.svg"
                  className="w-10 h-10 m-auto"
                />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-primary font-bold">Title</h3>
                <p className="text-balance">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </section>
        </div>
        <footer className="max-w-[1080px] m-auto flex justify-between">
          <p>Nattawat Pitikomon</p>
          <div className="flex gap-4">
            <a href="https://github.com/DepartureLV">
              <span className="sr-only">Github</span>
              <FontAwesomeIcon
                icon="fa-brands fa-github"
                style={{ fontSize: 20 }}
                className="text-primary hover:text-primary/50"
              />
            </a>
            <a href="https://www.linkedin.com/in/nattawat-pitikomon/">
              <span className="sr-only">LinkedIn</span>
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                style={{ fontSize: 20 }}
                className="text-primary hover:text-primary/50"
              />
            </a>
          </div>
        </footer>
      </>
    </main>
  );
}

export default App;
