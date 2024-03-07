import PlayerAnimation from './PlayerAnimation'

const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div className="flex justify-center xl:w-1/2">
            <div className="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full"> <PlayerAnimation link={"https://lottie.host/0d257cdb-e77d-4a9f-aa6b-698f1645d7fb/EemGuX1v3E.json"}/>
</div>
        </div>

        <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
                Never ever let your stomach empty
            </h2>

            <p className="block max-w-2xl mt-4 text-gray-500 dark:text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio. </p>

            <div className="mt-6 sm:-mx-2">
                <a href="#" className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 overflow-hidden text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    
                    <span className="mx-2">
                        Order on WhatsApp
                    </span>
                </a>

                <a href="#"
                    className="inline-flex items-center justify-center w-full px-4 text-sm py-2.5 mt-4 overflow-hidden text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    

                    <span className="mx-2">
                        Order on Call
                    </span>
                </a>
            </div>
        </div>
    </div>
</section>
  )
}

export default CTA