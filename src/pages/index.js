import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="MU Backend" description="Documentação do MU Backend">
      <main style={{padding: '3rem 1rem', maxWidth: 980, margin: '0 auto'}}>
        <h1>MU Backend Docs</h1>
        <p>
          Documentação para consumir a API do Website da Maratona Unioeste (Spring Boot + PostgreSQL).
        </p>
        <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
          <Link className="button button--primary" to="/api/overview">
            Ver visão geral da API
          </Link>
          <Link className="button button--secondary" to="/api/endpoints">
            Endpoints
          </Link>
          <Link className="button button--secondary" to="/api/postman">
            Testar no Postman
          </Link>
          <Link className="button button--secondary" to="/dev-notes">
            Contributing / Dev Notes
          </Link>
          <a className="button button--secondary" href="https://github.com/joaovdamaceno/mu-backend" target="_blank" rel="noreferrer">
            Abrir backend no GitHub
          </a>
        </div>
      </main>
    </Layout>
  );
}
