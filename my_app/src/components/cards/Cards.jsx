import React from 'react';
import Card from '../card/Card';
import StyleCards from './Cards.module.css';

function Cards() {
    const cars =  [
        {id:1, name:'Nike Dunk Low Retro Premiumke', price: 125, image:'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fcba15c3-280c-4ee2-8557-6af9cf93db95/dunk-low-retro-premium-mens-shoes-vp942B.png' },
        {id:2, name:'Nike Dunk Low', price: 125, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d0737-bd55-4b33-86f4-e2f92a11d3c8/dunk-low-mens-shoes-l12Bc1.png' },
        {id:3, name:'KD17', price: 150, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/358be493-4503-4468-bd3b-3141fa0b2ff4/kd17-basketball-shoes-Vw01bx.png' },
        {id:4, name:'Nike Pegasus 41', price: 140, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/63c4596a-ca9a-4a56-82f3-0387903ed5f1/pegasus-41-mens-road-running-shoes-7S90QB.png' },
        {id:5, name:'Nike Dunk Low Retro Premium', price: 125, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1862e226-312d-4f56-9ad8-c153fda12439/dunk-low-retro-premium-mens-shoes-ntThM8.png' },
        {id:6, name:'Nike Zoom Vomero 5', price: 160, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec1920b5-68d8-4f7e-9828-e4eff08046dd/zoom-vomero-5-mens-shoes-MgsTqZ.png' },
        {id:7, name:'Air Jordan 6 Retro "White/Black"', price: 200, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/air-jordan-6-retro-white-black-mens-shoes-Wk71GJ.png' },
        {id:8, name:'Air Jordan 1 Retro High OG', price: 180, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bab11a0e-6ccd-4b17-a3ec-db5eb94d5e8c/air-jordan-1-retro-high-og-mens-shoes-JHpxkn.png' },
        {id:9, name:'Nike Air Max Dn', price: 160, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c4246130-c7fd-4169-8382-c747e5d3aed8/air-max-dn-shoes-27XkSQ.png' },
        {id:10, name:'Nike Air VaporMax Plus', price: 210, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fbc7e2fc-e93b-4a0d-aa88-92c6bb961399/air-vapormax-plus-mens-shoes-nC0dzF.png' },
        {id:11, name:'Tatum 2 "Denim"', price: 125 , image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e91e92e2-912c-4dd6-8e54-435986beaef1/tatum-2-denim-basketball-shoes-8XGVH8.png' },
        {id:12, name:'Air Jordan 12 Retro "Taxi Flip"', price: 200, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1c3794e5-8963-4bb6-b411-86cf4ce502e6/air-jordan-12-retro-taxi-flip-mens-shoes-mmrpJt.png' },
        {id:13, name:'Jordan Roam', price: 60 , image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b5ab82c3-cd1e-48d2-b0bf-a601ae94f14a/jordan-roam-slides-0nD8Dq.png' },
        {id:14, name:'Jordan Post', price: 30, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/1d5f29c3-2b5d-4e65-894c-8781348e041b/jordan-post-mens-slides-018jB2.png' },
        {id:15, name:'Jordan Jumpman', price: 45, image:'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dbba41d9-03a8-402c-863e-80174c6f8d2d/jordan-jumpman-mens-slides-bPj6q5.png' },
    ];

    return (
        <div className={StyleCards.md}>
            {cars.map((car) =>
                <Card key={car.id} {...car} />
            )}
        </div>
    );
}

export default Cards;
