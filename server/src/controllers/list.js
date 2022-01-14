const { Item, List } = require("../../models")
const _ = require("lodash")

exports.createTodo = async (req, res) => {
  try {
    const listName = _.startCase(_.toLower(req.params.listName))
    let newList = await List.findOne({ where: { name: listName } })

    if (!newList) {
      await List.create({ name: listName })
    }
    let foundList = await List.findOne({ where: { name: listName } })
    const data = await Item.create({ ...req.body, idList: foundList.id })
    res.status(200).send({
      status: "success",
      message: "Create to do list success",
    })
  } catch (error) {
    console.log(error)
    res.status(501).send({
      status: "Failed",
      message: "Create to do list failed",
    })
  }
}
