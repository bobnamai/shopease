import { useState } from 'react';
import ShopMain from './../components/ShopMain/ShopMain';
import SideNav from './../components/SideNav/SideNav';

function Shop({ products }) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            <section id="shop">
                <SideNav onSearchChange={setSearchQuery} />
                <ShopMain products={products} searchQuery={searchQuery} />
            </section>
        </>
    )
}

export default Shop;
