import {Paper, Typography, IconButton} from "@material-ui/core";
import Image from 'next/image';
import styles from './Post.module.scss'
import Link from 'next/link'
import React from "react";
import CommentIcon from '@mui/icons-material/ModeCommentOutlined';
import RepostIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ShareIcon from '@mui/icons-material/IosShareOutlined';
import {PostActions} from "../PostActions";

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
            <Link href="/news/test-123" >
                <a>
                    <Typography variant="h5" className={styles.title}>
                        Кот прилёг отдохнуть в английском парке миниатюр — и стал героем
                        шуток и фотожаб о «гигантском пушистом захватчике»
                    </Typography>
                </a>
            </Link>
            <Typography className="mt-10 mb-15">
                Пока одни не могли соотнести размеры животного и окружения,
                другие начали создавать апокалиптические сюжеты с котом в главной роли.
            </Typography>
            <Image
                width="600"
                height="500"
                src="https://leonardo.osnova.io/a21ca5a9-d95b-560d-9a6f-9fa87eff7fcd/-/preview/800/-/format/webp/"
            />
            <PostActions />
        </Paper>
    )
}
