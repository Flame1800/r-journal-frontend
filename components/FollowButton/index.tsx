import React from "react";
import styles from './FollowButton.module.scss'
import {Button} from "@material-ui/core";
import PlusIcon from "@mui/icons-material/Add";
import CheckIcon from '@mui/icons-material/Check';

export const FollowButton: React.FC = () => {
    const [followed, setFollowed] = React.useState()

    return (
        <Button onClick={() => setFollowed(!followed)} variant="contained" style={{ minWidth: 30,
            width: 40, height: 30 }}>
            {followed ? <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }}/> : <PlusIcon />}
        </Button>
    )
}