const express = require("express");
const router = express.Router();
const zonaController = require("../controllers/zonaController");

module.exports = function () {
  //agregar zona via POST
  router.post("/zonas", zonaController.nuevaZona);
  //obtener todos los registros
  router.get("/zonas", zonaController.obtenerZonas);
  //obtener registro por id
  router.get("/zonas/:id", zonaController.obtenerZona);
  //actualizar registro
  router.put("/zonas/:id", zonaController.actualizarZona);
  //eliminar registro
  router.delete("/zonas/:id", zonaController.eliminarZona);

  return router;
};
