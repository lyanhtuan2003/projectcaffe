import { useForm } from "react-hook-form"
import { signin } from "../../api/Acount"
import { Link, useNavigate } from "react-router-dom"
import { message } from 'antd';
import { Iacount } from "../../interface/AllApiInterface";
import { useEffect, useState } from "react"
interface Iprops {
    acount: Iacount[]
}
const Signin = (props: Iprops) => {
    const [auth, setAuth] = useState<Iacount[]>([]);
    const [messageApi, contextHolder] = message.useMessage();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const key = 'updatable';

    useEffect(() => {
        setAuth(props.acount);
    }, [props.acount]);

    const openMessage = (type: any) => {
        if (type === "loading") {
            messageApi.open({
                key,
                type: 'loading',
                content: 'Loading...',
            });
        } else if (type === "success") {
            messageApi.open({
                key,
                type: 'success',
                content: 'Bạn đã đăng nhập thành công',
                duration: 2,
            });
        }
    };

    const onhandellogin = async (data: any) => {
        const found = auth.find((account) => account.email === data.email);
        console.log(found)
        if (!found) {
            messageApi.open({ key, type: "error", content: "Tài khoản không tồn tại" });
        } else {
            openMessage('success')
            // openMessage('loading'); //hiển thị thông báo cho người dùng biết đang đăng nhập
            const { data: user } = await signin(data);
            localStorage.setItem('user', JSON.stringify(user));
            setTimeout(() => {
                navigate('/');
                //hiển thị thông báo đăng nhập thành công
            }, 2000);
        }
    };

    return (
        <div>
            {contextHolder}
            <div className="bg-white rounded-lg shadow-lg p-4">
                <form className="lg:w-[500px] sm:w-[350px] w-[270px] m-auto" onSubmit={handleSubmit(onhandellogin)}>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Địa chỉ Email
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 lg:w-[500px] sm:w-[350px] w-[270px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="email"
                            type="email"
                            {...register("email")}
                            placeholder="Nhập địa chỉ email của bạn"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Mật khẩu
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 lg:w-[500px] sm:w-[350px] w-[270px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="password"
                            type="password"
                            {...register("password")}
                            placeholder="Nhập mật khẩu của bạn"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className="bg-brown-500 hover:bg-brown-700 text-white bg-yellow-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
                            type="submit"
                            onClick={openMessage}
                        >
                            Đăng nhập
                        </button>
                        <Link to={"/fogot"}>
                            <a className="px-[10px]">quên mật khẩu ?</a>
                        </Link>

                    </div>
                </form>
            </div>

        </div>
    )
}

export default Signin