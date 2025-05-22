
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [wordsPerMin, setWordsPerMin] = useState(0);
  const [charsPerMin, setCharsPerMin] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const startTyping = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    setText("");
    setIsTyping(true);
    setTimeLeft(60);
    setWordsPerMin(0);
    setCharsPerMin(0);
    setAccuracy(100);
    
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
    
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          setIsTyping(false);
          calculateResults();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const calculateResults = () => {
    const words = text.trim().split(/\s+/).filter(word => word !== "").length;
    const chars = text.length;
    
    setWordsPerMin(words);
    setCharsPerMin(chars);
    
    toast({
      title: "Time's up!",
      description: `You typed ${words} words (${chars} characters)`,
    });
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-center text-gray-300 text-lg mb-2 uppercase tracking-wider">Typing Speed Test</h2>
        <h1 className="text-center text-white text-6xl font-bold mb-12">Notes, Revisited</h1>

        <div className="flex justify-center mb-12 gap-16">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="rounded-full border-4 border-yellow-400 w-32 h-32 flex items-center justify-center">
                <div>
                  <div className="text-white text-5xl font-bold">{timeLeft}</div>
                  <div className="text-gray-400 text-sm">seconds</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-white text-5xl font-bold">{wordsPerMin}</div>
            <div className="text-gray-400">words/min</div>
          </div>

          <div className="text-center">
            <div className="text-white text-5xl font-bold">{charsPerMin}</div>
            <div className="text-gray-400">chars/min</div>
          </div>

          <div className="text-center">
            <div className="text-white text-5xl font-bold">{accuracy}</div>
            <div className="text-gray-400">% accuracy</div>
          </div>
        </div>

        <div className="text-center mb-6">
          <Button
            onClick={startTyping}
            disabled={isTyping}
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2 text-lg"
          >
            Start typing
          </Button>
        </div>

        <div className="bg-gray-700/50 p-8 rounded-lg shadow-xl backdrop-blur-sm">
          <Textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={!isTyping}
            placeholder={isTyping ? "" : "Text will appear here when you start typing..."}
            className="h-40 bg-transparent border-none text-white text-xl focus-visible:ring-0 resize-none"
          />
          
          {!isTyping && (
            <div className="text-gray-300 mt-2 text-xl">
              {text ? 
                "Great job! Click 'Start typing' to try again." 
                : "Click 'Start typing' to begin the test."}
            </div>
          )}
          
          {isTyping && (
            <div className="text-gray-300 mt-2 text-xl">
              cover strong act plane land long
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
