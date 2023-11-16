export default function Badge2({id, name}) {
    return <span  id={id} className="inline-flex m-2 items-center rounded-full bg-white px-4 py-2 text-md font-medium text-gray-600">
    {name}
  </span>;
}
