import React from "react";
import {Menu, MenuItem, Typography} from "@mui/material";
import styles from './Comment.module.scss'
import {IconButton} from "@material-ui/core";
import {MoreHorizOutlined} from "@mui/icons-material";

interface CommentPostProps {
    user: {
        fullname: string;
        avatarUrl: string;
    };
    text: string;
    createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img
                    src={user.avatarUrl}
                    alt="Avatar"
                />
                <b>{user.fullname}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreHorizOutlined />
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                elevation={3}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    )
}