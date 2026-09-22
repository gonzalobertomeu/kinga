import type { Preview } from '@storybook/react-vite';
import '../src/tokens/theme.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Kinga theme',
      toolbar: {
        title: 'Theme',
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  decorators: [
    (Story, context) => (
      <div
        data-kinga-theme={context.globals.theme ?? 'light'}
        style={{ minHeight: '100vh', padding: '1.5rem' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
