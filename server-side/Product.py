class Product:
  def __init__(self, nome, quantidade, preco, codigo, categoria):
    self._nome = nome
    self.quantidade = quantidade
    self.preco      = preco
    self._codigo    = codigo
    self.categoria  = categoria

  @property
  def nome(self):
    return self.nome

  @property
  def quantidade(self):
    return self.nome
  
  @property
  def preco(self):
    return self.nome
  
  @property
  def codigo(self):
    return self.nome
  
  @property
  def categoria(self):
    return self.nome

  
  