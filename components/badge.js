export default function Badge({id, name}) {
    return <span  id={id} className="inline-flex m-2 items-center rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600">
    {name}
  </span>;
}
