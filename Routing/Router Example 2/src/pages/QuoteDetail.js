import React, { useEffect } from 'react';
import { Link, useParams, Route, useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

const QuoteDetail = () => {

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);
    const params = useParams();
    // const quoteId = params.quoteId; //OR
    const { quoteId } = params;
    const match = useRouteMatch();
    // console.log(match);//{path: '/quotes/:quoteId', url: '/quotes/q2', isExact: false, params: {…}}isExact: false params: {quoteId: 'q2'}path: "/quotes/:quoteId"url: "/quotes/q2"[[Prototype]]: Object

    useEffect(() => {
        sendRequest(quoteId);
    }, [quoteId, sendRequest]);

    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }

    if (error) {
        return <p className='centered focused'>{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No Quote found!</p>
    }

    return (
        <React.Fragment>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
            <Route path={`/quotes/${quoteId}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </React.Fragment>
    )
};

export default QuoteDetail;