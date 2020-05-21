import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Serverless Attendance App",
        'href': "https://www.youtube.com/watch?v=3lUbfWdTlAw",
        'desc': "Serverless location based attendance tracker. Built to be robust and scalable to an entire University.",
        'image': {
            'desc': "example screenshot of attendance UI",
            'src': "images/attendance.png",
            'comment': ""
        }
    },

    {
        'title': "Portfolio",
        'href': "https://github.com/atbagan/my-portfolio",
        'desc': "Professional portfolio. Implemented with react.js and serverless aws architecture",
        'image': {
            'desc': "A Serverless Portfolio",
            'src': "images/portfolio.png",
            'comment': ""
        }
    },

    {
        'title': "Othello TK",
        'href': "https://github.com/atbagan/my-portfolio/blob/master/othelloTKabagan.py",
        'desc': "OOP version of Othello.  Implemented with Tkinter and Python",
        'image': {
            'desc': "example screenshot of othello code",
            'src': "images/othello.png",
            'comment': ""
        }
    },
]

ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
