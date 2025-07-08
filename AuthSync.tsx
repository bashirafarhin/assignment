"use client";

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '@/Redux/slices/auth';

const AuthSync = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) {
      dispatch(setAuthUser({
        name: session.user.name!,
        email: session.user.email!,
        image: session.user.image || undefined,
      }));
    }
  }, [session, dispatch]);

  return null;
};

export default AuthSync;