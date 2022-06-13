import React, { useState } from 'react';

const ContentBox = () => {
    const [fav,setFav]  = useState('🤍');
    const fncFav = () => {
        setFav((fav ==='🤍') ? '❤️'  : '🤍') 
        //'SoSo' #ddd <->'Love'  #f00
    }
    
    return (
        <div id="contentBox">
            <h2>상품리스트</h2>
            <div className='pd-card'>
                <div className='img'>상품이미지</div>
                <dl>
                    <dt>아이템1</dt>
                    <dd>아이템설명 아이템설명 </dd>
                </dl>
                <div className='btn-area'>
                    <button type='button' onClick={fncFav}>좋아요</button>
                    <span>{fav}</span>
                </div>
            </div>
        </div>
    );
};

export default ContentBox;