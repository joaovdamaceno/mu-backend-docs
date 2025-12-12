const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Guia da API',
      collapsible: false,
      items: [
        'intro',
        'api/overview',
        'api/endpoints',
        'api/schemas',
        'api/postman',
      ],
    },
    {
      type: 'category',
      label: 'Contributing / Dev Notes',
      collapsed: true,
      items: [
        'dev-notes',
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
    },
  ],
};

export default sidebars;
