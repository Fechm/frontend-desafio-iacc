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

const fetchStudents = async (id: string) => {
    //Obtiene los estudiantes del curso correspondiente
    //Se setea cache: 'no-cache' para el SSR
    const res = await fetch(`http://localhost:3000/cursos/${id}/estudiantes`, { cache: 'no-cache' });
    if (!res.ok) throw new Error('Estudiantes no encontrados...');
    return res.json();
}


export async function ListOfStudents({ params: { id } }: CursoProps) {
    try {
        const students = await fetchStudents(id);
        return (
            <Table<Student> columns={columns} dataSource={students} />
        );
    } catch (error: any) {
        return (<div>{error.message}</div>);
    }
}