import { useScroll, motion } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div style={{
      position: 'fixed',
      top: 0, left: 0,
      right: 0,
      height: '3px',
      zIndex: 200,
      scaleX: scrollYProgress,
      transformOrigin: 'left',
      background: 'linear-gradient(90deg, #4FCB0A, #A6FF52)',
      boxShadow: '0 0 10px rgba(120,245,27,0.6)',
    }} />
  )
}