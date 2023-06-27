'use client'
import { useState } from 'react';
import Link from 'next/link'
import { Menu } from 'antd';

export function NavBar() {
    const [current, setCurrent] = useState('Home');
    const onClick = (e: any) => {
        setCurrent(e.key);
    }
    return (
        <header>
            <Menu onClick={onClick} mode='horizontal' selectedKeys={[current]}>
                <Menu.Item key="Home">
                    <Link href="/"> Home
                    </Link>
                </Menu.Item>
                <Menu.Item key="Cursos">
                    <Link href="/cursos"> Cursos
                    </Link>
                </Menu.Item>
            </Menu>
        </header >
    );
}