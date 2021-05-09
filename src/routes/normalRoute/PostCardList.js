import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { GrowingSpinner } from '../../components/spinner/Spinner';
import { POSTS_LOADING_REQUEST } from '../../redux/types';

const PostCardList = () => {
    const { posts } = useSelector(state => state.post)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: POSTS_LOADING_REQUEST });
    }, [dispatch]);

    return (
        <>
            <Helmet title="Home" />
            <Row>
                {posts ? <h1>hihi</h1> : <h1><GrowingSpinner/></h1>}
            </Row>
        </>
    )
};

export default PostCardList;