import { useState } from "react";
import { ImageCarousel } from "./components/ImageCarousel";
import { LoginForm } from "./components/LoginForm.tsx";
import { RegisterForm } from "./components/RegisterForm.tsx";

export type Pages = "login" | "register";

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<Pages>("login");

  const pages = {
    login: <LoginForm changePage={switchPage} />,
    register: <RegisterForm changePage={switchPage} />,
  };

  function switchPage(page: Pages) {
    setCurrentPage(page);
  }

  return (
    <main className="flex min-h-screen">
      {/* Left Side - Image Carousel */}
      <div className="hidden lg:block lg:w-1/2">
        <ImageCarousel />
      </div>

      {/* Right Side - Form */}
      <div className="flex w-full flex-col bg-background lg:w-1/2 items-center  ">
        {pages[currentPage]}
      </div>
    </main>
  );
}
