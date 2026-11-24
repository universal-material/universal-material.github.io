const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

// Mesma tabela do README e do API.md ("Browser support"), medida no BrowserStack (commit da tabela,
// 2026-11-24). Mudou o mínimo ou a lista testada? Atualizar os três.
interface Support {
  browser: string;
  minimum: string;
  tested: string;
}

const support: Support[] = [
  { browser: 'Chrome', minimum: '114', tested: '114 and 158 on Windows' },
  { browser: 'Edge', minimum: '114', tested: '114 and 157 on Windows' },
  { browser: 'Firefox', minimum: '125', tested: '125 and 160 on Windows' },
  { browser: 'Safari (macOS)', minimum: '17', tested: '17.3 and 27' },
  { browser: 'Safari (iOS and iPadOS)', minimum: '17', tested: 'iOS 26 on an iPhone 17' },
  { browser: 'Chrome (Android)', minimum: '114', tested: 'Android 15 on a Galaxy S25' },
];

export const meta = {
  title: 'Browser support',
  description: 'Minimum versions, each tested on real browsers (BrowserStack): the grid renders, exports to Excel and PDF, and groups and sorts a million rows, with no console errors. Chrome and Edge 114 to 119 need **0.7.0** or later. Internet Explorer and legacy Edge are not supported. (This table is a \`<u-grid>\` too.)',
};

export default (host: HTMLElement) => {
  const grid = document.createElement('u-grid');
  grid.style.height = '360px';
  grid.setAttribute('aria-label', 'Browser support');

  const columns: GridColumnDef<Support>[] = [
    { path: 'browser', label: 'Browser', width: 220 },
    { path: 'minimum', label: 'Minimum version', width: 160 },
    { path: 'tested', label: 'Tested on real browsers', width: 260 },
  ];

  grid.keyExpr = 'browser';
  grid.showGroupPanel = false;
  grid.columns = columns;
  grid.items = support;

  host.append(grid);
};
`;export{e as default};
