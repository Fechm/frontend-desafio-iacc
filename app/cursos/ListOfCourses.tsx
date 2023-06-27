'use client'

import { Table, theme, ThemeConfig } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link'

const { getDesignToken } = theme;

const config: ThemeConfig = {
    token: {
        colorPrimary: '#7ab51b',
    },
};

const globalToken = getDesignToken(config);

interface Course {
    id: string,
    name: string,
    code: string,
    year: number,
    semester: number,
    campus: string,
}

const columns: ColumnsType<Course> = [
    {
        key: 'name',
        title: 'Nombre',
        dataIndex: 'name',
        render: (name, record) => <Link href={`/cursos/${record.id}`} style={{ color: globalToken.colorPrimary }}>{name}</Link>,
    },
    {
        key: 'code',
        title: 'Codigo',
        dataIndex: 'code',
    },
    {
        key: 'year',
        title: 'Año',
        dataIndex: 'year',
    },
    {
        key: 'semester',
        title: 'Semestre',
        dataIndex: 'semester',
    },
    {
        key: 'campus',
        title: 'Sede',
        dataIndex: 'campus',
    },
]

const fetchCourses = async () => {
    return fetch('http://localhost:3000/cursos', { cache: 'no-cache' })
        .then(res => res.json())
}

export async function ListOfCourses() {
    const courses = await fetchCourses();
    const hasError = courses.some((course: any) => course.hasOwnProperty('statusCode'));
    if (!hasError) {
        return (
            <Table<Course> columns={columns} dataSource={courses} />
        );
    } else {
        return (courses.message);
    }
}
