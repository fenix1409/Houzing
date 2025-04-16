import { Advanced, City, Price, SearchIcon, Status } from "../../../assets/Icons"

const HeaderBottom = () => {
    const data = [
        {
            id: 1,
            icon: <City />,
            title: "Enter an address, neighborhood, city, or ZIP code"
        },
        {
            id: 2,
            icon: <Status />,
            title: "Status"
        },
        {
            id: 3,
            icon: <Price />,
            title: "Price"
        },
        {
            id: 4,
            icon: <Advanced />,
            title: "Advanced"
        }
    ]
    return (
        <div className="px-[130px] py-[10px] flex items-center justify-between">
            <div className="flex items-center gap-[20px]">
                {data.map(item => (
                    <div key={item.id} className={`${item.id === 1 && "w-[527px] pl-[16px]"} ${item.id === 2 && "w-[131px] pl-[29px]"} ${item.id === 4 && "w-[131px] pl-[16px]"} ${item.id === 3 && "w-[131px] pl-[34px]"} py-[12px] flex items-center gap-[8px] border-[1px] border-[#E6E9EC] rounded-[2px]`}>
                        <div>{item.icon}</div>
                        <h3 className="text-[14px] leading-[20px] text-[#0D263B]">{item.title}</h3>
                    </div>
                ))}
            </div>
            <button className="w-[180px] py-[14px] text-[14px] leading-[20px] text-white bg-[#0061DF] flex items-center gap-[8px] rounded-[2px] pl-[54px]">
                <SearchIcon />
                Search</button>
        </div>
    )
}

export default HeaderBottom