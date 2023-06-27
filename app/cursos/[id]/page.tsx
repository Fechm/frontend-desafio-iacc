'use client'

import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

interface CursoProps {
    params: { id: string },
}

interface Student {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    age: string,
    address: string,
}

const columns: ColumnsType<Student> = [
    {
        key: 'firstname',
        title: 'Nombre',
        dataIndex: 'firstname',
    },
    {
        key: 'lastname',
        title: 'Apellido',
        dataIndex: 'lastname',
    },
    {
        key: 'email',
        title: 'Email',
        dataIndex: 'email',
    },
    {
        key: 'age',
        title: 'Edad',
        dataIndex: 'age',
    },
    {
        key: 'address',
        title: 'Dirección',
        dataIndex: 'address',
    },
]

export default async function Curso({ params: { id } }: CursoProps) {
    //Obtiene los estudiantes del curso correspondiente
    //Se setea cache: 'no-cache' para el SSR
    const students = await fetch(`http://localhost:3000/cursos/${id}/estudiantes`, { cache: 'no-cache' })
        .then(res => res.json());


    const hasError = students.some((student: any) => student.hasOwnProperty('statusCode'));
    if (!hasError) {
        return (
            <Table<Student> columns={columns} dataSource={students} />
        );
    } else {
        return (students.message);
    }
}