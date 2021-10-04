import React from "react";
import {Input} from "@mui/material";
import styles from './WriteForm.module.scss';
import dynamic from "next/dynamic";
import {Button} from "@material-ui/core";
import {TextsmsOutlined as MessageIcon} from "@material-ui/icons";

const Editor = dynamic(() => import('../Editor').then(m => m.Editor), {ssr: false})

interface WriteFromProps {
    title?: string;
}

export const WriteFrom: React.FC<WriteFromProps> = ({ title }) => {

    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder="Заголовок" defaultValue={title} />
            <div className={styles.editor}>
                <Editor />
            </div>
            <Button style={{ height: 42 }} variant="contained" color="primary">
                Опубликовать
            </Button>
        </div>
    )
}
