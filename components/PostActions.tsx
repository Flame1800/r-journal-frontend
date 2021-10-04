import styles from "./Post/Post.module.scss";
import {IconButton} from "@material-ui/core";
import CommentIcon from "@mui/icons-material/ModeCommentOutlined";
import RepostIcon from "@mui/icons-material/RepeatOutlined";
import FavoriteIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareIcon from "@mui/icons-material/IosShareOutlined";
import React from "react";


export const PostActions: React.FC = () => {
    return (
        <ul className={styles.actions}>
            <li>
                <IconButton>
                    <CommentIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <RepostIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
            </li>
            <li>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </li>
        </ul>
    )
}