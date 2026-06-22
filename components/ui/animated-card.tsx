"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export function AnimatedCard(props: React.ComponentProps<typeof Card>) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card {...props} />
    </motion.div>
  );
}
