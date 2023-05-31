
import { Button, Form, Input, Select, message, Upload } from 'antd';
import { Icategory, Iproduct } from '../../interface/AllApiInterface';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';




interface Iprops {
    onAdd: Function,
    getcate: Icategory[]
}


const AddProductAdmin = (props: Iprops) => {
    const [messageApi, contextHolder] = message.useMessage();
    const { Option } = Select;
    const navigate = useNavigate()
    const [category, setCategory] = useState<Icategory[]>([])
    useEffect(() => {
        setCategory(props.getcate)
    }, [props.getcate])
    const onFinish = async (values: Iproduct) => {
        messageApi.open({
            type: 'success',
            content: 'Thêm sản phẩm thành công',
        });


        props.onAdd({ ...values, thumbnail: '' })
        setTimeout(() => {
            navigate("/admin/product")
        }, 1000)
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };



    const [fileList, setFileList] = useState<UploadFile[]>([
        {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    return (
        <>
            {contextHolder}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        fileList={fileList}
                        onChange={onChange}
                        onPreview={onPreview}
                    >
                        {fileList.length < 5 && '+ Upload'}
                    </Upload>
                </Form.Item>


                <Form.Item
                    label="describe"
                    name="describe"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="categoryId"
                    name="categoryId"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Select>
                        {category.map((item) => (
                            <Option value={item._id}>{item.name}</Option>
                        ))}
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button htmlType="submit">
                        add product
                    </Button>
                </Form.Item>
            </Form></>
    )
}

export default AddProductAdmin