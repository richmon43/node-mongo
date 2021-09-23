const { Schema, model } = require('mongoose');

const NotaSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Nota', NotaSchema);