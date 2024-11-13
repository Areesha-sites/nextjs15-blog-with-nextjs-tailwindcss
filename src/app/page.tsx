"use client";
import Header from "./components/Header";
import BlogContent from "./components/BlogContent";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import "./globals.css";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div>
        <Navbar />
        <Header />
        <BlogContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
