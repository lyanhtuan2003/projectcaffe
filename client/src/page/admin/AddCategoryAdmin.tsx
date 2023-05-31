
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Icategory } from '../../interface/AllApiInterface';
interface Iprops {
    onaddcate: Function
}
const AddCategoryAdmin = (props: Iprops) => {
    const navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const onFinish = (values: Icategory) => {
        messageApi.success('bạn đã thêm danh mục thành công');
        props.onaddcate(values)
        setTimeout(() => {
            navigate("/admin/category");
        }, 1000)
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
                    <Button htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default AddCategoryAdmin