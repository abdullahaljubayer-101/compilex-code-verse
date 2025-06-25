import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaderboard from "./pages/Leaderboard";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";
import Practice from "./pages/Practice";
import Learn from "./pages/Learn";
import ProblemDetail from "./pages/ProblemDetail";
import TutorialDetail from "./pages/TutorialDetail";
import CourseDetail from "./pages/CourseDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Settings from "./pages/Settings";
import CreateProblem from "./pages/CreateProblem";
import CreateTutorial from "./pages/CreateTutorial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

// Company Portal Imports
import CompanySignIn from "./company/pages/CompanySignIn";
import CompanySignUp from "./company/pages/CompanySignUp";
import CompanyDashboard from "./company/pages/CompanyDashboard";
import CreateJob from "./company/pages/CreateJob";
import ApplicantList from "./company/pages/ApplicantList";
import ApplicantDetail from "./company/pages/ApplicantDetail";
import CompanyProfile from "./company/pages/CompanyProfile";

// Admin Portal Imports
import AdminSignIn from "./admin/pages/AdminSignIn";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminProblems from "./admin/pages/AdminProblems";
import AdminProblemDetail from "./admin/pages/AdminProblemDetail";
import AdminCreateProblem from "./admin/pages/AdminCreateProblem";
import AdminApproveProblems from "./admin/pages/AdminApproveProblems";
import AdminCourses from "./admin/pages/AdminCourses";
import AdminCreateCourse from "./admin/pages/AdminCreateCourse";
import AdminTutorials from "./admin/pages/AdminTutorials";
import AdminJobs from "./admin/pages/AdminJobs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/problem/:id" element={<ProblemDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/tutorial/:id" element={<TutorialDetail />} />
          <Route path="/learn/course/:id" element={<CourseDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/create-problem" element={<CreateProblem />} />
          <Route path="/create-tutorial" element={<CreateTutorial />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Company Portal Routes */}
          <Route path="/company/signin" element={<CompanySignIn />} />
          <Route path="/company/signup" element={<CompanySignUp />} />
          <Route path="/company/dashboard" element={<CompanyDashboard />} />
          <Route path="/company/create-job" element={<CreateJob />} />
          <Route path="/company/jobs" element={<CompanyDashboard />} />
          <Route path="/company/applicants" element={<ApplicantList />} />
          <Route path="/company/applicants/:id" element={<ApplicantDetail />} />
          <Route path="/company/profile" element={<CompanyProfile />} />
          
          {/* Admin Portal Routes */}
          <Route path="/admin/signin" element={<AdminSignIn />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          
          {/* Problem Management */}
          <Route path="/admin/problems" element={<AdminProblems />} />
          <Route path="/admin/problems/:id" element={<AdminProblemDetail />} />
          <Route path="/admin/problems/:id/edit" element={<AdminProblemDetail />} />
          <Route path="/admin/problems/create" element={<AdminCreateProblem />} />
          <Route path="/admin/problems/approve" element={<AdminApproveProblems />} />
          
          {/* Course Management */}
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/courses/:id" element={<AdminCourses />} />
          <Route path="/admin/courses/:id/edit" element={<AdminCourses />} />
          <Route path="/admin/courses/create" element={<AdminCreateCourse />} />
          
          {/* Tutorial Management */}
          <Route path="/admin/tutorials" element={<AdminTutorials />} />
          <Route path="/admin/tutorials/:id" element={<AdminTutorials />} />
          <Route path="/admin/tutorials/:id/edit" element={<AdminTutorials />} />
          <Route path="/admin/tutorials/create" element={<AdminTutorials />} />
          <Route path="/admin/tutorials/approve" element={<AdminTutorials />} />
          
          {/* Job Management */}
          <Route path="/admin/jobs" element={<AdminJobs />} />
          <Route path="/admin/jobs/:id" element={<AdminJobs />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
