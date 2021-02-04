import React from 'react';

function ArticleDetail(props) {
    const detail = props.detail
    return (
        <div className="container">
            {detail}
        </div>
    )
}


export default ArticleDetail