import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface cardProps {
    tier: string,
    price?: string,
    benefits?: string[]
}

export default function PricingCard({ cardProps }: { cardProps: cardProps }) {
    return (
        <motion.div

            className="w-full max-w-[350px] mx-auto h-[450px] bg-black rounded-[15px] flex flex-col cursor-pointer shadow-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
                scale: 1.03,
                y: -10,
                boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.4)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.98 }}

        >
            <div className="w-full h-16 border-b border-white bg-white rounded-tl-[15px] rounded-tr-[15px] flex items-center justify-center">
                <h1 className="text-2xl font-semibold">{cardProps.tier}</h1>
            </div>

            <div className="w-full h-[90px] flex items-center border-b border-gray-700">
                <h1 className="text-5xl md:text-6xl text-white ml-4">${cardProps.price}</h1>
            </div>

            <div className="w-full flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
                {cardProps.benefits && cardProps.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2">
                        <Check className="text-green-500 size-4 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-white leading-relaxed">
                            {b}
                        </p>
                    </div>
                ))}
            </div>

            <div className="w-full flex items-center justify-center p-4">
                <button className="w-full max-w-[200px] h-[50px] rounded-lg border-2 bg-white hover:bg-gray-100 transition-colors font-semibold">
                    Get Started
                </button>
            </div>
        </motion.div>
    )
}