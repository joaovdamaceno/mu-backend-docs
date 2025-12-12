const sidebars = {
  docsSidebar: [
    'intro',
    'getting-started',
    'intellij',
    {
      type: 'category',
      label: 'Banco de Dados',
      items: [
        'db/overview',
        'db/schema',
        'db/flyway',
        'db/docker',
        'db/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/overview',
        'api/endpoints',
        'api/postman',
      ],
    },
    {
      type: 'category',
      label: 'Testes',
      items: [
        'tests/overview',
        'tests/junit',
      ],
    },
    {
      type: 'category',
      label: 'Deploy',
      items: [
        'deploy/github-pages',
        'deploy/codespaces',
      ],
    },
    'contributing',
  ],
};

export default sidebars;
