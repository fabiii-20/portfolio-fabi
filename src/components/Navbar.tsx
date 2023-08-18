import { useState,useEffect, FunctionComponent } from "react"
import { useRouter } from "next/router"
import Link from "next/link"

const NavItem:FunctionComponent<{activeItem: string
name: string
setActiveItem: Function
route : string
}> = ({activeItem,setActiveItem,name,route})=>{
    return(
        activeItem !== name ? (
            <Link href={route}>
                
                <span onClick={()=> setActiveItem(name)} className="hover:text-green-500">{name}</span>
                
            </Link>
        ) : null
    )
}

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname} = useRouter()
    useEffect(()=> {
        if (pathname=== '/')setActiveItem('About')
        if (pathname=== '/projects')setActiveItem('Projects')
        if (pathname=== '/resume')setActiveItem('Resume')}, [])
  return (
    <div className=" flex justify-between px-5 py-3 my-3">
       <span className=" font-bold text-green-500 text-xl font-sans border-b-4 border-green-500 ">{activeItem}</span>
       <div className="flex space-x-5 text-lg font-sans font-semibold">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="About" route="/"/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Projects" route="/projects"/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name="Resume" route="/resume"/>
        </div> 
    </div>
  )
}
