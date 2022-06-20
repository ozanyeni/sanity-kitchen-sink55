export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b05094b37d4a18d499d054',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-55-studio',
                  apiId: 'ee1fa078-65e2-424d-a2a8-8d1e2b0be68c'
                },
                {
                  buildHookId: '62b05094aa8c741078b7ca6f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-55',
                  apiId: '05c5bbea-1150-4558-9ea7-475042520b22'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ozanyeni/sanity-kitchen-sink55',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-55.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
