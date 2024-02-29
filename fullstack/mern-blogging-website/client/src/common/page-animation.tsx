import { AnimatePresence, motion } from 'framer-motion'

type IAnimationWrapper = {
    children:JSX.Element;
    keyValue:'sign-in' | 'sign-up';
    initial?:{opacity:number};
    animate?:{opacity:number};
    transition?:{duration:number};
}

export const AnimationWrapper = ({
  children,
  keyValue,
  initial = { opacity:0 },
  animate = { opacity:1 },
  transition = { duration:1 }
}:IAnimationWrapper) => {
  return (
    <AnimatePresence>
      <motion.div
        key={keyValue}
        initial={initial}
        animate={animate}
        transition={transition}
      >{children}
      </motion.div>
    </AnimatePresence>
  )
}