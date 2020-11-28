const Product = require("../models/Items");

module.exports = async function (req, res, next) {
  const id = req.header("itemid");

  if (!id) {
    return res.status(401).json({ msg: "No id, enter id to update" });
  }
  try {
    const item = await item.findById(id);

    req.item = item;

    next();
  } catch (error) {
    console.log(error);
    console.error("something wrong with loaditem middleware");
    res.status(500).json({ msg: "Server Error" });
  }
};
