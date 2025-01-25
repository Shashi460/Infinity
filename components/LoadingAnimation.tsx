"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  className?: string
}

export function LoadingAnimation({ className = "" }: LoadingSpinnerProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="relative w-16 h-16"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.span
            key={index}
            className="absolute inset-0 rounded-full border-4 border-transparent"
            style={{
              borderTopColor: index === 0 ? "#FF6B6B" : index === 1 ? "#4ECDC4" : "#45B7D1",
              borderRightColor: index === 0 ? "#FF6B6B" : index === 1 ? "#4ECDC4" : "#45B7D1",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}


export default LoadingAnimation ;

/*
my app structure 

app
  -->(auth)
  -->(root)
  
 */