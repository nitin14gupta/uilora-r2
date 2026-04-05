"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  onClick,
  href,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Premium, clean base styles
  const baseStyles =
    "relative inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 overflow-hidden rounded-full disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer outline-none active:scale-[0.98] uppercase tracking-[0.2em] text-[10px]";

  // Updated Variants with the new Brand Color #5227FF
  const variants = {
    primary: "bg-[#5227FF] text-white shadow-[0_0_20px_rgba(82,39,255,0.3)] border border-transparent hover:border-white/10 hover:shadow-[0_0_30px_rgba(82,39,255,0.5),inset_0_2px_0_rgba(255,255,255,0.4),inset_0_-2px_0_rgba(0,0,0,0.2)]",
    secondary: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(0,0,0,0.2)]",
    ghost: "text-zinc-400 hover:text-white hover:bg-white/5",
    outline: "bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40",
  };

  const sizes = {
    sm: "px-5 py-2",
    md: "px-8 py-4",
    lg: "px-10 py-5",
  };

  const buttonContent = (
    <>
      {/* Shimmer/Flash Effect on Hover */}
      <AnimatePresence>
        {isHovered && variant === "primary" && (
          <motion.div
            initial={{ left: "-100%", opacity: 0 }}
            animate={{ left: "100%", opacity: 0.5 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-center gap-2">
        {Icon && iconPosition === "left" && <Icon className="h-4 w-4" />}
        <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
        {Icon && iconPosition === "right" && <Icon className="h-4 w-4" />}
      </div>
    </>
  );

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}