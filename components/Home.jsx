import PlayerAnimation from "./PlayerAnimation"

const Home = () => {
  return (
    <header className="bg-white dark:bg-gray-900">
    
    <div className="container px-6 py-6 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-4xl font-semibold text-[#FC800A] dark:text-white lg:text-6xl">Raat Biraat</h1>
                    
                    <p className="mt-3 text-gray-600 dark:text-gray-400">By the students to the students for the students.</p>
                    
                    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#FC800A] rounded-lg lg:w-auto hover:bg-[#ce833d] focus:outline-none focus:bg-[#ce833d]">Order Now</button>
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <PlayerAnimation link={"https://lottie.host/9296dd24-0a00-48f5-aef8-606cbfae4086/FZSXnvMZlr.json"}/>
            </div>
        </div>
    </div>
</header>
  )
}

export default Home