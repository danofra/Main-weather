import { Alert } from "react-bootstrap";

const Welcome = () => (
  <Alert variant="primary" className="m-2 text-center mb-5">
    <Alert.Heading>
      Hey tu, benvenuto nella nostra AppMeteo: Main Weather!
    </Alert.Heading>
    <p>
      Siamo entusiasti di darti il benvenuto nella tua nuova esperienza
      meteorologica, dove ogni giorno ti porteremo le previsioni più accurate e
      dettagliate per aiutarti a pianificare al meglio la tua giornata.
    </p>
    <hr />
  </Alert>
);

export default Welcome;
