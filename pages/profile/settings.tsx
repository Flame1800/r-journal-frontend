import { MainLayout } from '../../layouts/MainLayout';
import {Button, Divider, Paper, TextField, Typography} from "@material-ui/core";

export default function Settings() {
    return (
        <MainLayout hideComments>
            <Paper className="p-20" elevation={0}>
                <Typography variant="h6">
                    Основные настройки
                </Typography>
                <Divider className="mb-30 mt-20"/>
                <form>
                    <TextField fullWidth className="mb-15" size='small' required label="Никнейм" variant='outlined' />
                    <TextField fullWidth className="mb-15" size='small' required label="Эл. почта" variant='outlined' />
                    <TextField fullWidth  size='small' required label="Пароль" variant='outlined' />
                    <Divider className="mb-20 mt-30"/>
                    <Button color="primary" variant="contained">Сохранить изменения</Button>
                </form>
            </Paper>
        </MainLayout>
    )
}
