import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

function Home() {

    return (
        <div className="relative flex w-full items-center justify-center bg-black overflow-x-hidden">

            <div className="relative z-20 w-full text-white">
                {/* Hero Section */}
                <section className="min-h-screen pt-4 md:pt-6 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <img
                        src="/gdgphoto.png"
                        alt="GDG Logo"
                        className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] -mb-12 sm:-mb-14 md:-mb-16 lg:-mb-20 object-contain drop-shadow-[0_8px_16px_rgba(66,133,244,0.4)]"
                    />
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-[1.45] mb-6">
                        <span className="bg-gradient-to-b from-[#6ba3ff] to-[#4285F4] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Google </span>
                        <span className="bg-gradient-to-b from-[#ff6b6b] to-[#DB4437] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Developer </span>
                        <span className="bg-gradient-to-b from-[#4dd17e] to-[#0F9D58] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">Groups</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-4 font-medium tracking-wide">
                        BVRIT Narsapur
                    </p>
                    <p className="mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gdg-yellow animate-pulse font-semibold tracking-wider">
                        Learn • Connect • Grow
                    </p>
                    <div className="flex justify-center mt-10 sm:mt-12 md:mt-14">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="bg-black text-white"
                        >
                            Know More
                        </HoverBorderGradient>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
