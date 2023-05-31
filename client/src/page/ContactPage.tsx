
const ContactPage = () => {
    return (
        <>
            <div className="grid lg:flex lg:justify-around sm:grid-cols-2 grid-cols-1 py-[30px]">
                <div >
                    <h1>LIÊN HỆ</h1>
                    <h2>CÔNG TY TNHH CAFFE ABC</h2>
                    <p>Địa chỉ : Cầu Giấy - Hà Nội</p>
                    <p>Điện thoại: 0986.989.626 – 0986.989.626</p>
                    <p>Website: http://capheabc.com.vn</p>
                    <p>Fanpage: https://fb.com/cfabc</p>
                </div>
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.159578692099!2d105.723392792923!3d21.03108965959265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b9739f199f%3A0xc810aaa208b3e02e!2sBTEC%20FPT%20International%20College%20(Hanoi)!5e0!3m2!1sen!2s!4v1684054579121!5m2!1sen!2s" className="lg:w-[600px] lg:h-[350px] sm:w-[370px] h-[290px]" loading="lazy"></iframe>
                </div>
            </div>
        </>
    )
}

export default ContactPage