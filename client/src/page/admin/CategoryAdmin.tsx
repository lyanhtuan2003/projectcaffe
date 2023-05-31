import React, { useState } from 'react';
import { Divider, Radio, Table } from 'antd';
import type { ColumnGroupType, ColumnType } from 'antd/es/table';
import { Icategory } from './../../interface/AllApiInterface';
import { useEffect } from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const columns: (ColumnGroupType<Icategory> | ColumnType<Icategory>)[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: "action",
        render: (_, record) => (
            <Space >
                <Button type="primary" danger>
                    delete
                </Button>
                <Link to={`/admin/category/edit/${record._id}`}>
                    <Button type="primary" danger>
                        update
                    </Button>
                </Link>

            </Space>
        )
    }
];


// rowSelection object indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Icategory[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: Icategory) => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};

interface Iprops {
    category: Icategory[]
}
const CategoryAdmin = (props: Iprops) => {
    const [cate, setCate] = useState<Icategory[]>([])
    useEffect(() => {
        setCate(props.category)
    }, [props.category])
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
                dataSource={cate}
            />
        </div>
    )
}

export default CategoryAdmin