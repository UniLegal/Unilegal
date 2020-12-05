export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5fcb15dd07edee703e4e87c3',
                  title: 'Sanity Studio',
                  name: 'unilegal-studio',
                  apiId: '9b244508-1e59-4c29-b295-c29d50dce75c'
                },
                {
                  buildHookId: '5fcb15ddfaed13775ad767a1',
                  title: 'Portfolio Website',
                  name: 'unilegal',
                  apiId: 'd24e4e51-b9cb-4072-9d69-f9f2160d9d10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UniLegal/Unilegal',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://unilegal.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
