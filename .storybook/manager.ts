import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: create({
    base: 'light',
    brandTitle: 'Reservify',
    colorSecondary: '#0468FF',
    fontBase: '"Inter", sans-serif',
    textColor: '#152242',
    barSelectedColor: '#0468FF',
  }),
  sidebar: {
    showRoots: false,
  },
  selectedPanel: undefined,
  sortStoriesByKind: true,
});
