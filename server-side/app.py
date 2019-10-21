from flask import Flask, request, flash
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["TangoTest"]
products = mydb["products"]

app = Flask(__name__)

print(myclient.list_database_names())
print(mydb.list_collection_names())

@app.route('/')
def index():
  mydict = { "name": "Peter", "address": "Lowstreet 27" }

  product = products.insert_one(mydict)

  print(product.inserted_id)
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
