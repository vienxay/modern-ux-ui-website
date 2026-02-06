export const codeExamples = {
    "App.jsx": `import Navbar from './components/Navbar.jsx';
        import Hero from './components/Hero.jsx';
        import Features from './components/Features.jsx';
        import Pricing from './components/Pricing.jsx';
        import Testimonials from './components/Testimonials.jsx';
        import Footer from './components/Footer.jsx';

        function App() {
        return <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            
            <Navbar/>
            <Hero/>
            <Features/>
            <Pricing/>
            <Testimonials/>
            <Footer/>
        </div>
        }

        export default App;`,

    "Hero.jsx": `@import "tailwindcss";
        @layer utilities {
        .animate-in {
            animation-fill-mode: both;
        }

        .slide-in-from-bottom {
            animation-name: slideInFromTop;
        }

        .duration-200 {
            animation-duration: 200ms;
        }
        }

        @keyframes slideInFromTop {
        from {
            opacity: 0;
            transform: translateX(-1rem);
        }

        to {
            opacity: 1;
            transform: translateX(0);
        }
        }`,

    "Navbar.jsx": `import { Menu, X } from 'lucide-react'
        import React, { useState } from 'react'

        function Navbar() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        return (
            <nav className='fixed top-0 w-full z-50 transition-all duration-300 bg-red-950/20 backdrop-blur-sm'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-14 sm:h-16 md:h-20'>
                <div className='flex items-center space-x-1 group cursor-pointer'>
                <div>
                    <img 
                        src='/dollar.png' 
                        alt='CodeFlow' 
                        className='w-6 h-6 sm:w-8 sm:h-8'
                    />
                    </div>
                    <span className='text-lg sm:text-xl md:text-2xl font-medium'>
                    <span className='text-white'>Code</span>
                    <span className='text-blue-400'>Flow</span>
                    </span>
                </div>

                {/* Nav Links */}
                <div className='hidden md:flex items-center space-x-6 lg:space-x-8'>
                    <a 
                    href='#features'
                    className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Features
                    </a>
                    <a 
                    href='#pricing'
                    className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Pricing
                    </a>
                    <a 
                    href='#testimonials'
                    className='text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Testimonials
                    </a>
                </div>

                <button className='md:hidden p-2 text-gray-300 hover:text-white'
                    onClick={() => setMobileMenuOpen((prev)=> !prev)}
                >
                    {mobileMenuOpen ? (
                    <X className='w-5 h-5 sm:w-6 sm:h-6'/>
                    ) : (
                        <Menu className='w-5 h-5 sm:w-6 sm:h-6'/>
                    )}
                </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className='md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top'>
                <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                    <a 
                    href='#features'
                    onClick={() => setMobileMenuOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Features
                    </a>
                    <a 
                    href='#pricing'
                    onClick={() => setMobileMenuOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Pricing
                    </a>
                    <a 
                    href='#testimonials'
                    onClick={() => setMobileMenuOpen(false)}
                    className='block text-gray-300 hover:text-white text-sm lg:text-base'
                    >
                    Testimonials
                    </a>
                </div>
                </div>
            )}
            </nav>
        )
        }

        export default Navbar`,
};

export const floatingCards = {
    "App.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completions",
        content: "AI-powered code suggestions in real-time",
    },
    "Hero.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "⚡",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically",
    },
    "Navbar.jsx": {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your projects",
    },
}