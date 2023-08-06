const TaskModel = require("../models/TaskModels");

module.exports.getTasks = async (req, res) => {
  //   const tasks = await TaskModel.find();
  //   res.send(tasks);
  res.send("hello world");
};

module.exports.saveTasks = async (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Successfully..");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};

module.exports.updateTasks = async (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate({ task })
    .then((data) => {
      console.log("Updated Successfully..");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something went wrong!" });
    });
};
