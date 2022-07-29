export default function ItemNavbar({to, name}){
    return (
        <>
            <li>
                <a href={to}>{name}</a>
            </li>
        </>
    )
}