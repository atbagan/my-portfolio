# Andrew Bagan's portfolio

Professional portfolio. AWS and React.

## Technologies Used in this Portfolio

Git and Github,
SSH,
HTML,
CSS,
Font Awesome

React,
Jest,
Babel,
NPM,
Webpack

AWS Services Utilized:
s3,
CodeBuild,
CodePipeline,
AWS Lambda,
CloudFront,
Route53,
SNS

Frontend Workflow-
Route53 -> CloudFront -> s3 -> HTML, CSS, JavaScript, React, Babel

Backend Workflow-
push code to github -> CodeBuild runs Unit tests(jest), packages with NPM, Webpack, Babel, and stores in s3
CodePipeline -> Lambda -> Deploy code to s3 -> Send SNS that portfolio has been deployed.
