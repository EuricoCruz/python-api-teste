from flask import Flask, request, flash, redirect, url_for
from model import Product
import pymongo
import json
from bson import json_util

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["TangoTest"]
products = mydb["products"]

app = Flask(__name__)

@app.route('/')
def index():
  return "<h1>Teste</h1>"

items = []
@app.route('/produtos')
def list_products():
    for product in products.find():
      items.append(product)

    print(items)
    return json.dumps(items, default=str)

@app.route('/produtos/:id')
def list_one_product():
    return "<h1>Teste</h1>"

@app.route('/produtos', methods=['POST',])
def add_product():
    nome = request.form['nome']
    quantidade = request.form['quantidade']
    preco = request.form['preco']
    codigo = request.form['codigo']
    categoria = request.form['categoria']

    item = Product(nome, quantidade, preco, codigo, categoria)
    item = item.__dict__  
    products.insert_one(item)
    return json.dumps(item, default=str)

@app.route('/produtos/:id')
def edit_product():
    return "<h1>Teste</h1>"


@app.route('/produtos:id')
def delete_product():
    return "<h1>Teste</h1>"



app.run(debug=True)
