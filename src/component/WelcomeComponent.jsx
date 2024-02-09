import { Alert } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Hero from "../data/img/hero.jpeg";

const Welcome = () => (
  <>
    <div className="text-center">
      <Image src={Hero} width={"40%"} />
    </div>
    <Alert variant="primary" className="m-2 text-center mb-5">
      <Alert.Heading>
        Hey tu, benvenuto nella nostra AppMeteo: Main Weather!
      </Alert.Heading>
      <p>
        Siamo entusiasti di darti il benvenuto nella tua nuova esperienza
        meteorologica, dove ogni giorno ti porteremo le previsioni più accurate
        e dettagliate per aiutarti a pianificare al meglio la tua giornata.
      </p>
      <hr />
    </Alert>
  </>
);

export default Welcome;
