const {Schema, model} = require('mongoose');
const autopopulate = require('mongoose-autopopulate');

const MantenimientoSchema = new Schema({
    proveedor: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Persona',
        autopopulate: true
    },

    tipoMantenimiento: {
        type: String,
        required: true
    },

    fecha: {
        type: String,
        required: true
    },

    costoTotal: {
        type: Number,
        default: 0
    }

}, {
    timestamps: false
});

MantenimientoSchema.plugin(autopopulate);

module.exports = model('Mantenimiento', MantenimientoSchema);