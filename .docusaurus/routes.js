import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mu-backend-docs/__docusaurus/debug',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug', '38e'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/config',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/config', '7ce'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/content',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/content', 'f99'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/globalData', '12c'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/metadata', '9c5'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/registry', '10c'),
    exact: true
  },
  {
    path: '/mu-backend-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/mu-backend-docs/__docusaurus/debug/routes', '46a'),
    exact: true
  },
  {
    path: '/mu-backend-docs/',
    component: ComponentCreator('/mu-backend-docs/', '2e9'),
    exact: true
  },
  {
    path: '/mu-backend-docs/',
    component: ComponentCreator('/mu-backend-docs/', '54b'),
    routes: [
      {
        path: '/mu-backend-docs/',
        component: ComponentCreator('/mu-backend-docs/', '772'),
        routes: [
          {
            path: '/mu-backend-docs/',
            component: ComponentCreator('/mu-backend-docs/', '590'),
            routes: [
              {
                path: '/mu-backend-docs/api/endpoints',
                component: ComponentCreator('/mu-backend-docs/api/endpoints', '0c7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/api/overview',
                component: ComponentCreator('/mu-backend-docs/api/overview', '4af'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/api/postman',
                component: ComponentCreator('/mu-backend-docs/api/postman', '6f8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/contributing',
                component: ComponentCreator('/mu-backend-docs/contributing', 'fff'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/db/docker',
                component: ComponentCreator('/mu-backend-docs/db/docker', '444'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/db/flyway',
                component: ComponentCreator('/mu-backend-docs/db/flyway', 'f34'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/db/overview',
                component: ComponentCreator('/mu-backend-docs/db/overview', 'c32'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/db/schema',
                component: ComponentCreator('/mu-backend-docs/db/schema', '44e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/db/troubleshooting',
                component: ComponentCreator('/mu-backend-docs/db/troubleshooting', 'aee'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/deploy/codespaces',
                component: ComponentCreator('/mu-backend-docs/deploy/codespaces', '4ad'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/deploy/github-pages',
                component: ComponentCreator('/mu-backend-docs/deploy/github-pages', '5f3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/getting-started',
                component: ComponentCreator('/mu-backend-docs/getting-started', '505'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/intellij',
                component: ComponentCreator('/mu-backend-docs/intellij', 'cd9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/tests/junit',
                component: ComponentCreator('/mu-backend-docs/tests/junit', '3e6'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/tests/overview',
                component: ComponentCreator('/mu-backend-docs/tests/overview', '68e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/mu-backend-docs/',
                component: ComponentCreator('/mu-backend-docs/', 'c52'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
