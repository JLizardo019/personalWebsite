export default function Badge2({id, name}) {
    return <span  id={id} className="inline-flex m-2 items-center rounded-full bg-[var(--c2)] px-4 py-2 text-md font-medium text-[white]">
    {name}
  </span>;
}
