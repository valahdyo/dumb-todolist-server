const { Item, List } = require("../../models")
const _ = require("lodash")

exports.getItems = async (req, res) => {
  try {
    const listName = _.startCase(_.toLower(req.params.listName))
    console.log(listName)
    const data = await List.findOne({
      where: { name: listName },
      include: {
        model: Item,
        as: "listItem",
        attributes: {
          exclude: ["createdAt"],
        },
      },
      attributes: ["id", "name"],
    })
    res.status(200).send({
      status: "success",
      data,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: "Failed",
      message: "Failed get todolist",
    })
  }
}

exports.updateItem = async (req, res) => {
  try {
    console.log(req.body)
    const id = req.params.idItem
    await Item.update({ ...req.body }, { where: { id } })
    res.status(200).send({
      status: "succes",
      message: "Item updated",
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: "Failed",
      message: "Item update failed",
    })
  }
}

exports.deleteItem = async (req, res) => {
  try {
    const id = req.params.idItem
    await Item.destroy({
      where: { id },
    })
    res.status(200).send({
      status: "Success",
      message: "Item deleted",
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: "Failed",
      message: "Delete item failed",
    })
  }
}