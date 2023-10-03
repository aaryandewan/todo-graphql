const Todo = require("../../models/Todo");

const resolvers = {
  Query: {
    getTodos: async () => {
      try {
        return await Todo.find();
      } catch (err) {
        throw new Error(err);
      }
    },
    getTodo: async (_, { id }) => {
      try {
        const todo = await Todo.findById(id);
        if (todo) {
          return todo;
        } else {
          throw new Error("Todo not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    addTodo: async (_, { title, description }) => {
      const todo = new Todo({
        title,
        description,
      });
      return await todo.save();
    },
    updateTodo: async (_, { id, title, description, completed }) => {
      try {
        const updatedTodo = await Todo.findByIdAndUpdate(
          id,
          { title, description, completed },
          { new: true }
        );
        return updatedTodo;
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteTodo: async (_, { id }) => {
      try {
        await Todo.findByIdAndRemove(id);
        return "Todo deleted successfully!";
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};

module.exports = resolvers;
