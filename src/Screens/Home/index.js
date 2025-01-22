import React from 'react'
import { Header } from '../../component/Layout/Header';
import Breadcrumb from '../../component/Breadcrumb';
import CategoryLayout from '../../component/CategoryLayout';

const Home = () => {
    return (
        <>
            <Header />
            <Breadcrumb />
            <CategoryLayout />
        </>
    )
}

export default Home;