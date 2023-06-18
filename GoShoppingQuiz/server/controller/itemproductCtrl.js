import { sequelize } from "../models/init-models";

const findAll = async (req, res) => {
  try {
    const itemproduct = await req.context.models.itemproduct.findAll();
    return res.send(itemproduct);
  } catch (error) {
    return res.send(error);
  }
};

const findOne = async (req, res) => {
  try {
    const itemproduct = await req.context.models.itemproduct.findOne({
      where: { cartId: req.params.ids },
    });
    return res.send(itemproduct);
  } catch (error) {
    return res.send(error);
  }
};

const create = async (req, res) => {
  try {
    const itemproduct = await req.context.models.itemproduct.create({
      cartId: req.body.id,
      product: req.body.product,
      qty: req.body.qty,
      subtotal: req.body.subtotal,
      users: req.body.users,
    });
    return res.send(itemproduct);
  } catch (error) {
    return res.send(error);
  }
};

const update = async (req, res) => {
  try {
    const itemproduct = await req.context.models.itemproduct.update(
      {
        cartId: req.body.id,
        product: req.body.product,
        qty: req.body.qty,
        subtotal: req.body.subtotal,
        users: req.body.users,
      },
      { returning: true, where: { cartId: req.params.id } }
    );
    return res.send(itemproduct);
  } catch (error) {
    return res.send(error);
  }
};

const addToCart = async (req, res) => {
  try {
    const { id, product, qty, subtotal, users } = req.body;

    const newItemProduct = await req.context.models.itemproduct.create({
      cartId: id,
      product: product,
      qty: qty,
      subtotal: subtotal,
      users: users,
      // Informasi lain yang ingin disimpan dalam tabel itemproduct
    });

    const products = await req.context.models.product.findOne({
      where: { prodid: req.params.id },
    });

    if (!products) {
      return res.status(404).send("Produk tidak ditemukan");
    }

    // Cek apakah stok produk mencukupi
    if (products.stock < newItemProduct.qty) {
      return res.status(400).send("Stok produk tidak mencukupi");
    }

    // Kurangi stok produk
    products.stock -= newItemProduct.qty;

    // Simpan data perubahan stok produk ke dalam database
    await products.save();

    return res.send(newItemProduct);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleted = async (req, res) => {
  try {
    const itemproduct = await req.context.models.itemproduct.destroy({
      where: { cartId: req.params.id },
    });
    return res.send("delete " + itemproduct + " row");
  } catch (error) {
    return res.send(error);
  }
};

const querySQL = async (req, res) => {
  try {
    await sequelize
      .query("select * from itemproduct where cartId = :id", {
        replacements: { id: req.params.id },
        type: sequelize.QueryTypes.SELECT,
      })
      .then((result) => {
        return res.send(result);
      });
  } catch (error) {
    return res.send(error);
  }
};
export default {
  findAll,
  findOne,
  create,
  update,
  deleted,
  querySQL,
  addToCart,
};
