import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import TablaMonitor from "./components/tablaMonitor";
import NuevaZona from "./components/nuevaZona";

import Zona from "./components/zona";
import clienteAxios from "./config/axios";

function App() {
  const [zonas, setZonas] = useState([]);
  const [zonasFilter, setZonasFilter] = useState([]);
  const [date, setDate] = useState("");
  const [consultar, setConsultar] = useState(true);

  useEffect(() => {
    if (consultar) {
      const consultarZonas = () => {
        clienteAxios
          .get("/zonas")
          .then((respuesta) => {
            console.log(respuesta);
            setZonas(respuesta.data);
            setConsultar(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      consultarZonas();
      const filtrado = zonas.filter((item) => item.fecha === date);
      console.log(filtrado);
      setZonasFilter(filtrado);
    }
  }, [consultar, zonasFilter]);

  const myDate = (e) => {
    setDate(e.target.value);
    setConsultar(true);
  };
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <TablaMonitor data={zonasFilter} date={date} myDate={myDate} />
          )}
        />
        <Route
          exact
          path="/zona/:id"
          render={(props) => {
            const zona = zonas.filter(
              (item) => item._id === props.match.params.id
            );

            return (
              <Zona
                data={zona[0]}
                id={props.match.params.id}
                setConsultar={setConsultar}
              />
            );
          }}
        />
        <Route
          exact
          path="/nueva"
          render={(props) => <NuevaZona setConsultar={setConsultar} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
