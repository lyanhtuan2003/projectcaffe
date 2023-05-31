import { Icategory, Iproduct } from "../interface/AllApiInterface"
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { message } from 'antd';

interface Iprops {
    product: Iproduct[],
    category: Icategory[]
}
const ProductPage = (props: Iprops) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';

    const openMessage = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key,
                type: 'success',
                content: 'thêm vào giỏ hàng thành công',
                duration: 2,
            });
        }, 1000);
    };
    const [data, setData] = useState<Iproduct[]>([])
    const [cate, setCate] = useState<Icategory[]>([])
    const [checkquery, setCheckquery] = useState<string>("")
    const [list, setList] = useState<Iproduct[]>([])
    const [selected, setSelected] = useState(false)
    const [cartItems, setCartItems] = useState<Iproduct[]>([]);
    const [menuOpen, setMenuOpen] = useState(true);
    useEffect(() => {
        setData(props.product)
        setCate(props.category)

    }, [props.product, props.category])

    const addToCart = (item: Iproduct) => {
        const exists = cartItems.some((cartItem: Iproduct) => cartItem._id === item._id);
        
        if (!exists) {
            setCartItems([...cartItems, item]);
        }
        openMessage()
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handelQuery = (id: string) => {
        setCheckquery(id);
        const currans = id === ""
            ? data
            : data.filter((item) => item.categoryId === id);
        setList(currans);
        setSelected(true)

        if (currans.length === 0) {
            message.info("Không có sản phẩm để hiển thị");
        }
    };
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (

        <div>
            {contextHolder}
            <section>
                <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                    <header className="text-center">
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                            Product Collection
                        </h2>

                        <p className="max-w-md mx-auto mt-4 text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                            praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                            natus?
                        </p>
                    </header>
                    <div className="sm:flex sm:justify-between">
                        <nav>
                            <div className="block sm:hidden sm:text-center">
                                <button
                                    onClick={toggleMenu}
                                    className="flex ml-[150px] px-3 py-2 border rounded  border-black text-black text-[25px] "
                                >
                                    <svg
                                        className="fill-current h-3 w-3"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Menu</title>
                                        {menuOpen ? (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M14.9602 5.29166L13.7083 4.04166L10 7.75L6.29166 4.04166L5.03977 5.29166L8.7481 9L5.03977 12.7083L6.29166 13.9583L10 10.25L13.7083 13.9583L14.9602 12.7083L11.2519 9L14.9602 5.29166Z"
                                            />
                                        ) : (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3 4.49997H17V5.99997H3V4.49997ZM3 8.99997H17V10.5H3V8.99997ZM17 13H3V14.5H17V13Z"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>


                            <div className={`${menuOpen ? '' : 'hidden'} w-[300px] m-auto block flex-grow bg-white sm:w-[300px] sm:bg-white sm:mt-8 border border-brown-300 rounded-lg overflow-hidden`}>
                                <h2 className="text-[18px] text-brown-700 font-medium text-center mt-[10px] px-4 py-2 bg-brown-50 border-b border-brown-300 rounded-t-lg">Danh mục sản phẩm</h2>
                                {cate.map((item, ind) => (
                                    <div className="text-center mt-[15px] " key={ind + 1}>
                                        <hr className="border-brown-300" />
                                        <p className="text-brown-700 py-[10px] cursor-pointer hover:bg-brown-700 hover:bg-yellow-800 hover:text-white transition-colors duration-300" onClick={() => handelQuery(item._id)}>{item.name}</p>
                                        <hr className="border-brown-300" />
                                    </div>
                                ))}
                            </div>


                        </nav>

                        <ul className="grid sm:ml-[20px]  gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">

                            {selected
                                ? (list.length > 0 ? (
                                    list.map((item, ind) => (
                                        <li key={ind + 1}>
                                            <li key={ind + 1}>
                                                <a className="block overflow-hidden group ">
                                                    <Link to={`/product/${item._id}`}>
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                                        />
                                                    </Link>


                                                    <div className="relative pt-3 bg-white">
                                                        <h3
                                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                                        >
                                                            {item.name}
                                                        </h3>

                                                        <p className="mt-2">
                                                            <span className="sr-only"> Regular Price </span>

                                                            <span className="tracking-wider text-gray-900"> £{item.price}GBP </span>
                                                        </p>
                                                        <button onClick={() => { addToCart(item); openMessage(); }} >Add to cart</button>
                                                    </div>
                                                </a>
                                            </li>
                                        </li>
                                    ))
                                ) : (
                                    <p>Không có sản phẩm để hiển thị</p>
                                ))
                                : (data.length > 0 ? (
                                    data.map((item, ind) => (
                                        <li key={ind + 1}>
                                            <li key={ind + 1}>
                                                <a className="block overflow-hidden group">
                                                    <Link to={`/product/${item._id}`}>
                                                        <img
                                                            src={item.image}
                                                            alt=""
                                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[350px]"
                                                        />
                                                    </Link>


                                                    <div className="relative pt-3 bg-white">
                                                        <h3
                                                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                                        >
                                                            {item.name}
                                                        </h3>

                                                        <p className="mt-2">
                                                            <span className="sr-only"> Regular Price </span>

                                                            <span className="tracking-wider text-gray-900"> £{item.price}GBP </span>
                                                        </p>
                                                        <button onClick={() => { addToCart(item); openMessage(); }} >Add to cart</button>
                                                    </div>
                                                </a>
                                            </li>
                                        </li>
                                    ))
                                ) : (
                                    <p>Không có sản phẩm để hiển thị</p>
                                ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductPage