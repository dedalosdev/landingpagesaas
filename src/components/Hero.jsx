

export const Hero = () => {
    return (
        <div>
            <section class="text-white body-font bg-indigo-100 h-100" style={{background:"url(img/hero.png)", height:"40vh", 
                backgroundSize: "cover", backgroundPosition:"center"}}>
                <div class="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-80">
                        <h1 class="title-font sm:text-6xl text-3xl mb-4 font-bold leading-tight capitalize">Organize your tasks, 
                            <br class="hidden lg:inline-block" />connect your team,
                            <br class="hidden lg:inline-block" />and achieve better results.
                        </h1>
                        <p class="mb-8 leading-relaxed text-x1">
                            Flowly is a comprehensive SaaS solution for project management, task management,
                            <br class="hidden lg:inline-block" /> and collaboration. Simple to use, yet powerful where it counts.
                        </p>
                        <div class="flex justify-center">
                            <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Get started for free
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">See Demo</button>
                        </div>
                    </div>
                    {/* <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </div> */}
                </div>
            </section>
        </div>
    )
}
