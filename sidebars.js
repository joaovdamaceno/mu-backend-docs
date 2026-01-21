const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Guia da API',
      collapsible: false,
      items: [
        'intro',
        'api/endpoints',
        'api/postman',
      ],
    },
    {
      type: 'category',
      label: 'Dev Notes',
      collapsed: true,
      items: [
        'dev-notes',
        'getting-started',
      ],
    },
  ],
};

export default sidebars;
