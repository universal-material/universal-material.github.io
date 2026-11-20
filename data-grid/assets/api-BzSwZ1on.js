const n=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog } from '../shared/controls.js';
import { makeOrders, type Order } from '../shared/data.js';

export const meta = {
  title: 'Grouping and expansion API',
  description: '\`groupColumn(column, level?)\` groups (or moves a grouped column to a level) and \`ungroupColumn(column)\` ungroups. A group is addressed by its **group path**, its values from the outermost level: \`expandGroup([\\'Brazil\\'])\`, \`expandGroup([\\'Brazil\\', \\'Toys\\'])\`. \`collapseAllGroups(1)\` collapses a single level.',
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);

  const [country, category, status, customer, total]: GridColumnDef<Order>[] = [
    { path: 'country', label: 'Country', width: 160, groupIndex: 0 },
    { path: 'category', label: 'Category', width: 140, groupIndex: 1 },
    { path: 'status', label: 'Status', width: 130 },
    { path: 'customer', label: 'Customer', width: 190 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  grid.keyExpr = 'id';
  grid.columns = [country!, category!, status!, customer!, total!];
  grid.items = makeOrders(600);

  controls(host,
    button('Group by country', () => grid.groupColumn(country!)),
    button('Group by category', () => grid.groupColumn(category!)),
    button('Status as outer level', () => grid.groupColumn(status!, 0)),
    button('Ungroup all', () => grid.getGrouping().forEach(column => grid.ungroupColumn(column))),
    button('Expand all', () => grid.expandAllGroups()),
    button('Collapse all', () => grid.collapseAllGroups()),
    button('Collapse level 2', () => grid.collapseAllGroups(1)),
    button('Expand Brazil', () => grid.expandGroup(['Brazil'])),
    button('Expand Brazil › Toys', () => {
      grid.expandGroup(['Brazil']); // expandGroup does not open the parents
      grid.expandGroup(['Brazil', 'Toys']);
    }));

  const log = eventLog(host);

  grid.addEventListener('u-grid-group-change', event => {
    const { grouping, source } = event.detail;
    log.write(\`u-grid-group-change [\${source}]  \${grouping.map(column => column.label).join(' › ') || 'not grouped'}\`);
  });

  grid.addEventListener('u-grid-group-expansion-change', event => {
    const { groupPath, groupIndex, expanded, source } = event.detail;
    const target = groupPath ? groupPath.join(' › ') : groupIndex === null ? 'every level' : \`level \${groupIndex + 1}\`;
    log.write(\`u-grid-group-expansion-change [\${source}]  \${target}: \${expanded ? 'expanded' : 'collapsed'}\`);
  });
};
`;export{n as default};
