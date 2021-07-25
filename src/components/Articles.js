import React, { useState, useEffect } from 'react';

const Articles = (props) => {
    const { articles, sortBy } = props;

    const sortArticles = () => {
        return (sortBy === 'date') ? 
            articles.sort((a,b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime())
            :
            articles.sort((a,b) =>
                b.upvotes - a.upvotes)
    }

    const renderArticles = () => {
        return sortArticles().map(article => {
            const { title, upvotes, date } = article
            return (
                <tr data-testid="article" key="article-index">
                    <td data-testid="article-title">
                        {title}
                    </td>
                    <td data-testid="article-upvotes">
                        {upvotes}
                    </td>
                    <td data-testid="article-date">
                        {date}
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="card w-50 mx-auto">
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {renderArticles()}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;
