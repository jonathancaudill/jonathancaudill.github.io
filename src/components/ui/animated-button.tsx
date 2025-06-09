import { ButtonHTMLAttributes, forwardRef } from "react";
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

    const content = (
      <>
        {children}
        {showArrow && (
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:scale-110" 
          />
        )}
      </>
    );

    if (href) {
      return (
        <Link to={href} className={buttonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClasses}
        {...props}
      >
        {content}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton }; 