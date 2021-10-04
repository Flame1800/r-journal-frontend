import {Divider, Paper, Tab, Tabs} from "@material-ui/core";
import {Typography} from "@mui/material";
import {Comment} from "../Comment";
import React from "react";
import {AddCommentForm} from "../AddCommentForm";
import data from '../../data'

export const PostComments: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState(0)
    const comments = data.comments[activeTab === 0 ? 'popular' : 'new']

    return (
        <Paper elevation={0} className="mt-40 p-30">
            <div className="container">
                <Typography className="mb-20" variant="h6">
                    42 комментария
                </Typography>
                <Tabs onChange={(_, newValue) => setActiveTab(newValue)} className="mt-20" value={activeTab} indicatorColor="primary" textColor="primary">
                    <Tab label="Популярные" />
                    <Tab label="По порядку" />
                </Tabs>
                <Divider />
                <AddCommentForm />
                <div className="mb-20" />
                {
                    comments.map(obj => <Comment user={obj.user} text={obj.text} createdAt={obj.createdAt} key={obj.id} />)
                }
            </div>
        </Paper>
    )
}