const Product = require('../models/product');


async function addProduct(req, res) {
  console.log(req.body)
  let product = req.body;
      res.send({ message: 'El producto se ha agregado con éxito', product:  await Product.create(product) });
  };

async function updateProduct(req, res){
  let product = req.body;
  await Product.update(product, {where: {id:req.params.id}})
    res.send({ message: 'Se ha actualizado el producto', products: await Product.findOne(product, {where: {id:req.params.id}}) });
  };

async function deleteProduct(req, res) {
  let product = req.body;
  await Product.destroy({where: {id:req.params.id}})
      res.send({ message: 'Se ha eliminado exitosamente' });
    };

async function getProduct(req, res){
      res.send(await Product.findAll());
  };

async function getProductById(req, res){
      res.send(await Product.findByPk(req.params.id));
    };  


module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProductById
}