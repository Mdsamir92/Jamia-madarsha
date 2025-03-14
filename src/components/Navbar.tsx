import { Menu, BookOpen, Home, Video,Image,User } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Jamia Samir-E-milat</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#home" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </a>
              <a href="#courses" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
                <Image className="h-4 w-4 mr-1" />
                Gallery
              </a>
              <a href="#videos" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
                <Video className="h-4 w-4 mr-1" />
                Videos
              </a>

              <a href="#about-us" className="px-3 py-2 rounded-md hover:bg-emerald-700 flex items-center">
                <User className="h-4 w-4 mr-1" />
                About Us
              </a>
             
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md hover:bg-emerald-700">Home</a>
            <a href="#courses" className="block px-3 py-2 rounded-md hover:bg-emerald-700">Courses</a>
            <a href="#videos" className="block px-3 py-2 rounded-md hover:bg-emerald-700">Videos</a>
          </div>
        </div>
      )}
    </nav>
  );
}