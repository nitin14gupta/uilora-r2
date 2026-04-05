"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Button from "./button";

export default function ComponentNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="space-y-8"
      >
        <div className="space-y-3">
          <h1 className="text-4xl font-display font-extrabold text-white tracking-tight">
            Component not found
          </h1>
          <p className="text-zinc-400 max-w-sm mx-auto text-lg">
            The component you're looking for doesn't exist or has been moved to
            a new home.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button
            href="/get-started/components"
            variant="secondary"
            icon={ArrowLeft}
            iconPosition="left"
            className="rounded-full px-8 py-2.5 text-sm border border-zinc-800 hover:border-zinc-700 transition-colors shadow-sm"
          >
            Back to components
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
