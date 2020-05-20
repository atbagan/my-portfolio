import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Serverless Attendance App",
        'image': {
            'desc': "example screenshot of attendance UI",
            'src': "images/attendance.png",
            'comment': ""
        }
    },

    {
        'title': "Portfolio Boilerplate",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/portfolio.png",
            'comment': ""
        }
    },

    {
        'title': "Othello TK",
        'image': {
            'desc': "example screenshot of othello code",
            'src': "images/othello.png",
            'comment': ""
        }
    },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
