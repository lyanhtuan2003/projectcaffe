import { useEffect, useState } from 'react';
import { Iproduct } from '../interface/AllApiInterface';

function PayCart() {
    const [name, setName] = useState('');
    const [card, setCard] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [zip, setZip] = useState('');

    const [data, setData] = useState<Iproduct[]>([])

    const newData = JSON.parse(localStorage.getItem("cartItems")!)
    const totalPrice = data.reduce((accumulator, currentItem) => {
        const quantity = 1; // ví dụ số lượng sản phẩm là 1
        return accumulator + (currentItem.price * quantity);
    }, 0);
    useEffect(() => {
        setData(newData)
    }, [])

    console.log(data)
    function handleSubmit(event: any) {
        event.preventDefault();
        console.log('Name:', name);
        console.log('Card:', card);
        console.log('Expiry:', expiry);
        console.log('CVC:', cvc);
        console.log('Zip:', zip);
    }

    return (
        <section className="py-8 md:py-12 bg-gray-100">
            <div className="max-w-screen-xl mx-auto grid grid-cols-12 gap-6 px-4 sm:px-6 lg:px-8">
                <div className="col-span-12 md:col-span-8">
                    <div className="bg-white p-8 shadow-sm">
                        <div className="mb-6">
                            <h1 className="text-xl md:text-2xl font-medium text-gray-700 mb-2">Thông tin thanh toán</h1>
                            <p className="text-gray-500 text-sm">Vui lòng nhập thông tin thanh toán của bạn.</p>
                        </div>
                        <div className="mb-8">
                            {data.map(product => (
                                <div className="flex justify-between items-center py-2">
                                    <div className="flex-1">
                                        <p className="text-gray-600">{product.name}</p>
                                        <p className="text-sm text-gray-400">Giá: {product.price} 000 đồng</p>
                                    </div>
                                    <p className="text-gray-600">1</p>

                                </div>

                            ))}
                            <hr />
                            <b className='text-center text-red-600'>total: {totalPrice} 000 đồng</b>

                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 mb-6">
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2 block" htmlFor="name">
                                        Tên trên thẻ
                                    </label>
                                    <input
                                        className="w-full text-sm py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-sm font-medium text-gray-700 mb-2 block" htmlFor="card">
                                        Số thẻ tín dụng
                                    </label>
                                    <input
                                        className="w-full text-sm py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        type="text"
                                        name="card"
                                        id="card"
                                        value={card}
                                        onChange={e => setCard(e.target.value)}
                                        placeholder="**** **** **** ****"
                                    />
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 space-y-4 mb-6">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block" htmlFor="expiry">
                                        Ngày hết hạn
                                    </label>
                                    <input
                                        className="w-full text-sm py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        type="text"
                                        name="expiry"
                                        id="expiry"
                                        value={expiry}
                                        onChange={e => setExpiry(e.target.value)}
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block" htmlFor="cvc">
                                        CVC
                                    </label>
                                    <input
                                        className="w-full text-sm py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        type="text"
                                        name="cvc"
                                        id="cvc"
                                        value={cvc}
                                        onChange={e => setCvc(e.target.value)}
                                        placeholder="***"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block" htmlFor="zip">
                                        Mã bưu chính
                                    </label>
                                    <input
                                        className="w-full text-sm py-2 px-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        type="text"
                                        name="zip"
                                        id="zip"
                                        value={zip}
                                        onChange={e => setZip(e.target.value)}
                                        placeholder="12345"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-gray-600 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-4 bg-white p-8 shadow-md">
                    <h2 className="text-lg md:text-xl font-medium text-gray-700 mb-4">Thông tin chuyển khoản</h2>
                    <div className="mb-4">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500">Ngân hàng</dt>
                            <dd className="mt-1 text-sm text-gray-900">Ngân hàng TMCP Sài Gòn (SCB)</dd>
                        </dl>
                    </div>
                    <div className="mb-4">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500">Số tài khoản</dt>
                            <dd className="mt-1 text-sm text-gray-900">0123456789</dd>
                        </dl>
                    </div>
                    <div className="mb-4">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500">Chủ tài khoản</dt>
                            <dd className="mt-1 text-sm text-gray-900">Công ty TNHH Dụng Cụ Máy Tính</dd>
                        </dl>
                    </div>
                    <div className="mb-4">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500">Nội dung chuyển khoản</dt>
                            <dd className="mt-1 text-sm text-gray-900">Mua hàng tại TM Shop</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default PayCart;


