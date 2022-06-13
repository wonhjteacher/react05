import React from 'react';
import ProductList from './ProductList';

function ProductTab(props) {
    return (
        <div className='product-tab'>
            <div className='tab-btn'>
                <button>브랜명</button>
            </div>
            <div className='tab-contents'>
                <ProductList />
            </div>
        </div>
    );
}

export default ProductTab;