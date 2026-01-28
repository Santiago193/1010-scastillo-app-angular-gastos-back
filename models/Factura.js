const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({
  ruc: {
    type: String,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  tipoGasto: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Factura', FacturaSchema);
