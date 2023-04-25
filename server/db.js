const mongoose = require("mongoose");
module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      "mongodb+srv://dipeshshrsta076:Test%401234@cluster0.agw5eei.mongodb.net/todolist",
      connectionParams
    );
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
