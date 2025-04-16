import { Link } from "react-router-dom"
import { Logo } from "../../../assets/Icons"
import Popover from "../Popover"

const Header = () => {
    const list = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Properties",
            path: "/properties"
        },
        {
            id: 3,
            title: "Contacts",
            path: "/contacts"
        }
    ]
    return (
        <header className="px-[130px] py-[14px] flex items-center justify-between bg-[#0D263B]">
            <Link to={'/'}><Logo /></Link>
            <div className="flex items-center gap-[64px]">
                {list.map(item => (
                    <Link to={item.path} key={item.id} className="text-[16px] leading-[24px] text-white">{item.title}</Link>
                ))}
            </div>
            <Link to={"/contacts"}><Popover /></Link>
        </header>
    )
}

export default Header