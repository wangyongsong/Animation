import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings'
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {
    ...defaultSettings
  },
  routes,
  fastRefresh: {},
});
