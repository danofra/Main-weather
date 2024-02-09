import { Alert } from "react-bootstrap";

const DangerComponent = () => (
  <Alert variant="danger" className="m-2 text-center mb-5">
    <Alert.Heading>Città non trovata!</Alert.Heading>
    <hr />
  </Alert>
);

export default DangerComponent;
