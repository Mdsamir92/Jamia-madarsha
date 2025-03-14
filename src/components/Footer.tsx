import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <BookOpen className="h-8 w-8" />
          <span className="ml-2 text-xl font-bold">Jamia Samir-E-Milat</span>
        </div>
        <div className="mt-8 text-center">
          <p className="text-base">
            Dedicated to spreading Islamic knowledge and understanding
          </p>
          <p className="mt-4 text-sm">
            © {new Date().getFullYear()} Jamia Samir-E-Milat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}