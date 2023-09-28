import React from "react";
import Navbar from "../global/Navbar";
import Acordion from "../global/accordion";
import List from "./components/list";
import Player from "./components/play";

/** 
 * [
          [
            "aa",
            [
              {
                name: "Leslie Alexander",
                href: "",
                Desc: "leslie.s@example.com",
              },
            ],
          ],
        ]
 */
function App({
  list = [
    [
      "aa",
      [
        {
          name: "Leslie Alexander",
          href: "",
          Desc: "leslie.s@example.com",
        },
      ],
    ],
  ],
}) {
  return (
    <>
      <Navbar />
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {list.map((item, index) => (
            <Acordion
              key={index}
              accordionName={item[0]}
              content={<List people={item[1]} />}
            />
          ))}
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Player link="https://platform.thinkific.com/videoproxy/v1/play/ce7ofnh9oor6qvkc1740?&autoplay=true&crosstime=164" />
      </div>
    </>
  );
}

export default App;
