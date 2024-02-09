import { Container, Row } from "react-bootstrap";
import CardComponent from "./CardComponent";
import { useParams } from "react-router-dom";
import searchAPI from "../data/Api";
import { useState, useEffect } from "react";
import DangerComponent from "./DangerComponent";
import Spinner from "react-bootstrap/Spinner";

function CardlistComponent() {
  const [citys, setCitys] = useState(null);
  const [loading, setLoading] = useState(true);
  const data = useParams();

  const fetchedData = async () => {
    setCitys(await searchAPI(data.city));
    setLoading(false);
  };
  useEffect(() => {
    fetchedData();
  }, [data.city]);

  return (
    <>
      <Container fluid>
        <Row className="justify-content-center p-2">
          {loading ? (
            <Spinner animation="border" variant="primary" />
          ) : citys.list.length > 0 ? (
            <>
              <h3 className="text-center">
                Ecco i risultati della tua ricerca: {data.citys}
              </h3>
              {citys.list.map((city, index) => (
                <CardComponent key={index} data={city} />
              ))}
            </>
          ) : (
            <DangerComponent />
          )}
        </Row>
      </Container>
    </>
  );
}

export default CardlistComponent;
