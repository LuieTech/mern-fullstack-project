const mongoose = require("mongoose")
const schema = mongoose.Schema;

const bookSchema = new schema(
  {
    title: {
      type: String,
      trim: true,
      required: 'Group name is required',
      minLength: [3, 'Title needs at least 3 chars']
    }
  },
  {
    author:{
      type: String,
      trim: true,
      required: true,
      minLength: [3, "author name requires at least 3 chars"]
    }
  },
  { 
    description:{
      type: String,
      trim: true,
      maxLength: [200, "Description is max 200 chars"]
    }
  },
  {
    timestamps: true,
  }

)

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;