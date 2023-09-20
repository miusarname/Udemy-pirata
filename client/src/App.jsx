import React from "react";
import Player from "./video/Player";

export default function App() {
  return (
    <>
      <Player
        list={[
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
        ]}
      />
    </>
  );
}
