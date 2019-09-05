module.exports = dependencies => {
  const mongoose = dependencies('db').mongo.mongoose;
  const ObjectId = mongoose.Schema.ObjectId;

  const TodoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    status: { type: String, required: true, default: 'open' },
    creator: { type: ObjectId, ref: 'User', required: true },
    created_at: { type: Date, default: Date.now }
  });

  return mongoose.model('Todo', TodoSchema);
};
