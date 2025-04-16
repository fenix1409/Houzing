import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import { Contact } from "../../assets/Icons"

export default function Popover() {
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className="relative" ref={menuRef}>
            <button onClick={() => setOpen(!open)} className="p-4 cursor-pointer text-white w-full flex justify-center"><Contact /></button>

            {open && (
                <div className="absolute w-[177px] top-16 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-md px-6 py-4 space-y-2 z-50">
                    <Link to="/profile" className="block text-black hover:font-semibold transition">My profile</Link>
                    <Link to="/properties" className="block text-black hover:font-semibold transition">My Properties</Link>
                    <Link to="/favourites" className="block text-black hover:font-semibold transition">Favourites</Link>
                </div>
            )}
        </div>
    );
}