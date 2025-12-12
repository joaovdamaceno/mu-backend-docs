import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="MU Backend" description="Documentação do MU Backend">
      <main style={{padding: '3rem 1rem', maxWidth: 980, margin: '0 auto'}}>
        <h1>MU Backend Docs</h1>
        <p>
          Documentação do backend do Website da Maratona Unioeste (Spring Boot + PostgreSQL + Flyway).
        </p>
        <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
          <Link className="button button--primary" to="/getting-started">
            Começar
          </Link>
          <Link className="button button--secondary" to="/api/overview">
            Ver API
          </Link>
          <a className="button button--secondary" href="https://github.com/joaovdamaceno/mu-backend" target="_blank" rel="noreferrer">
            Abrir backend no GitHub
          </a>
        </div>
      </main>
    </Layout>
  );
}
