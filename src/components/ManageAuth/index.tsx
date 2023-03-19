import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  selectAuth,
  selectCurrentUser,
  selectIsLoading,
} from '../../redux/selectors/userSelectors';

export default function ManageAuth() {
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectIsLoading);
  const auth = useSelector(selectAuth)

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        navigate('/home');
      } else if (auth) {
        navigate('/register');
      } else {
        navigate('/login');
      }
    }
  }, [isLoading, auth, user, navigate]);

  return <Outlet />;
}
