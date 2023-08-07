export default function Container({ id, bg, children }) {
    // return <div id={id} className="mx-auto bg-pink-500 max-w-3xl lg:max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-10">{ children }</div>

    
    return <div id={id} className={bg + " rounded-lg pb-3 mt-3 py-8 sm:py-10 lg:mt-auto"}>
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-6 lg:px-8 ">
      { children }
      </div>
      </div>

  }