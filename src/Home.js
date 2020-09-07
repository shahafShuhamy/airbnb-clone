import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home_section'>
                <Card
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title1"
                description="description"
                price="4$"/>
                <Card
                src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title2"
                description="description2"
                price="50$"/>
                <Card
                src="https://images.unsplash.com/photo-1552242718-c5360894aecd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title3"
                description="desc4"
                price="60$"></Card>
            </div>
            <div className='home_section'>
                <Card
                src="https://images.unsplash.com/photo-1544207240-42895ede7c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title5"
                description="desc5"
                price="400$"/>
                <Card
                src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title5.5"
                description="desc5.5"
                price="400$"/>
                <Card
                src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                title="title6"
                description="desc6"
                price="400$"/>
            </div>
        </div>
    )
}

export default Home
