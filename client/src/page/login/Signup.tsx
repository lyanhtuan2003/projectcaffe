import { useForm } from "react-hook-form"
import { Iacount } from "../../interface/AllApiInterface"
interface Iprops {
    onadd: Function
}
const Signup = (props: Iprops) => {
    const { register, handleSubmit } = useForm()
    const onhandelSingup = (value: Iacount) => {
        console.log(value)
        props.onadd(value)
    }
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <form className="lg:w-[500px] sm:w-[350px] w-[270px] m-auto" onSubmit={handleSubmit(onhandelSingup)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Họ và Tên
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 lg:w-[500px] sm:w-[350px] w-[270px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="name"
                            type="text"
                            {...register("name")}
                            placeholder="Nhập họ và tên của bạn"
                        />
                    </div>

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

                    <div className="mb-8">
                        <label className="block text-gray-700 font-bold mb-2" >
                            Xác nhận mật khẩu
                        </label>
                        <input
                            className="bg-gray-200 appearance-none border-2 lg:w-[500px] sm:w-[350px] w-[270px] border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-500"
                            id="confirm-password"
                            type="password"
                            {...register("confirmPassword")}
                            placeholder="Nhập lại mật khẩu của bạn"
                        />
                    </div>

                    <div className="text-center">
                        <button
                            className="bg-brown-500 hover:bg-brown-700 text-white bg-yellow-800 font-bold py-2 px-4 rounded shadow-md focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1"
                            type="submit"
                        >
                            Đăng ký
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Signup