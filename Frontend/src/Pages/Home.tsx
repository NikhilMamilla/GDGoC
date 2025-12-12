import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";
import { useTheme } from "../context/ThemeContext";

function Home() {
    const { theme } = useTheme();

    return (
        <div className={`relative flex w-full items-center justify-center overflow-x-hidden transition-colors ${theme === 'dark' ? 'bg-black' : 'bg-[#F7F3E9]'
            }`}>

            <div className={`relative z-20 w-full transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                {/* Hero Section */}
                <section className="min-h-screen min-h-[100dvh] pt-4 md:pt-6 py-8 sm:py-16 flex flex-col items-center justify-center text-center px-4 sm:px-6">
                    <img
                        src="/gdgphoto.png"
                        alt="GDG Logo"
                        className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] -mb-12 sm:-mb-14 md:-mb-16 lg:-mb-20 object-contain ${theme === 'dark'
                            ? 'drop-shadow-[0_8px_16px_rgba(66,133,244,0.4)]'
                            : 'drop-shadow-[0_8px_16px_rgba(66,133,244,0.3)]'
                            }`}
                    />
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-[1.45] mb-6">
                        <span className={`bg-clip-text text-transparent ${theme === 'dark'
                            ? 'bg-gradient-to-b from-[#6ba3ff] to-[#4285F4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                            : 'bg-gradient-to-b from-[#4285F4] to-[#1a6fd9] drop-shadow-sm'
                            }`}>Google </span>
                        <span className={`bg-clip-text text-transparent ${theme === 'dark'
                            ? 'bg-gradient-to-b from-[#ff6b6b] to-[#DB4437] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                            : 'bg-gradient-to-b from-[#EA4335] to-[#c5331d] drop-shadow-sm'
                            }`}>Developer </span>
                        <span className={`bg-clip-text text-transparent ${theme === 'dark'
                            ? 'bg-gradient-to-b from-[#4dd17e] to-[#0F9D58] drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]'
                            : 'bg-gradient-to-b from-[#34A853] to-[#2d8e47] drop-shadow-sm'
                            }`}>Groups</span>
                    </h2>
                    <p className={`text-lg sm:text-xl md:text-2xl mb-4 font-medium tracking-wide ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                        }`}>
                        BVRIT Narsapur
                    </p>
                    <p className={`mt-2 sm:mt-4 md:mt-6 text-base sm:text-lg md:text-xl font-semibold tracking-wider ${theme === 'dark' ? 'text-gdg-yellow animate-pulse' : 'text-[#FBBC04]'
                        }`}>
                        Learn • Connect • Grow
                    </p>
                    <div className="flex justify-center mt-10 sm:mt-12 md:mt-14">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}
                        >
                            Know More
                        </HoverBorderGradient>
                    </div>
                </section>

                {/* Gradient transition to footer */}
                <div className={`w-full h-32 ${theme === 'dark'
                    ? 'bg-gradient-to-b from-transparent to-black'
                    : 'bg-gradient-to-b from-transparent to-[#F0F4F8]'
                    }`}></div>
            </div>
        </div>
    );
}

export default Home;
