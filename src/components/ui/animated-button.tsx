import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  showArrow?: boolean;
  href?: string;
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = 'default', showArrow = true, href, children, ...props }, ref) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    };

    const buttonClasses = cn(
      "group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ease-out",
      "hover:scale-105 active:scale-95",
      variant === 'default' 
        ? "bg-white text-gray-900 hover:bg-gray-100" 
        : "bg-transparent border border-white/20 text-white hover:bg-white/10",
      
      // Add size styling
      props.size === 'sm' && "h-9 px-3",
      props.size === 'lg' && "h-11 px-8",
      props.size === 'icon' && "h-10 w-10",
      !props.size || props.size === 'default' && "h-10 px-4 py-2",
      className
    );

    const glowStyle = {
      '--mouse-x': `${mousePosition.x}px`,
      '--mouse-y': `${mousePosition.y}px`,
    } as React.CSSProperties;

    const content = (
      <>
        {children}
        {showArrow && (
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" 
          />
        )}
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.15) 0%, transparent 80%)`,
            transform: `perspective(1000px) rotateX(calc((var(--mouse-y) - 50%) * 0.1deg)) rotateY(calc((var(--mouse-x) - 50%) * 0.1deg))`,
          }}
        />
      </>
    );

    if (href) {
      return (
        <Link 
          to={href} 
          className={buttonClasses}
          onMouseMove={handleMouseMove}
          style={glowStyle}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        onMouseMove={handleMouseMove}
        style={glowStyle}
        {...props}
      >
        {content}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton }; 