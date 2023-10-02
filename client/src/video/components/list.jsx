export default function Example({
  coursenam=0,
  people = [
    {
      name: "Leslie Alexander",
      href: "",
      Desc: "leslie.s@example.com",
    },
  ],
}) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <a href={"/video?&m=" + person.href+"&curso="+coursenam }>
          <li key={person.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.Desc}
                </p>
              </div>
            </div>
          </li>
        </a>
      ))}
    </ul>
  );
}
