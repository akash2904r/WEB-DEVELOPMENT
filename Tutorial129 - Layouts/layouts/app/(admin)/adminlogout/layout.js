import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Facebook - Connect with friends and the world around you",
  description: "Facebook is a social utility that connects people with others",
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      
      <footer className='text-center text-2xl font-bold bg-gray-400'>
        Logout Footer
      </footer>
    </>
  );
}