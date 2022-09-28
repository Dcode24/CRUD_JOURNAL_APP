const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: 'public',
    enum: ['public', 'private'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    //!change: this field should be required because the app will break if the user is not present.
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Story', StorySchema);
