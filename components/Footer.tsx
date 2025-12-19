


export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t bg-black border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">


                    <div className="lg:col-span-2">
                        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 h-full hover:border-purple-500/30 transition-all duration-300">
                            <h2 className="text-white text-2xl lg:text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Disclaimer
                            </h2>
                            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                This tool provides AI-assisted suggestions for discovering related academic literature and does not guarantee accuracy, completeness, or acceptance by any academic institution. Users are responsible for reviewing, verifying, and properly citing all sources.
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col justify-center">
                        <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-base lg:text-lg">

                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#library" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-base lg:text-lg">

                                    Library
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-base lg:text-lg">

                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group text-base lg:text-lg">

                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="mt-8 pt-6 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm lg:text-base text-center sm:text-left">
                            © 2025 RRL Generator. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="#privacy" className="text-gray-400 hover:text-purple-400 text-sm lg:text-base transition-colors duration-200">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-400 hover:text-purple-400 text-sm lg:text-base transition-colors duration-200">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}