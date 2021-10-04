import {Paper, Button, IconButton, Avatar} from "@material-ui/core";
import React from "react";
import Link from 'next/link';
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@mui/icons-material/SmsOutlined';
import NotificationIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import styles from './Header.module.scss'
import {AuthDialog} from "../AuthDialog";
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';

export const Header: React.FC = () => {
    const [authVisible, setAuthVisible] = React.useState(false);

    const openAuthDialog = () => {
        setAuthVisible(true);
    };

    const closeAuthDialog = () => {
        setAuthVisible(false);
    };

    return (
        <Paper classes={{ root: styles.root }} elevation={0}>
            <div className='d-flex align-center'>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a>
                        <img height={35} className="mr-20" src="/static/img/logo.svg" alt="Logo" />
                    </a>
                </Link>
                <div className={styles.searchBlock}>
                    <SearchIcon />
                    <input placeholder="Поиск" />
                </div>
                    <Link href="/write">
                        <a>
                            <Button variant="contained" className={styles.penButton}>
                                Новая запись
                            </Button>
                        </a>
                    </Link>
            </div>
            <div className='d-flex align-center'>
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                {/*<Link href="/profile/1">*/}
                {/*    <a className="d-flex align-center">*/}
                {/*        <Avatar*/}
                {/*            className={styles.avatar}*/}
                {/*            alt="Avatar"*/}
                {/*            src="https://leonardo.osnova.io/8cd402c1-9ff5-5f70-8bbd-41cd5b89e524/-/scale_crop/108x108/-/format/webp/"*/}
                {/*        />*/}
                {/*        <ArrowBottom />*/}
                {/*    </a>*/}
                {/*</Link>*/}
                <div onClick={openAuthDialog} className={styles.loginButton}>
                    <AccountIcon />
                    Войти
                </div>
            </div>
            {authVisible && (<AuthDialog onClose={closeAuthDialog} visible={authVisible} />)}
        </Paper>
    )
}