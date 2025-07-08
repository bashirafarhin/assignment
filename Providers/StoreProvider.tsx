'use client';

import { Provider } from 'react-redux';
import { store } from '@/Redux/store'; // adjust the path

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}