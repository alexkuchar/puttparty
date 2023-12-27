import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="toobad">
      <h2>Oops..</h2>
      <p>Bring mir einen Keks, vielleicht behebe ich den Fehler dann.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
