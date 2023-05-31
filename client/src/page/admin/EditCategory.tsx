import { Button, Form, Input } from 'antd';
import { Icategory } from '../../interface/AllApiInterface';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { message } from 'antd';
interface Iprops {
    onedit: Function
    category: Icategory[]
}
const EditCategory = (props: Iprops) => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState<Icategory>()
    useEffect(() => {
        const newData = props.category.find((item) => item._id == id)
        setData(newData)
    }, [])

    useEffect(() => {
        if (data) {
            setfiles(data)
        }
    }, [data])

    const [form] = Form.useForm()

    const setfiles = (data: Icategory) => {
        form.setFieldsValue({
            _id: data?._id,
            name: data?.name
        })
    }

    const onFinish = (values: Icategory) => {
        messageApi.success('bạn đã thêm danh mục thành công');
        const newForm = { ...data, ...values }
        console.log(newForm)
        props.onedit(newForm)
        setTimeout(() => {
            navigate("/admin/category");
        }, 1000)
    };

    return (
        <>

            {contextHolder}
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        update
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default EditCategory