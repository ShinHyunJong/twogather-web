import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1,
    },
  },
  out: {
    opacity: 0,
    y: 40,
    transition: {
      duration: 0.3,
    },
  },
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/animated-page-transitions-in-nextjs
 */
const Transition = ({ children }: { children: ReactNode }) => {
  const { asPath } = useRouter();

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <motion.div
        key={asPath}
        variants={variants}
        className="flex h-full w-full items-center justify-center"
        animate="in"
        initial="out"
        exit="out"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
