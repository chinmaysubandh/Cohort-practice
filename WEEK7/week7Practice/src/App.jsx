import React, { Suspense } from 'react'; // Only import React if not using Hooks directly in App
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// Import your components
import HomePage from './components/HomePage';

import { Navbar } from './components/Navbar';
const About = React.lazy(() => import('./components/About'));
const Settings = React.lazy(()=>import('./components/Settings'))

const Dashboard = React.lazy(()=>import('./components/Dashboard'))
const NotFound = React.lazy(()=>import('./components/NotFound'))
function App() {
 
  return (
    // 1. Wrap everything in BrowserRouter
    <div>
      {/* Outer container for overall app background and font */}
      <div className='bg-gray-950 min-h-screen text-white font-medium'>

        <Navbar />

        {/*
          Content area below Navbar.
          - pt-20: To push content below a fixed/sticky Navbar.
          - min-h-screen: To ensure content area takes at least full screen height.
                          Adjusted to 'h-[calc(100vh-80px)]' or similar if Navbar height is fixed
                          and you want remaining screen height for content.
          - bg-blue-100 dark:bg-gray-950: Main content background.
          - max-sm:px-4 sm:px-8: Responsive horizontal padding for content.
        */}
        <div className='pt-20 bg-blue-100 dark:bg-gray-950 min-h-screen'> {/* Removed grid centering */}

          {/*
            This div could be 'container' if you want all pages to be max-width centered.
            However, it's often better to apply container logic within individual page components
            like Dashboard if their layouts vary. For a basic setup, it's fine here.
          */}
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'> {/* Common container setup */}
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/dashboard' element={<Suspense fallback={"loading...."}><Dashboard /></Suspense>} />
              <Route path='/about' element={<About />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;