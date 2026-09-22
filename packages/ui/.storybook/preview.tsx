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
    (Story, context) => {
      // Theme the whole canvas (background + type) rather than a sized wrapper,
      // so stories keep their natural height.
      document.body.dataset.kingaTheme = context.globals.theme ?? 'light';
      return (
        <div style={{ padding: '1.5rem' }}>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
