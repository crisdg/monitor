import { React } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TablaMonitor(props) {
  return (
    <div className="container">
      <input
        type="date"
        name="fechaFiltro"
        id="fechaFiltro"
        className="monitor--filtro"
        onChange={props.myDate}
        value={props.date}
      />
      <Table striped bordered hover className="monitor--table">
        <thead className="monitor--table-header">
          <th>Fecha</th>
          <th>Orden</th>
          <th>Zona</th>
          <th>cierre tildado</th>
          <th>informe adm.</th>
          <th>informe fact.</th>
          <th>Cierre</th>
          <th>Eliminar</th>
        </thead>
        <tbody className="monitor--table-body">
          {props.data.map((zona, key) => {
            return (
              <tr>
                <td>{zona.fecha}</td>
                <td>{key}</td>
                <td>{zona.zona}</td>
                <td className={zona.tildado === true ? "true" : "false"}>
                  {zona.tildado === true ? "OK" : "X"}
                </td>
                <td className={zona.administracion === true ? "true" : "false"}>
                  {zona.administracion === true ? "OK" : "X"}
                </td>
                <td className={zona.facturacion === true ? "true" : "false"}>
                  {zona.facturacion === true ? "OK" : "X"}
                </td>
                <td>
                  <div className="monitor--cierre-button">
                    <Link to={`/zona/${zona._id}`} data={zona}>
                      Cierre
                    </Link>
                  </div>
                </td>
                <td>
                  <div className="monitor--eliminar-button">
                    <Link to={`/zona/${zona._id}`} data={zona}>
                      Eliminar
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="monitor--agregar-button">
        <Link to={`/nueva`}>+</Link>
      </div>
    </div>
  );
}

export default TablaMonitor;
