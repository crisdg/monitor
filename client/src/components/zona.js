import react, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import clienteAxios from "../config/axios";
import "../App.css";
const Zona = (props) => {
  const [data, setData] = useState();

  const checkData = {
    fecha: props.data.fecha,
    zona: props.data.zona,
    tildado: props.data.tildado,
    administracion: props.data.administracion,
    facturacion: props.data.facturacion,
  };

  if (!props.data) {
    props.history.push("/");
    return null;
  }

  const updateData = async (e) => {
    e.preventDefault();
    props.setConsultar(true);
    const url = `/zonas/${props.data._id}`;
    setData(checkData);
    await clienteAxios
      .put(url, data)
      .then((res) => {
        console.log(res, "modificado");
      })
      .catch((error) => {
        console.log(error);
      });

    props.history.push("/");
    return null;
  };

  const volver = (e) => {
    e.preventDefault();
    alert("esta volviendo sin modificar datos");
    props.history.push("/");
  };

  const deleteZona = async () => {
    const url = `/zonas/${props.data._id}`;

    await clienteAxios.delete(url).then((res) => console.log(res));
    props.history.push("/");
    props.setConsultar(true);
  };

  return (
    <div>
      <div className="zona-form--container">
        <form method="post" className="zona-form--form">
          <div className="zona-form--items">
            <h2>Zona {props.data.zona} </h2>
            <hr />
            <label for="tildado">Cierre tildado</label>
            <input
              className="check"
              type="checkbox"
              id="tildado"
              name="tildado"
              defaultChecked={props.data.tildado ? true : false}
              disabled={props.data.tildado}
              onChange={(e) => {
                checkData.tildado = e.target.checked;
                setData(checkData);
                console.log(checkData);
              }}
            ></input>
            <br />
            <label for="administracion">Cierre administrativo </label>
            <input
              className="check"
              type="checkbox"
              value=""
              name="administracion"
              defaultChecked={props.data.administracion}
              disabled={props.data.administracion}
              onChange={(e) => {
                checkData.administracion = e.target.checked;
                setData(checkData);

                console.log(checkData);
              }}
            ></input>
            <br />
            <label for="facturacion">Cierre facturacion </label>
            <input
              className="check"
              type="checkbox"
              value=""
              id="facturacion"
              name="facturacion"
              defaultChecked={props.data.facturacion}
              disabled={props.data.facturacion}
              onChange={(e) => {
                checkData.facturacion = e.target.checked;
                setData(checkData);
                console.log(checkData);
              }}
            ></input>
            <br />
            <hr />
            <input
              className="form-btn"
              type="submit"
              value="cierre"
              onClick={updateData}
            />
            <input
              className="form-btn"
              type="submit"
              value="volver"
              onClick={volver}
            />
          </div>
        </form>
      </div>
      <button onClick={deleteZona}>Eliminar zona</button>
    </div>
  );
};

export default withRouter(Zona);
