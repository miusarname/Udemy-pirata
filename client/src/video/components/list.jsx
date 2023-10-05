import React from "react";

export default function Example({ coursenam = 0, people = [] }) {
  return (
    <ul className="divide-y divide-gray-200">
      {people.map((person) => (
        <a
          href={`/video?&m=${person.href}&curso=${coursenam}`}
          key={person.href}
          className="block hover:bg-gray-100 p-4"
        >
          <li className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{person.name}</p>
              <p className="mt-1 text-sm text-gray-600">{person.Desc}</p>
            </div>
          </li>
        </a>
      ))}
    </ul>
  );
}
