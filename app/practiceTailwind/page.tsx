export default function PracticeTailwind() {
  return (
    <div className="h-screen bg-blue-950 flex justify-center">

      <div>
      <div className="text-4xl mt-10 text-blue-400 text-center">Webinar<span className="text-white">.gg</span></div>
      <div className="text-2xl text-white mt-20 text-center">Verify Your Age</div>
      <div className="mt-9 text-slate-600 text-center">Please confirm your birth year. This data will not be stored.</div>
      <input type="text" placeholder="Your Birth Year" className="px-4 py-2 mt-5 ml-10 w-80 bg-blue-950 border border-slate-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600 h-12" />
      <br/>
      <br/>

      <button
          className="px-4 py-2 ml-10 w-80 bg-gray-500 border border-slate-600 rounded-lg shadow-md text-white"
        >
         Continue
        </button>
      </div>

    </div>
  )
}

/*export default function PracticeTailwind () {
  return (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-10">
       <div className="col-span-1 sm:col-span-3 bg-blue-300">first DIV</div>
       <div className="col-span-1 sm:col-span-6 bg-pink-600">Second DIV</div>
       <div className="col-span-1 sm:col-span-1 bg-yellow-700">third DIV</div>
    </div>
  </>
  )
}*/