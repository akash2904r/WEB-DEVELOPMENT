import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin | Facebook - Connect with friends and the world around you",
  description: "Admin - Facebook is a social utility that connects people with others",
};

export default function AdminLayout({ children }) {
  return (
    <>
      <nav className='flex justify-between items-center text-lg px-2 py-1 bg-gray-600'>
        <div className='text-2xl font-bold'>Admin</div>
        <ul className='flex gap-6'>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      
      {children}
    </>
  );
}
