import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "Serverless Attendance App",
        'href': "https://www.youtube.com/watch?v=3lUbfWdTlAw",
        'desc': "•\tDesigned and developed a scalable serverless location-based attendance tracker for the University.\n" +
            "•\tFront end in HTML, CSS, JavaScript\n" +
            "•\tBack-end utilized serverless AWS architecture.  Building and deploying REST APIs in API Gateway to seamlessly communicate with front and back ends of the application.\n" +
            "•\tLeveraging the power of Lambda functions, with Boto3, to develop a cost-efficient modern-day solution.\n" +
            "•\tDynamoDB as the database created a robust and scalable architecture to build upon.\n",
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
