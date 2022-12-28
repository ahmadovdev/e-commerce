
export default function Header() {

  return(
    <div className="header flex justify-between items-center h-20 border-slate-300 border-b-2">
      <div className="brand">
       <span className="logo-img text-2xl">
       <i className="fa-sharp fa-solid fa-cart-plus text-yellow-500"></i>
       </span>
       <span className="logo-name text-2xl font-semibold">
        ZonMarket
       </span>
      </div>
      <div className="search-panel static">
      <span className="search-icon text-xl text-blue-500 absolute top-6 ml-2 ">
       <i className="fa-solid fa-magnifying-glass"></i> 
      </span>
      <input className="bg-slate-100 h-11 w-96 rounded-xl outline-none pl-9" type="text" placeholder="Search essentials" />
      </div>
      <div className="registration">
        <span className="icon-user text-blue-500">
         <i class="fa-solid fa-user"></i>
        </span>
        <span className="signup text-lg font-medium text-gray-700">
          Sign up
        </span>
        <span className="signin text-lg font-medium text-gray-700">
          Sign in
        </span>
      </div>
      <div className="icon-market">
        <span className="card-icon text-xl">
        <i class="fa-sharp fa-solid fa-cart-plus text-yellow-500"></i>
        </span>
        <span className="cart-text text-lg font-medium">
          Card
        </span>
      </div>
    </div>
  )
}