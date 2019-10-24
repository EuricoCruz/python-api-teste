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

@app.route('/produtos/<string:id>', methods=['DELETE', 'PUT', 'GET'])
def delete_or_update_product(id):
    if request.method == 'DELETE':
      products.delete_one({'_id': ObjectId(id)})
      message = "Produto deletado"
      return json.dumps(message)

    if request.method == 'PUT':
      data = request.get_json()
      nome = data['nome']
      quantidade = data['quantidade']
      preco = data['preco']
      codigo = data['codigo']
      categoria = data['categoria']

      newvalues = { "$set": { "_nome": nome, "_quantidade": quantidade, "_preco" : preco, "_codigo" : codigo, "_categoria": categoria } }
      products.update_one({'_id': ObjectId(id) }, newvalues)
      message = 'Produto atualizado'
      return json.dumps(message)

    if request.method == 'GET':
      item = products.find_one({'_id': ObjectId(id)})
      return json.dumps(item, default=str)



@app.route('/encontrar/<string:id>', methods=['GET'])
def find_product(id):
    item = products.find_one({'_id': ObjectId(id)}) 
    return json.dumps(item, default=str)


app.run(host='localhost', port=int('5000'), debug=True)