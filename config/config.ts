import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    ...defaultSettings,
  },
  routes,
  fastRefresh: {},
  history: {
    type: 'hash',
  },
  base: '/Animation/',
  publicPath: '/Animation/',
  ghPages: {
    useCDN: true,
    // branch: 'gh-pages',
    // silent: true,
    // repo: `https://${process.env.GH_TOKEN}@github.com/Animation.git`,
  },
});
