const Zona = require("../models/Zona");

// cuando se crea una nueva zona
exports.nuevaZona = async (req, res, next) => {
  //crear objeto zona con datos req.body
  const zona = new Zona(req.body);

  // TODO: crear zona
  try {
    await zona.save();
    res.json({ mensaje: "zona agregada correctamente" });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.obtenerZonas = async (req, res, next) => {
  try {
    const zonas = await Zona.find({});
    res.json(zonas);
  } catch (error) {
    console.log(error);
    next();
  }
};

//obtener por id
exports.obtenerZona = async (req, res, next) => {
  try {
    const zona = await Zona.findById(req.params.id);
    res.json(zona);
  } catch (error) {
    console.log(error);
    next();
  }
};

//actualizar po id
exports.actualizarZona = async (req, res, next) => {
  try {
    const zona = await Zona.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(zona);
  } catch (error) {
    console.log(error);
    next();
  }
};

//eliminar zona
exports.eliminarZona = async (req, res, next) => {
  try {
    await Zona.findByIdAndDelete({ _id: req.params.id });
    res.json({ mensaje: "registro eliminado" });
  } catch (error) {
    console.log(error);
    next();
  }
};
