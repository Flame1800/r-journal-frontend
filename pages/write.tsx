import React from 'react'
import {NextPage} from "next";
import {TextField} from "@mui/material";
import {MainLayout} from "../layouts/MainLayout";
import {WriteFrom} from "../components/WriteForm";

const WrtiePage: NextPage = () => {
    return (
        <MainLayout hideComments hideMenu className="main-layout-white">
            <WriteFrom />
        </MainLayout>
    )
}

export default WrtiePage