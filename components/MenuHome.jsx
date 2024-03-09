
import { menuList } from '@/components/list'
import Card2 from './Card2'
const MenuHome = () => {
  return (
    <section className="bg-white max-w-screen-xl mx-auto dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Food Items</h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {menuList.map((item)=>{
              return(
              <Card2 key={item.id} itemPrice={item.price} itemName={item.name} itemImageLink={item.imageLink}/>
            )})}
           

        </div>
    </div>
</section>
  )
}

export default MenuHome
