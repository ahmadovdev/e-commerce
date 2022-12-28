
export default function SelectedNav() {
  return(
    <div className="selected-nav my-5 border-slate-300 border-b-2">
      <div className="selected-nav-items mb-5 flex justify-between">
      <select id="menu" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Groceries">Groceries</option>
      </select>
      <select id="menu-1" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Home & Kitchen">Home & Kitchen</option>
      </select>
      <select id="menu-2" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Fashion">Fashion</option>
      </select>
      <select id="menu-3" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Electronics">Electronics</option>
      </select>
      <select id="menu-4" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Beauty">Beauty</option>
      </select>
      <select id="menu-5" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Home Improvement">Home Improvement</option>
      </select>
      <select id="menu-6" className="outline-none bg-slate-100 rounded-2xl p-1 text-gray-700">
        <option value="Sports, Toys & Luggage">Sports, Toys & Luggage </option>
      </select>
      </div>
    </div>
  )
}

