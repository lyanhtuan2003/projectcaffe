import image1 from "../img/anh4.jpg"
import image2 from "../img/anh2.jpg"
import image5 from "../img/anh5.jpg"
import image6 from "../img/anh6.jpg"
import image7 from "../img/anh7.jpg"
import image8 from "../img/anh8.jpg"
import image9 from "../img/anh9.jpg"
import image10 from "../img/anh10.jpg"
import image11 from "../img/anh11.jpg"
import image12 from "../img/anh12.jpg"
import image13 from "../img/anh13.jpg"
import images2 from "../img/banner1.jpg"
const HomePage = () => {
    return (
        <div>
            <header className='sm:mt-[10px] mt-[20px]'>
                <img src={images2} alt="" />
            </header>
            <div className="relative">
                <img src={image1} alt="" className="w-full h-[300px]" />
                <div className="absolute inset-0 flex items-center justify-center text-white text-center bg-black bg-opacity-50 px-4">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">CÀ PHÊ ABC – CÀ PHÊ NGUYÊN CHẤT 100%</h1>
                        <p className="text-sm mb-4">Sử dụng công thức gia truyền cho ra loại cà phê với hương vị tuyệt hảo</p>
                        <p className="text-center mb-[10px]">Cà phê ABC được thành lập năm 2015 – Sử dụng công thức rang xay và chế biến gia truyền – Mang đến cho người tiêu dùng một loại cà phê với hương vị và chất lượng tuyệt hảo.</p>
                        <button className="bg-yellow-800 text-white px-[10px] py-[5px] hover:bg-yellow-700">Đăng Ký tư vấn</button>
                    </div>
                </div>
            </div>
            <div className="relative justify-end items-center   ">
                <img src={image2} className="w-full lg:h-[700px] sm:h-[570px] h-[570px] " />
                <div className="absolute top-0 right-0 flex flex-col p-10 text-center">
                    <h1 className="lg:text-4xl sm:text-3xl text-[15px] font-bold text-white text-center">vì sao bạn phải chọn chúng tôi</h1>
                    <p className="text-white mt-5 lg:text-right lg:text-[16px] sm:text-[15px] text-[13px] text-center">Những lý do mà quý khách hàng hài lòng với dịch vụ mà chúng tôi mang lại</p>
                    <div className="flex m-auto mt-[20px]">
                        <img src={image5} alt="" className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] text-center" />
                        <p className="text-white lg:text-[20px] sm:text-[16px] text-[13px] px-[15px] lg:w-[350px] sm:w-[320px] w-[250px]">CÀ PHÊ NGUYÊN CHẤT 100% <br></br>
                            – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</p>
                    </div>
                    <div className="flex m-auto mt-[20px]">
                        <img src={image6} alt="" className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] text-center" />
                        <p className="text-white lg:text-[20px] sm:text-[16px] text-[13px] px-[15px] lg:w-[350px] sm:w-[320px] w-[250px]">CÀ PHÊ NGUYÊN CHẤT 100% <br></br>
                            – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</p>
                    </div>
                    <div className="flex m-auto mt-[20px]">
                        <img src={image7} alt="" className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] text-center" />
                        <p className="text-white lg:text-[20px] sm:text-[16px] text-[13px] px-[15px] lg:w-[350px] sm:w-[320px] w-[250px]">CÀ PHÊ NGUYÊN CHẤT 100% <br></br>
                            – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</p>
                    </div>
                    <div className="flex m-auto mt-[20px]">
                        <img src={image8} alt="" className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] text-center" />
                        <p className="text-white lg:text-[20px] sm:text-[16px] text-[13px] px-[15px] lg:w-[350px] sm:w-[320px] w-[250px]">CÀ PHÊ NGUYÊN CHẤT 100% <br></br>
                            – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</p>
                    </div>
                    <div className="flex m-auto mt-[20px]">
                        <img src={image9} alt="" className="lg:w-[60px] lg:h-[60px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] text-center" />
                        <p className="text-white lg:text-[20px] sm:text-[16px] text-[13px] px-[15px] lg:w-[350px] sm:w-[320px] w-[250px]">CÀ PHÊ NGUYÊN CHẤT 100% <br></br>
                            – RANG XAY THEO CÔNG THỨC GIA TRUYỀN</p>
                    </div>

                </div>
            </div>

            <div>
                <div className="relative">
                    <img src={image10} alt="" className="w-full lg:h-[440px] sm:h-[750px] h-[500px]" />
                    <div className="absolute top-0 w-[100%] m-auto">
                        <div className=" flex items-center justify-center">
                            <h2 className="text-white lg:text-[20px] sm:text-[17px] text-[15px] font-bold py-[10px]">Các sản phẩm của chúng tôi</h2>
                        </div>

                        <div className=" grid lg:grid-cols-4 gap-3 sm:grid-cols-3 grid-cols-2  m-auto">
                            <div className=" px-[20px]">
                                <img src={image11} alt="" className="w-[100%] m-autos" />
                                <div className="bg-white text-center">
                                    <b className="text-yellow-800">Cà phê Arabica</b>
                                    <p className="py-[5px] text-red-500">150,000 <sup>đ</sup></p>
                                </div>
                            </div>
                            <div className=" px-[20px]">
                                <img src={image11} alt="" className="w-[100%]" />
                                <div className="bg-white text-center">
                                    <b className="text-yellow-800">Cà phê Arabica</b>
                                    <p className="py-[5px] text-red-500">150,000 <sup>đ</sup></p>
                                </div>
                            </div>
                            <div className=" px-[20px]">
                                <img src={image11} alt="" className="w-[100%]" />
                                <div className="bg-white text-center">
                                    <b className="text-yellow-800">Cà phê Arabica</b>
                                    <p className="py-[5px] text-red-500">150,000 <sup>đ</sup></p>
                                </div>
                            </div>
                            <div className=" px-[20px]">
                                <img src={image11} alt="" className="w-[100%]" />
                                <div className="bg-white text-center">
                                    <b className="text-yellow-800">Cà phê Arabica</b>
                                    <p className="py-[5px] text-red-500">150,000 <sup>đ</sup></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className="relative">
                    <img src={image12} className="w-full lg:h-[400px] sm:h-[400px]" />
                    <div className="absolute top-[20%]">
                        <h1 className="lg:text-[18px] sm:text-[16px] text-[11px] font-bold p-[20px]">
                            NẾU BẠN TRAO CHÚNG TÔI NIỀM TIN
                            CHÚNG TÔI SẼ TRAO BẠN CHỮ TÍN
                        </h1>
                        <div className="text-center font-semibold">
                            <em >
                                HÃY GỌI CHÚNG TÔI
                            </em>
                        </div>

                        <div className="text-center">
                            <p>HOTLINE: <b className="text-red-600"> 0986.989.626</b>- <b className="text-red-600">0986.989.626</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-900 w-full lg:h-[80px] sm:h-[120px] h-[220px] p-[10px] lg:flex lg:justify-around sm:grid sm:grid-cols-2 grid grid-cols-1">
                <div className="flex justify-between w-[220px]">
                    <img src={image13} alt="" />
                    <p className="text-white">Giao hàng tận nhà <br />
                        Free ship nội thành
                    </p>
                </div>
                <div className="flex justify-between w-[220px]">
                    <img src={image13} alt="" />
                    <p className="text-white">Giao hàng tận nhà <br />
                        Free ship nội thành
                    </p>
                </div>
                <div className="flex justify-between w-[220px]">
                    <img src={image13} alt="" />
                    <p className="text-white">Giao hàng tận nhà <br />
                        Free ship nội thành
                    </p>
                </div>
                <div className="flex justify-between w-[220px]">
                    <img src={image13} alt="" />
                    <p className="text-white">Giao hàng tận nhà <br />
                        Free ship nội thành
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage