
import { useState, useEffect } from 'react';
import { Iproduct } from '../../interface/AllApiInterface';
import { Input, message, Modal } from 'antd';
const { Search } = Input;

interface Iprops {
    product: Iproduct[]
    ondelete: Function
}
const ProductAdmin = (props: Iprops) => {
    const [data, setData] = useState<Iproduct[]>([])
    const [check, setCheck] = useState<string>("")

    useEffect(() => {
        setData(props.product)
    }, [props.product])

    const handeldelete = (id: string) => {
        Modal.confirm({
            title: 'Confirm',
            content: 'bạn có muốn xoá sản phẩm không?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                props.ondelete(id);
                message.success('Item deleted successfully.');
            },
            onCancel() {
                message.error('Action canceled.');
            },
        });
    }

    const onSearch = (value: string) => {
        setCheck(value)
        if (!value) {
            setData(props.product)
        } else {
            const result = props.product.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            setData(result)
        }
    }
    return (
        <>
            <div className="overflow-x-auto">
                <h1 className="font-bold text-center text-[20px]">Danh sách sản phẩm</h1>
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    style={{ width: 300 }}
                    onSearch={onSearch}
                />
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                image
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                price
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                describe
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {data.map((item, ind) => (
                            <tr key={ind + 1}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                    {item.name}
                                </td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700"><img src={item.image} alt="" className='w-[70px] m-auto' /></td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.price}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.describe}</td>
                                <td className="px-4 py-2">

                                    <div className="flex space-x-4">
                                        <button
                                            className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"
                                            onClick={() => handeldelete(item._id)}
                                        >
                                            <span
                                                className="absolute inset-x-0 top-0 h-[2px] bg-red-600 transition-all group-hover:h-full group-active:bg-red-500"
                                            ></span>

                                            <span
                                                className="relative text-sm font-medium text-red-600 transition-colors group-hover:text-white"
                                            >
                                                delete
                                            </span>
                                        </button>


                                        <button
                                            className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                                        >
                                            <span
                                                className="absolute inset-x-0 top-0 h-[2px] bg-indigo-600 transition-all group-hover:h-full group-active:bg-indigo-500"
                                            ></span>

                                            <span
                                                className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                            >
                                                update
                                            </span>
                                        </button>
                                    </div>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductAdmin