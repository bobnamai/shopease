import ShopMain from './../components/ShopMain/ShopMain';
import SideNav from './../components/SideNav/SideNav';

function Shop({ products }) {

    return (
        <>
            <section id="shop">
                <SideNav />
                <ShopMain products={products} />
            </section>
        </>
    )
}

export default Shop;
