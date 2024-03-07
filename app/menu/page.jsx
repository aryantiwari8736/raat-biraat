
import Card from '@/components/Card'
import { menuList } from '@/components/list'

const page = () => {
  return (
    <section className="bg-white max-w-screen-xl mx-auto dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">our menu</h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {menuList.map((item)=>{
              return(
              <Card key={item.id} itemPrice={item.price} itemName={item.name} itemImageLink={item.imageLink}/>
            )})}
           

        </div>
    </div>
</section>
  )
}

export default page