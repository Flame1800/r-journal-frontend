import { MainLayout } from '../layouts/MainLayout';
import {
    Button,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography
} from "@material-ui/core";
import PlusIcon from '@mui/icons-material/Add';
import {FollowButton} from "../components/FollowButton";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function Rating() {
    return (
        <MainLayout>
            <Paper elevation={0} className="pl-20 pt-20 pr-20 mb-20">
                <Typography
                    variant="h5"
                    style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 10 }}>
                    Рейтинг сообществ и блогов
                </Typography>
                <Typography style={{ fontSize: 15 }}>
                    Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из
                    рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
                </Typography>
                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                    <Tab label="Август" />
                    <Tab label="За 3 месяца" />
                    <Tab label="За все время" />
                </Tabs>
            </Paper>
            <Paper elevation={0} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Имя пользователя</TableCell>
                                <TableCell align="right">Рейтинг</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                       <span className="mr-15">1</span>Вася Пупкин
                                    </TableCell>
                                    <TableCell align="right">540</TableCell>
                                    <TableCell align="right">
                                        <FollowButton />
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
            </Paper>
        </MainLayout>
    )
}
