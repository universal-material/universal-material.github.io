const e=`import '@universal-material/data-grid';
import type { GridColumnDef } from '@universal-material/data-grid';

import { button, controls, createGrid, eventLog, stat } from '../shared/controls.js';
import { makeOrders, random, type Order } from '../shared/data.js';

export const meta = {
  title: 'Live feed: add, update and remove',
  description: 'New orders arrive (\`add\`), move through the pipeline (\`update\`) and leave once delivered (\`remove\`) — all through \`applyChanges\`, grouped by status with live counts and totals. Expand or collapse groups and select rows while the feed runs: the state is kept.',
};

const PIPELINE = ['Pending', 'Paid', 'Shipped', 'Delivered'];

export default (host: HTMLElement) => {
  const grid = createGrid(host, 440);
  const next = random(5);
  const source = makeOrders(5_000, 99);
  const orders = new Map<number, Order>();
  let cursor = 0;

  const columns: GridColumnDef<Order>[] = [
    { path: 'status', label: 'Status', width: 140, groupIndex: 0, sortOrder: 'asc', comparator: (a, b) => PIPELINE.indexOf(a as string) - PIPELINE.indexOf(b as string) },
    { path: 'id', label: 'Order', width: 100, dataType: 'number' },
    { path: 'customer', label: 'Customer', width: 200 },
    { path: 'country', label: 'Country', width: 150 },
    { path: 'product', label: 'Product', width: 150 },
    { path: 'total', label: 'Total', width: 140, dataType: 'number', format: { style: 'currency', currency: 'USD' } },
  ];

  const arrive = (): Order => {
    const template = source[cursor++ % source.length]!;
    const order = { ...template, id: cursor, status: 'Pending', orderDate: new Date() };
    orders.set(order.id, order);
    return order;
  };

  for (let i = 0; i < 40; i++) {
    arrive();
  }

  grid.keyExpr = 'id';
  grid.autoExpandGroups = true;
  grid.selectionMode = 'multiple';
  grid.columns = columns;
  grid.summary = {
    total: [{ column: 'id', type: 'count' }, { column: 'total', type: 'sum' }],
    group: [{ column: 'total', type: 'sum', display: 'column' }],
  };
  grid.dataSource = { load: async () => ({ data: [...orders.values()] }) };

  const log = eventLog(host);
  const counter = stat();

  const step = () => {
    const add = [arrive()];
    const update: Order[] = [];
    const remove: number[] = [];

    for (const order of orders.values()) {
      if (next() > 0.08) {
        continue;
      }

      const index = PIPELINE.indexOf(order.status);

      if (order.status === 'Delivered') {
        orders.delete(order.id);
        remove.push(order.id);
      } else if (index >= 0) {
        const moved = { ...order, status: PIPELINE[index + 1]! };
        orders.set(order.id, moved);
        update.push(moved);
      }
    }

    grid.applyChanges({ add, update, remove });
    counter.textContent = \`\${orders.size} orders on screen\`;
    log.write(\`add \${add.map(order => \`#\${order.id}\`).join(', ')} · update \${update.length} · remove \${remove.length}\`);
  };

  let timer: ReturnType<typeof setInterval> | undefined = setInterval(step, 700);
  const toggle = button('Pause', () => {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
      toggle.textContent = 'Resume';
    } else {
      timer = setInterval(step, 700);
      toggle.textContent = 'Pause';
    }
  }, { className: 'primary' });

  controls(host, toggle, button('Collapse all', () => grid.collapseAllGroups()), button('Expand all', () => grid.expandAllGroups()), counter);

  return () => clearInterval(timer);
};
`;export{e as default};
