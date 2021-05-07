from flask import Flask, request
from pymongo import MongoClient
from bson import ObjectId
# import books from 'book.js'
import json
import os

app = Flask(__name__, static_folder="/frontend/build")

client = MongoClient(
    "mongodb+srv://shankar28:shankar28@studentid.8h5vs.mongodb.net/bookshop?retryWrites=true&w=majority")
db = client.bookshop
books = db.books


@app.route('/', methods=["GET"])
def hello():
    return "Hello World"


@app.route('/booksList', methods=["GET"])
def getList():
    documents = books.find()
    response = []
    for document in documents:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)


@app.route('/addBook', methods=["POST"])
def addBook():
    req_data = request.get_json()
    x = books.insert(req_data)
    print("X is :{0}".format(x))
    return ('', 201)
