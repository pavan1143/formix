import React from 'react'
import { useLocation,useNavigate } from 'react-router'
export { useLocation } from 'react-router-dom'



export default function Header() {
    const location = useLocation();
    const navigate = useNavigate()
    console.log (location.pathname);
    function pathMathRote(route){
      if(route === location.pathname){
        return true
      }
      
    }
  return (
    <div className='bd=white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6pxl max-auto' >
            <div>
                <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/Free-Farm-Logo-Vector-Agriculture-Logo-Template-Download-1536x864.jpg" alt="logo"  className='h-20 cursor-pointer' onClick={()=>navigate("/") }/>
            </div>
            <div>
              <ul className='flex space-x-20'>
                <li className={'cursor-pointer py-3 text-sm font-semibold text-gray-400   border-b-[3px] border-b-transparent ${pathMathRoute("/) && text-black  border-b-red-500 }'} 
                onClick={()=>navigate("/")}
                >Home</li>
                <li className={'cursor-pointer py-3 text-sm font-semibold text-gray-400   border-b-[3px] border-b-transparent ${pathMathRoute("/Offers) && text-black border-b-red-500}'}
                 onClick={()=>navigate("/Offers")}
                 >Offers</li>
                <li className={'cursor-pointer py-3 text-sm font-semibold text-gray-400   border-b-[3px] border-b-transparent ${pathMathRoute("/Sign in) && text-black  border-b-red-500 }'}
                onClick={()=>navigate("/Sign-in")}
                >Sign in</li>  
              </ul>
            </div>
        </header>
    </div>
  )
}
