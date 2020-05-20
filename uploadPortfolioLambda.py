import boto3
import json
import zipfile
import mimetypes
from io import BytesIO
from botocore.client import Config


def lambda_handler(event, context):
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))

    portfolio_bucket = s3.Bucket('portfolio.andrewbagan.io')
    build_bucket = s3.Bucket('portfoliobuild.andrewbagan.io')

    portfolio_zip = BytesIO()

    build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

    with zipfile.ZipFile(portfolio_zip) as myzip:
        for name in myzip.namelist():
            obj = myzip.open(name)
            portfolio_bucket.upload_fileobj(obj, name)
            portfolio_bucket.Object(name).Acl().put(ACL='public-read')
    return None