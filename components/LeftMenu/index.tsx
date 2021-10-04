import {Button} from "@material-ui/core";
import styles from './LeftMenu.module.scss'
import React from "react";
import FireIcon from '@mui/icons-material/WhatshotOutlined';
import MessageIcon from '@mui/icons-material/SmsOutlined';
import RatingIcon from '@mui/icons-material/TrendingUpSharp';
import Link from 'next/link'
import ListIcon from '@mui/icons-material/FormatListBulletedOutlined';
import {useRouter} from "next/router";

const menu = [
    { text: 'Лента', icon: <FireIcon />, path: '/' },
    { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
    { text: 'Рейтинг RJ', icon: <RatingIcon />, path: '/rating' },
    { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];


export const LeftMenu: React.FC = () => {
    const router = useRouter();



    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <a>
                                <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                                    {obj.icon}
                                    {obj.text}
                                </Button>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    )
}
