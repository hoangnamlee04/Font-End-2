import Banner from '~/components/Banner'
//
import { Product } from '~/types/Product'
import { Link } from 'react-router-dom'

type Props = {
  products: Product[]
}
const Home = ({ products }: Props) => {
  return (
    <>
      <Banner />
      <h1 className='mt-10'>SẢN PHẨM BÁN CHẠY</h1>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {products.map((product) => (
          <div key={product.id} className='group'>
            <div className='item-product px-5 pt-[13px] pb-[26px] h-[317px] flex flex-col justify-between mt-10 transition-transform duration-300'>
              <Link to={`/shop/${product.id}`}>
                <img src={product.image} alt={product.title} className='w-[230px] h-[180px]' />
              </Link>

              <div className='info-product'>
                <Link to={`/shop/${product.id}`}>
                  <h3 className='color-text text-[20px]'>{product.title}</h3>
                </Link>

                <div className='price color-price flex items-center text-red-500 text-[20px]'>
                  <span>{product.price}</span> ₫
                </div>

                <div className='mt-4'>
                  <a href='#' className='hover:text-red-300 text-gray-700 font-bold rounded'>
                    Mua hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}{' '}
      </div>
    </>
  )
}

export default Home
