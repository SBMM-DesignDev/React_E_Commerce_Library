import React from 'react';
import Landing from '../components/Landing.jsx';
import Highlights from '../components/Highlights.jsx';
import Featured from '../components/Featured.jsx';
import Discounted from '../components/Discounted.jsx';
import Explore from '../components/Explore.jsx';

const Home = ( { books } ) => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured books={books} />
            <Discounted books={books} />
            <Explore />
        </>
    )
}

export default Home;