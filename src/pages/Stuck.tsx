import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";

const Stuck = () => {
  const [note, setNote] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus on the textarea when the component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Fixed gradient background */}
      <GradientBackground scrollProgress={scrollProgress} />

      {/* Content */}
      <div className="relative">
        <div className="container max-w-4xl mx-auto px-4 py-12 pt-64">
          <h1 className="text-7xl md:text-8xl font-black mb-8 text-center leading-tight text-white">
            <span className="block">MacOS Stickies,</span>
            <span className="block">Reimagined.</span>
          </h1>
          
          {/* Sticky Note Editor */}
          <div className="relative mb-32" style={{ marginTop: '25vh' }}>
            <div className="bg-white/20 backdrop-blur-xl rounded-xl shadow-lg p-6 border border-white/30">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  {isSaving && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  )}
                  {isSaved && (
                    <>
                      <Check className="h-4 w-4 text-green-500" />
                      <span>Saved</span>
                    </>
                  )}
                </div>
              </div>
              
              <textarea
                ref={textareaRef}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-transparent border-none resize-none focus:outline-none focus:ring-0 min-h-[400px] font-sans text-white placeholder:text-white/50"
                placeholder="start typing..."
                autoFocus
              />
            </div>
          </div>
          
          {/* Features section */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-white">Features</h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Beautiful, Minimal Design</h3>
                <p className="text-white/80">
                  Inspired by macOS aesthetics but reimagined for the modern web. Clean, 
                  focused, and distraction-free writing experience that adapts to your system's theme.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Image Placeholder</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 bg-muted rounded-lg p-4 h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Image Placeholder</p>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-semibold mb-4 text-white">Auto-Saving</h3>
                <p className="text-white/80">
                  Never worry about losing your thoughts. Stuck automatically saves your notes
                  as you type, with a subtle indicator to let you know your work is secure.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Ready When You Are</h3>
                <p className="text-white/80">
                  No need to click to start typing. As soon as you visit Stuck, 
                  you can immediately capture your thoughts without any friction.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4 h-48 flex items-center justify-center">
                <p className="text-muted-foreground">Image Placeholder</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stuck;
