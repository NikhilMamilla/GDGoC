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
                        className={`w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] -mb-12 sm:-mb-14 md:-mb-16 lg:-mb-20 object-contain ${
                            theme === 'dark'
                                ? 'drop-shadow-[0_8px_16px_rgba(66,133,244,0.4)]'
                                : 'drop-shadow-[0_8px_16px_rgba(66,133,244,0.3)]'
                        }`}
                    />

                    {/* Heading */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.45] mb-6">
                        <span className={`bg-clip-text text-transparent ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-[#6ba3ff] to-[#4285F4]'
                                : 'bg-gradient-to-b from-[#4285F4] to-[#1a6fd9]'
                        }`}>Google </span>
                        <span className={`bg-clip-text text-transparent ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-[#ff6b6b] to-[#DB4437]'
                                : 'bg-gradient-to-b from-[#EA4335] to-[#c5331d]'
                        }`}>Developer </span>
                        <span className={`bg-clip-text text-transparent ${
                            theme === 'dark'
                                ? 'bg-gradient-to-b from-[#4dd17e] to-[#0F9D58]'
                                : 'bg-gradient-to-b from-[#34A853] to-[#2d8e47]'
                        }`}>Groups</span>
                    </h2>

                    {/* Sub text */}
                    <p className={`text-lg sm:text-xl md:text-2xl mb-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-700'
                    }`}>
                        BVRIT Narsapur
                    </p>

                    <p className={`text-base sm:text-lg md:text-xl font-semibold ${
                        theme === 'dark' ? 'text-gdg-yellow animate-pulse' : 'text-[#FBBC04]'
                    }`}>
                        Learn • Connect • Grow
                    </p>

                    {/* CTA */}
                    <div className="mt-10">
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'}
                        >
                            Know More
                        </HoverBorderGradient>
                    </div>

                    {/* Team Section */}
                    <div className="mt-20 w-full flex flex-col items-center">
                        <h3
                            className={`mb-8 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide ${
                                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                            }`}
                        >
                            Our Team
                        </h3>
                        <img
                            src="/Team.jpg"
                            alt="GDG BVRIT Team"
                            className={`w-full max-w-4xl rounded-2xl object-cover transition-all duration-300
                            ${theme === 'dark'
                                ? 'shadow-[0_16px_40px_rgba(0,0,0,0.6)]'
                                : 'shadow-xl'
                            }`}
                        />
                    </div>

                </section>
            </div>
        </div>
    );
}

export default Home;
