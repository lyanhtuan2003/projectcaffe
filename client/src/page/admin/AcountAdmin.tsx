
import { useState, useEffect } from 'react';
import { Iacount } from '../../interface/AllApiInterface';
import { Input, Pagination } from 'antd';
import moment from 'moment';

const { Search } = Input;
const onSearch = (value: string) => console.log(value)
interface Iprops {
    acount: Iacount[]
}
const AcountAdmin = (props: Iprops) => {
    const [data, setData] = useState<Iacount[]>([])
    console.log(data)
    useEffect(() => {
        setData(props.acount)
    }, [props.acount])
    return (
        <>

            <div className="overflow-x-auto">
                <h1 className="font-bold text-center text-[20px]">Quản lý Tài Khoản</h1>


                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    style={{ width: 300 }}
                    onSearch={onSearch}
                />
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-center"  >
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                Name
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                email
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                password
                            </th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                time
                            </th>
                            <th className="px-4 py-2"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {data.map((item, ind) => {
                            const formattedDate = moment(item.createdAt).format('YYYY-MM-DD HH:mm:ss');
                            return (
                                <tr key={ind + 1}>
                                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {item.name}
                                    </td>

                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.email}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{item.password}</td>
                                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{formattedDate}</td>
                                    <td className="px-4 py-2">

                                        <div className="flex space-x-4">
                                            <button
                                                className="group relative inline-block overflow-hidden border border-red-600 px-8 py-3 focus:outline-none focus:ring"

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
                            )
                        })}
                    </tbody>
                </table>
                <Pagination defaultCurrent={1} total={50} pageSize={3} />
            </div>
        </>
    )
}

export default AcountAdmin