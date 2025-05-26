
import React, { useState, useEffect, useRef } from "react";
import { Check, Loader2 } from "lucide-react";

const Stuck: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Focus on the textarea when the component mounts
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // Handle saving state
  useEffect(() => {
    if (note && !isSaved) {
      setIsSaving(true);
      setIsSaved(false);
      
      const timer = setTimeout(() => {
        setIsSaving(false);
        setIsSaved(true);
        
        // Reset the saved indicator after 3 seconds
        setTimeout(() => {
          setIsSaved(false);
        }, 3000);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, [note]);

  return (
    <div className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">MacOS Stickies, Reimagined.</h1>
      
      {/* Sticky Note Editor with smooth fade */}
      <div className="relative mb-32">
        <div className="bg-card rounded-xl shadow-lg p-6 border relative">
          <div className="flex justify-between items-center mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
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
            className="w-full bg-transparent border-none resize-none focus:outline-none focus:ring-0 min-h-[200px] font-sans text-foreground placeholder:text-muted-foreground/50"
            placeholder="start typing..."
            autoFocus
          />
        </div>
        {/* Smooth fade gradient at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-transparent via-30% via-background/20 via-60% via-background/60 via-80% to-background pointer-events-none"></div>
      </div>
      
      {/* Features section */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Beautiful, Minimal Design</h3>
            <p className="text-muted-foreground">
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
            <h3 className="text-2xl font-semibold mb-4">Auto-Saving</h3>
            <p className="text-muted-foreground">
              Never worry about losing your thoughts. Stuck automatically saves your notes
              as you type, with a subtle indicator to let you know your work is secure.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Ready When You Are</h3>
            <p className="text-muted-foreground">
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
  );
};

export default Stuck;
