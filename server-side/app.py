from flask import Flask, request, flash, redirect, url_for
from model import Product
import pymongo
import json
from bson import json_util
from flask_cors import CORS
from bson import ObjectId

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["TangoTest"]
products = mydb["products"]

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
  return "<h1>Teste</h1>"

@app.route('/produtos')
def list_products():
    items = []
    colecao = products.find()
    for product in colecao:
      items.append(product)
    return json.dumps(items, default=str)

@app.route('/produtos', methods=['POST',])
def add_product():
    data = request.get_json()
    nome = data['nome']
    quantidade = data['quantidade']
    preco = data['preco']
    codigo = data['codigo']
    categoria = data['categoria']
    

    item = Product(nome, quantidade, preco, codigo, categoria)
    item = item.__dict__  
    products.insert_one(item)
    return json.dumps(item, default=str)

@app.route('/produtos/<string:id>', methods=['DELETE'])
def delete_product(id):
    products.delete_one({'_id': ObjectId(id)})
    return "<h1>Teste</h1>"


app.run(debug=True)
