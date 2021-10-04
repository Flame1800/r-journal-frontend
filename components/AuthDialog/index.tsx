import React from "react";
import {Dialog, DialogContent, DialogContentText, Typography} from "@mui/material";
import {Button, TextField} from "@material-ui/core";
import styles from "./AuthDialog.module.scss"
import ArrowIcon from '@mui/icons-material/KeyboardArrowLeft';
import {MainFrom} from "./forms/Main";
import {RegisterFrom} from "./forms/Register";
import {LoginFrom} from "./forms/Login";

interface AuthDialogProps {
    onClose: () => void;
    visible: boolean;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
    const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main')

    return (
        <Dialog
            open={visible}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
        >
            <DialogContent>
                <DialogContentText>
                    <div className={styles.content}>
                        <Typography className={styles.title}>
                            {formType === 'main' ? "Вход в TJ" : (
                                <p onClick={() => setFormType('main')} className={styles.backTitle}>
                                    <ArrowIcon />
                                    К авторизации
                                </p>
                            )}
                        </Typography>
                        {formType === 'main' && <MainFrom onOpenLogin={() => setFormType('login')} />}
                        {formType === 'login' && <LoginFrom onOpenRegister={() => setFormType('register')} />}
                        {formType === 'register' && <RegisterFrom onOpenLogin={() => setFormType('login')} onOpenRegister={() => setFormType('register')} />}
                    </div>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}