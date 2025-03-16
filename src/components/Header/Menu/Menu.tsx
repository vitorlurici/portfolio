import { useEffect, useRef } from "react";
import "./Menu.scss";
import { CloseIcon } from "../../../assets/svg/CloseIcon";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SlideDownMenu = ({ isOpen, onClose }: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`slide-down-menu ${isOpen ? "open" : ""}`} ref={menuRef}>
      <div className="top-content">
        <div className="close-menu" onClick={onClose}>
          <span>CLOSE</span>
          <CloseIcon />
        </div>
      </div>
      <div className="menu-content">
        <span>MENU</span>
        <ul>
          <li>
            <h1>Projects</h1>
          </li>
          <li>
            <h1>About Me</h1>
          </li>
          <li>
            <h1>Contact</h1>
          </li>
          <li>
            <h1>Linkedin</h1>
          </li>
          <li>
            <h1>GitHub</h1>
          </li>
          <li>
            <h1>Instagram</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};
