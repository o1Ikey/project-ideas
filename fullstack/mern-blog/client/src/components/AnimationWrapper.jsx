import { AnimatePresence, motion } from "framer-motion";

export const AnimationWrapper = ({
  children,
  className,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { opacity: 0 },
  ...rest
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className={className}
        initial={initial}
        animate={animate}
        transition={transition}
        {...rest}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
