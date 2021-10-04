import styles from './FullPost.module.scss'
import React from "react";
import {Button, Paper} from "@material-ui/core";
import {Typography} from "@mui/material";
import {PostActions} from "../PostActions";
import MessageIcon from '@mui/icons-material/TextsmsOutlined';
import UserAddIcon from '@mui/icons-material/PersonAddAlt1Outlined';

export const FullPost: React.FC = () => {
    return (
        <Paper elevation={0} className={styles.paper}>
            <div className="container">
                <Typography variant="h4" className={styles.title}>
                    Superjet, летящий из Волгограда в Москву,
                    подал сигнал бедствия. Возможно, в полете произошла разгерметизация
                </Typography>
                <div>
                    <Typography>
                        Самолет SSJ100, летящий из Волгограда в Москву, подал сигнал бедствия.
                        Об этом сообщает «Интерфакс» со ссылкой на информированный источник.
                    </Typography>
                    <Typography>
                        По данным источника, самолет резко снизился над Тамбовской областью.
                        Возможной причиной этого собеседник агентства назвал разгерметизацию.
                    </Typography>
                    <Typography>
                        Источник не уточнил названия авиакомпании и номера рейса. Судя по данным Flightradar24,
                        сейчас в небе находится один SSJ100, летящий в Москву из Волгограда.
                        Это — самолет «Аэрофлота», выполняющий рейс SU6416.
                        На момент написания заметки он уже пересек Тамбовскую область и подлетает к Москве.
                    </Typography>
                    <div style={{width: 250, marginLeft: -15 }}>
                        <PostActions />
                    </div>
                    <div className="d-flex justify-between align-center mt-30 mb-30">
                        <div className={styles.userInfo}>
                            <img
                                alt="Avatar"
                                src="https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/"
                            />
                            <b>Donnie Darko</b>
                            <span>+1685</span>
                        </div>
                        <div>
                            <Button variant="contained" className="mr-15">
                                <MessageIcon />
                            </Button>
                            <Button variant="contained">
                                <UserAddIcon />
                                <b className="ml-10">Подписаться</b>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Paper>
    )
}