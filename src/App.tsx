import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import AllProjects from './pages/AllProjects';
import ProjectDetail from './pages/ProjectDetail';
import CopyrightSearch from './pages/CopyrightSearch';
import NotFound from "./pages/NotFound";
import { SocialProfileSchema } from "./components/SocialProfileSchema";
import { ThemeProvider } from "./hooks/useTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SocialProfileSchema />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/project/:projectId" element={<ProjectDetail />} />
            <Route path="/copyright-search" element={<CopyrightSearch />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
