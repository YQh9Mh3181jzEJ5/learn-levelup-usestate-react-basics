import React, { useState, useRef, useEffect } from "react";
import { Menu } from "lucide-react";
import { RulesList } from "./RuleList";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="p-4 mb-4 flex justify-between items-center relative">
      <h1 className="text-2xl font-bold">ポケモン風？カウントアップ</h1>
      <div ref={menuRef}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <Menu size={24} />
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-72 bg-gray-800 rounded shadow-lg z-10">
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">ルール</h2>
              <RulesList />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
