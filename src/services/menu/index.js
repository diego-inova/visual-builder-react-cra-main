/* https://technext.github.io/tinydash/ui-icons.html
https://coderthemes.com/simulor/layouts/light-horizontal/icons-feather.html */

export default async function getMenuData() {

  return [
    // VB:REPLACE-START:MENU-CONFIG
    {
      title: 'Regulacao medica',
      key: '__regulacao_medica',
      url: '/regulacaoMedica',
      icon: 'fe fe-activity',
    },
    
    {
      title: 'Movimentacao das equipes',
      key: '__movimentacaoequipes',
      url: '/movimentacaoEquipes',
      icon: 'fe fe-move ',
    },

    {
      title: 'Intranet',
      key: '__intranet',
      url: '/intranet',
      icon: 'fe fe-cloud',
    },

    {
      title: 'Historico de eventos das equipes',
      key: '__historicoeventosequipes',
      url: '/historicoEventosEquipes',
      icon: 'fe fe-list',
    },

    {
      title: 'Situacoes',
      key: '__situacoes',
      url: '/situacoes',
      icon: 'fe fe-tag',
    },

    // VB:REPLACE-END:MENU-CONFIG
  ]
}
