import * as React from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { setupApiClient } from '../services/api';
import { withSSRAuth } from '../utils/withSSRAuth';
import { Can } from '../components/Can';

export default function Dashboard() {
  const { user, signOut } = React.useContext(AuthContext);

  return (
    <>
      <h1>dashboard!: {user?.email}</h1>

      <button type="button" onClick={signOut}>
        Sign out
      </button>

      <Can permissions={['metrics.list']}>
        <div>Métricas</div>
      </Can>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async ctx => {
  const apiClient = setupApiClient(ctx);

  await apiClient.get('me');

  return {
    props: {},
  };
});
