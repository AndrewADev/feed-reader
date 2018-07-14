import {Article} from './article';

export const ARTICLES: Article[] = [ {
    published_date: Date.parse('1531292400'),
    level: '0',
    title: 'Drittanbieter können Gmails einsehen',
    body: 'Zahlreiche Medien berichteten in den vergangenen Tagen über Gmail-Apps von Drittanbietern, die E-Mails auslesen können. '
     + 'Dabei entstand teilweise der Eindruck, dass der Zugriff auf E-Mails ohne Zustimmung des Nutzers erfolgen könnte. Dies ist '
     + 'jedoch nicht der Fall.\r\n\r\nApps für Gmail dienen in der Regel dazu, das dortige Postfach zu verwalten oder um weitere '
     + 'Funktionalitäten zu erweitern. Dafür ist tatsächlich in der Regel eine Zugriffsberechtigung auf die E-Mails erforderlich. '
     + 'Doch diese wird nicht automatisch gewährt: Verknüpft man erstmals eine App mit dem Google-Konto, werden die zu gewährenden '
     + 'Berechtigungen abgefragt – und nur gewährt, wenn der Nutzer explizit zustimmt.\r\n\r\nEs gibt keine Anzeichen dafür, dass '
     + 'Drittanbieter-Apps, die über dieses Verfahren Zugriff auf Gmail-Konten erhalten haben, missbräuchlich mit den Daten umgehen.'
     + ' Google betont, dass Apps sowie deren Entwickler sorgfältig geprüft werden, bevor sie überhaupt zum Verfahren zugelassen werden.'
     + ' \r\n\r\nSiBa rät dringend, angefragte Zugriffsrechte vor einer Zustimmung stets sorgfältig zu prüfen und im Zweifel die Erlaubnis '
     + 'zu verweigern. Stellen Sie sich insbesondere die Frage, ob die angefragten Rechte überhaupt zu der Funktionalität der App passen. '
     + 'Darüber hinaus können die Vertrauenswürdigkeit des Anbieters sowie dessen Datenschutzbestimmungen eine Rolle spielen.\r\n',
    categories: [
      '37',
      '42'
    ],
    url_action: [
      {
        url: 'https://mobilsicher.de/datenschutz/5560',
        title: 'Alles rund um App-Berechtigungen bei mobilsicher.de'
      }
    ],
    url_explanation: [
      {
        url: 'https://support.google.com/accounts/answer/3466521?hl=de',
        title: 'Hilfeseite zu Apps mit Zugriff auf Google-Konten'
      },
      {
        url: 'https://www.netzwelt.de/tipps/486-facebook-login-apps-webseiten-berechtigungen-entziehen.html',
        title: 'Artikel zum Facebook-Login'
      },
      {
        url: 'https://mobilsicher.de/hintergrund/ganz-oder-gar-nicht-androids-rechtesystem-fuer-apps',
        title: 'Artikel zu Zugriffsrechten bei Android'
      },
      {
        url: 'https://praxistipps.chip.de/ios-berechtigungen-und-ihre-bedeutung_9866',
        title: 'Artikel zu Zugriffsrechten bei iOS'
      }
    ],
    id: '2759'
  },
  {
    published_date: Date.parse('1531204200'),
    level: '1',
    title: 'Datenleck bei Panini: Daten von Kindern waren öffentlich einsehbar',
    body: 'Beim Sammelbild-Hersteller Panini, dessen Aufkleber vor allem zur Weltmeisterschaft besonders beliebt sind, gab es eine '
    + 'Datenpanne: Beim Service „mypanini“, bei dem Fans eigene Fotos hochladen können um personalisierte Sammelbilder zu erhalten, '
    + 'waren die persönlichen Daten der Nutzer öffentlich einsehbar.\r\n\r\nZu diesen Daten gehörten unter anderem Geburtsdatum, der '
    + 'volle Name sowie der Wohnort der Nutzer. Da der Dienst vor allem von Kindern und Jugendlichen genutzt wird, handelt es sich um '
    + 'eine besonders schwerwiegende Panne. Es ist derzeit unklar, ob die Daten tatsächlich von Dritten ausgelesen wurden oder nicht. '
    + 'Panini zufolge wurde das Datenleck inzwischen mithilfe eines Sicherheitsupdates geschlossen.\r\n',
    categories: [
      '37',
      '44'
    ],
    url_action: [
      {
        url: 'https://www.heise.de/newsticker/meldung/Fussball-Sammelbildchen-Datenschutzpanne-beim-Online-Dienst-von-Panini-4095126.html',
        title: 'Artikel bei heise'
      }
    ],
    url_explanation: [
      {
        url: 'https://www.sicher-im-netz.de/privatsph%C3%A4re-und-daten-sch%C3%BCtzen',
        title: 'Seite zum Thema Datenschutz bei DsiN'
      }
    ],
    id: '2758'
  }
];
