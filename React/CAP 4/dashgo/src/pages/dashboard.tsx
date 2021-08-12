import { GetServerSidePropsContext } from 'next'
import { DashboardTemplate } from 'templates/Dashboard'
import protectedRoutes from 'utils/protected-routes'

export default function DashboardPage(props: JSX.IntrinsicAttributes) {
  return <DashboardTemplate {...props} />
}

// ATENÇÃO:
// os métodos getStaticProps/getServerSideProps SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  return {
    props: {
      session
    }
  }
}
