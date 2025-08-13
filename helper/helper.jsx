import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export let Checkuser = ({ element }) => {
  const auth = useSelector((state) => state.result.user);
  return auth ? element : <Navigate to={'/'} replace />;
}