import React from 'react';
import ProductItem from './ProductItem';

function ProductList(props) {
    return (
        <div className='tab-list'>
            <h2>브랜드이름</h2>
            <ul className='tab'>
                <ProductItem />
            </ul>
        </div>
    );
}

export default ProductList;