import SHOP_DATA from '../../shop-data.json'

import { useContext } from 'react';
import { ProductContext } from '../../context/productsContext';

const Shop = () => {
    const { products} = useContext(ProductContext)
    return (
        <div>
            {
                products.map((shop, i) => {
                    return (
                      <div key={i}>
                        <h1>{shop.name}</h1>
                        <img src={shop.imageUrl} alt={shop.name} />
                        <p>{shop.price}</p>
                      </div>
                    );
                })
            }
        </div>
    )
}

export default Shop;