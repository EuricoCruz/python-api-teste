from flask import Flask, request, flash
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["TangoTest"]

app = Flask(__name__)

print(myclient.list_database_names())


@app.route('/')
def index():
    return "<h1>Teste</h1>"

@app.route('/produtos')
def list_products():
    return "<h1>Teste</h1>"

@app.route('/produtos/:id')
def list_one_product():
    return "<h1>Teste</h1>"

@app.route('/produtos', methods=['POST',])
def add_product():
    return "<h1>Teste</h1>"

@app.route('/produtos/:id')
def edit_product():
    return "<h1>Teste</h1>"


@app.route('/produtos:id')
def delete_product():
    return "<h1>Teste</h1>"



app.run(debug=True)
