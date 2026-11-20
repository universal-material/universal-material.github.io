const n=`import '@universal-material/data-grid';
import type { GridColumnAlignment, GridColumnDef } from '@universal-material/data-grid';

import { checkbox, controls, createGrid, select } from '../shared/controls.js';
import { random } from '../shared/data.js';

export const meta = {
  title: 'Wrapping, alignment, empty values and boolean icons',
  description: 'Long text is cut with an ellipsis (hover shows it all) unless the column has \`wrap\`. \`alignment\` is logical (\`end\` is the left edge in RTL). \`emptyText\` fills \`null\` values and \`booleanDisplay: \\'icon\\'\` draws a check or a cross whose accessible name is the translated text.',
};

interface Task {
  id: number;
  title: string;
  notes: string | null;
  assignee: string | null;
  estimate: number | null;
  done: boolean;
}

const NOTES = [
  'Waiting for the design review before the next step.',
  'Needs a second pair of eyes: the edge cases around time zones and daylight saving time are not covered by the current tests.',
  null,
  'Blocked by the API change.',
  'Split into two smaller tasks after the planning meeting; the first one is already merged and the second one is in review.',
];

const makeTasks = (count: number): Task[] => {
  const next = random(5);
  const people = ['Ana', 'Hiro', 'Laura', 'Omar', null];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: \`Task \${i + 1}\`,
    notes: NOTES[Math.floor(next() * NOTES.length)]!,
    assignee: people[Math.floor(next() * people.length)]!,
    estimate: next() < 0.2 ? null : Math.ceil(next() * 16),
    done: next() < 0.4,
  }));
};

export default (host: HTMLElement) => {
  const grid = createGrid(host, 420);
  const options = { wrap: true, alignment: 'start' as GridColumnAlignment, icon: true };

  // Columns are plain objects: build a new array to change an option.
  const columns = (): GridColumnDef<Task>[] => [
    { path: 'title', label: 'Title', width: 110 },
    { path: 'notes', label: 'Notes', minWidth: 260, wrap: options.wrap, emptyText: 'No notes' },
    { path: 'assignee', label: 'Assignee', width: 130, alignment: options.alignment, emptyText: 'Unassigned' },
    { path: 'estimate', label: 'Hours', width: 100, dataType: 'number', alignment: options.alignment, emptyText: '—' },
    { path: 'done', label: 'Done', width: 90, dataType: 'boolean', booleanDisplay: options.icon ? 'icon' : 'text' },
  ];

  grid.keyExpr = 'id';
  grid.columns = columns();
  grid.items = makeTasks(60);

  controls(host,
    checkbox('Wrap notes', options.wrap, value => {
      options.wrap = value;
      grid.columns = columns();
    }),
    select<GridColumnAlignment>('Align assignee and hours', ['start', 'center', 'end'], options.alignment, value => {
      options.alignment = value;
      grid.columns = columns();
    }),
    checkbox('Boolean as icon', options.icon, value => {
      options.icon = value;
      grid.columns = columns();
    }));
};
`;export{n as default};
