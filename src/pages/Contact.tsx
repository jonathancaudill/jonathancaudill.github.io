import { Mail, Phone, MessageSquare, Github, Linkedin } from "lucide-react";
import GradientBackground from "@/components/GradientBackground";

const Contact = () => {
  return (
    <div className="relative min-h-screen">
      <GradientBackground />
      <div className="relative">
        <div className="container max-w-5xl mx-auto px-4 py-12 pt-24">
          <h1 className="text-4xl font-bold mb-8 text-white">Contact</h1>
          <p className="text-gray-300 mb-12 text-lg">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="max-w-2xl space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-white" />
                <h2 className="text-xl font-semibold text-white">Email</h2>
              </div>
              <a 
                href="mailto:jonathan.s.caudill@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                jonathan.s.caudill@gmail.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-white" />
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-white">Phone</h2>
              </div>
              <a 
                href="sms:+6627011626" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                (662) 701-1626
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Github className="w-6 h-6 text-white" />
                <h2 className="text-xl font-semibold text-white">GitHub</h2>
              </div>
              <a 
                href="https://github.com/jonathancaudill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                github.com/jonathancaudill
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6">
              <div className="flex items-center gap-4 mb-4">
                <Linkedin className="w-6 h-6 text-white" />
                <h2 className="text-xl font-semibold text-white">LinkedIn</h2>
              </div>
              <a 
                href="https://linkedin.com/in/jonathancaudill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                linkedin.com/in/jonathancaudill
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
