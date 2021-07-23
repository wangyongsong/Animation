import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  fixedHeader: true,
  navTheme: 'dark',
  layout: 'top',
  headerHeight: 48,
  contentWidth: 'Fluid',
  primaryColor: '#1890ff',
  title: 'Animation',
  // pwa: false,
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  iconfontUrl: '',
};

export default Settings;
