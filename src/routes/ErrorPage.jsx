import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Ooops!</h1>
      <p>
        Bring mir ein Keks und eröffne ein issue auf github, vielleicht fixxe ch
        das.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
