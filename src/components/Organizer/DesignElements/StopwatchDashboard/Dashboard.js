import React from 'react';
import './Dashboard.scss'

import {format} from 'date-fns'
import 'animate.css';
import cx from 'classnames'

const Dashboard = (props) => {
    const {results} = props;

    const liElements = results.map((element, index) => {
        return <li className={cx('animate__animated', 'animate__backInLeft')} key={index}>{format(element, 'HH : mm : ss')}</li>
    })

    const sectionStyle = cx('resultsDashboard', 'animate__animated', 'animate__backInDown')
    

    return (
        <section className={sectionStyle}>
            <h1>Results</h1>
            <ol>
                {liElements}
            </ol>
        </section>
    );
}

export default Dashboard;
