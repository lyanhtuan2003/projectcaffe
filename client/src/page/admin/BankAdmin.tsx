import React, { useEffect, useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Space } from 'antd';
import { Ibank } from '../../interface/AllApiInterface';

const columns: ColumnsType<Ibank> = [
    {
        title: 'namebank',
        dataIndex: 'namebank',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'numberbank',
        dataIndex: 'numberbank',
    },
    {
        title: 'username',
        dataIndex: 'username',
    },
    {
        title: 'content',
        dataIndex: 'content',
    },
    {
        title: 'action',
        render: (_, record) => (
            <Space wrap>
                <Button type="primary" danger>
                    Primary
                </Button>
                <Button type="primary" >
                    Primary
                </Button>
            </Space>
        )
    }
];


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Ibank[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },

};

interface Iprops {
    bank: Ibank[]
}
const BankAdmin = (props: Iprops) => {
    const [data, setData] = useState<Ibank[]>([])
    useEffect(() => {
        setData(props.bank)
    }, [props.bank])
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    return (
        <div>
            <Radio.Group
                onChange={({ target: { value } }) => {
                    setSelectionType(value);
                }}
                value={selectionType}
            >
                <Radio value="checkbox">Checkbox</Radio>
                <Radio value="radio">radio</Radio>
            </Radio.Group>

            <Divider />

            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    )
}

export default BankAdmin