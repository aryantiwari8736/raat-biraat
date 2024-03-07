
const Card2 = ({itemImageLink,itemName ,itemPrice}) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
    <div className="px-4 py-2">
        <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{itemName}</h1>
    </div>

    <img className="object-cover w-full h-48 mt-2" src={itemImageLink} alt="NIKE AIR"/>

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">₹ {itemPrice}</h1>
        <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Order Now</button>
    </div>
</div>
  )
}

export default Card2