import { Check } from "lucide-react"
import { motion } from "motion/react"

interface cardProps {
    tier: string,
    price?: string,
    benefits?: string[]
}




export default function PricingCard({ cardProps }: { cardProps: cardProps }) {
    return <motion.div className="lg:w-[300px] md:w-[300px] md:max-w-[300px] w-[90%] lg:h-full  border bg-black rounded-[15px] flex-col flex cursor-pointer
  shadow-md"

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

        <div className="w-full h-16 border-b border-white bg-white  rounded-tl-[15px] rounded-tr-[15px]
                  flex items-center justify-center">
            <h1 className="text-[24px]">{cardProps.tier}</h1>
        </div>

        <div className="w-full border-white h-[75px] ">
            <h1 className="text-6xl text-white ml-3">${cardProps.price}</h1>
        </div>


        <div className="w-full lg:h-[45%] p-3 flex
        flex-col gap-2.5">
            {
                cardProps.benefits && cardProps.benefits.map((b, i) => (
                    <p className="text-[12px] text-white" key={i}>
                        {b}
                    </p>))
            }
        </div>

        <div className="w-full flex items-center justify-center  ">
            <button className="w-[170px] h-[60px] rounded border p-3 bg-white"

            >
                Get Started
            </button>
        </div>


    </motion.div>
}

