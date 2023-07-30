export default function Container({ id, children }) {
    return <div id={id} className="mx-auto max-w-3xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-10">{ children }</div>
  }