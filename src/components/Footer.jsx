import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100">
      <div className="container py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Pietro Maffessoni · Built with React + Tailwind
      </div>
    </footer>
  );
}
