import { App as Server } from '@tinyhttp/app';
import { useEffect } from 'react';
import { AppContext } from './context';

const server = new Server();

export function App(props: AppContext) {
  useEffect(() => {
    server.listen(props.port);
  }, []);

  return null;
}
