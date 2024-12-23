import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursor) {
        const x = e.clientX - 25;
        const y = e.pageY - 25;
        cursor.setAttribute('style', `top: ${y}px; left: ${x}px;`);
      }
    };

    const handleClick = () => {
      cursor?.classList.add('cursor--expand');
      setTimeout(() => {
        cursor?.classList.remove('cursor--expand');
      }, 500);
    };

    // Add event listeners to the document
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="cursor"></div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;