import React, { Component } from 'react';
import MenuOption from './MenuOption.jsx';

const options =
  {
    icon1: process.env.PUBLIC_URL + '/images/icon_usuario.png',
    desc1: 'USUÁRIOS',
    url1: process.env.PUBLIC_URL + '/usuarios',

    icon2: process.env.PUBLIC_URL + '/images/icon_cadastro.png',
    desc2: 'COLABORADORES',
    url2: process.env.PUBLIC_URL + '/lista_colaboradores',

    icon3: process.env.PUBLIC_URL + '/images/icon_cadastro.png',
    desc3: 'SOLICITAÇÕES',
    url3: process.env.PUBLIC_URL + '/solicitacoes',

    icon4: process.env.PUBLIC_URL + '/images/icon_search.png',
    desc4: 'RELATÓRIOS',
    url4: process.env.PUBLIC_URL + '/relatorios',

    icon5: process.env.PUBLIC_URL + '/images/icon_list.png',
    desc5: 'OUTRA OÇÃO',
    url5: process.env.PUBLIC_URL + '/relatorios',

    icon6: process.env.PUBLIC_URL + '/images/icon_list.png',
    desc6: 'OUTRA OÇÃO',
    url6: process.env.PUBLIC_URL + '/relatorios',

    icon7: process.env.PUBLIC_URL + '/images/icon_list.png',
    desc7: 'OUTRA OÇÃO',
    url7: process.env.PUBLIC_URL + '/relatorios',

    icon8: process.env.PUBLIC_URL + '/images/icon_list.png',
    desc8: 'OUTRA OÇÃO',
    url8: process.env.PUBLIC_URL + '/relatorios',
  };

export default class Dashboard extends Component {
  render() {
    return (
      <div id="area_dashboard" className="mt-4">

        <div className="row">
          <div className="col-sm-3"><MenuOption icon={options.icon1} text={options.desc1} url={options.url1} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon2} text={options.desc2} url={options.url2} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon3} text={options.desc3} url={options.url3} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon4} text={options.desc4} url={options.url4} /></div>
        </div>

        <div className="row">
          <div className="col-sm-3"><MenuOption icon={options.icon5} text={options.desc5} url={options.url5} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon6} text={options.desc6} url={options.url6} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon7} text={options.desc7} url={options.url7} /></div>
          <div className="col-sm-3"><MenuOption icon={options.icon8} text={options.desc8} url={options.url8} /></div>
        </div>

      </div>
    );
  }
}
