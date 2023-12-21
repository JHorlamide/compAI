import InboxIcon from '@mui/icons-material/MoveToInbox';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { APP_PREFIX_PATH } from './AppConfig';

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
}

export type MenuItem = {
  path: string;
  label: string;
  key: string;
  icon?: IconType;
  submenu?: MenuItem[];
};

const dashBoardNavTree: MenuItem[] = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}/dashboards`,
  label: 'Dashboard',
  icon: InboxIcon,
  submenu: []
}]

const frameworkNavTree: MenuItem[] = [{
  key: 'frameworks',
  path: `${APP_PREFIX_PATH}/frameworks`,
  label: 'Frameworks',
  icon: InboxIcon,
  submenu: [
    {
      key: 'frameworks-compliance-watchlist',
      path: `${APP_PREFIX_PATH}/frameworks/compliance-watchlist`,
      label: 'Compliance Watchlist',
      submenu: []
    },
    {
      key: 'frameworks-policy-gap-finder',
      path: `${APP_PREFIX_PATH}/frameworks/policy-gap-finder`,
      label: 'Policy Gap Finder',
      submenu: []
    },
    {
      key: 'frameworks-policy-generator',
      path: `${APP_PREFIX_PATH}/frameworks/policy-generator`,
      label: 'Policy Generator',
      submenu: []
    }
  ]
}]

const assessmentNavTree: MenuItem[] = [{
  key: 'assessment',
  path: `${APP_PREFIX_PATH}/assessment`,
  label: 'Assessment',
  icon: InboxIcon,
  submenu: [
    {
      key: 'assessment-dashboard',
      path: `${APP_PREFIX_PATH}/assessment/dashboard`,
      label: 'Assessment Dashboard',
      submenu: []
    },
    {
      key: 'assessment-create-assessment',
      path: `${APP_PREFIX_PATH}/assessment/create-assessment`,
      label: 'Create Assessment',
      submenu: []
    },
    {
      key: 'assessment-report',
      path: `${APP_PREFIX_PATH}/assessment/report`,
      label: 'Report',
      submenu: []
    }
  ]
}]

const implementationNavTree: MenuItem[] = [{
  key: 'implementation',
  path: `${APP_PREFIX_PATH}/implementation`,
  label: 'Implementation',
  icon: InboxIcon,
  submenu: []
}]

const riskManagementNavTree: MenuItem[] = [{
  key: 'risk-management',
  path: `${APP_PREFIX_PATH}/risk-management`,
  label: 'Risk Management',
  icon: InboxIcon,
  submenu: [
    {
      key: 'risk-management-dashboard',
      path: `${APP_PREFIX_PATH}/risk-management/dashboard`,
      label: 'Risk Dashboard',
      submenu: []
    },
    {
      key: 'risk-management-universal',
      path: `${APP_PREFIX_PATH}/risk-management/universal`,
      label: 'Risk Universal',
      submenu: []
    },
    {
      key: 'risk-management-control-testing',
      path: `${APP_PREFIX_PATH}/risk-management/control-testing`,
      label: 'Control Testing',
      submenu: []
    },
    {
      key: 'risk-management-risk-scenario-analysis',
      path: `${APP_PREFIX_PATH}/risk-management/risk-scenario-analysis`,
      label: 'Risk Scenario Analysis',
      submenu: []
    },
    {
      key: 'risk-management-evaluation',
      path: `${APP_PREFIX_PATH}/risk-management/evaluation`,
      label: 'Evaluation',
      submenu: []
    },
  ]
}]

const benchMarkingNavTree: MenuItem[] = [{
  key: 'benchmarking',
  path: `${APP_PREFIX_PATH}/benchmarking`,
  label: 'Benchmarking',
  icon: InboxIcon,
  submenu: [
    {
      key: 'benchmarking-against-self',
      path: `${APP_PREFIX_PATH}/benchmarking/against-self`,
      label: 'Against Self',
      submenu: []
    },
    {
      key: 'benchmarking-against-peer',
      path: `${APP_PREFIX_PATH}/benchmarking/against-peer`,
      label: 'Against Peer',
      submenu: []
    },
    {
      key: 'benchmarking-across-teams',
      path: `${APP_PREFIX_PATH}/benchmarking/across-teams`,
      label: 'Across Teams',
      submenu: []
    }
  ]
}]

const otherNavTree: MenuItem[] = [{
  key: 'others',
  path: `${APP_PREFIX_PATH}/others`,
  label: 'Others',
  icon: InboxIcon,
  submenu: [
    {
      key: 'others-incident-report',
      path: `${APP_PREFIX_PATH}/others/incident-report`,
      label: 'Incident Report',
      submenu: []
    },
    {
      key: 'others-compliant-management',
      path: `${APP_PREFIX_PATH}/others/compliant-management`,
      label: 'Compliant Management',
      submenu: []
    },
    {
      key: 'others-sentiment-analysis',
      path: `${APP_PREFIX_PATH}/others/sentiment-analysis`,
      label: 'Sentiment Analysis',
      submenu: []
    }
  ]
}]

const userManagementNavTree: MenuItem[] = [{
  key: 'user-management',
  path: `${APP_PREFIX_PATH}/user-management`,
  label: 'User Management',
  icon: InboxIcon,
  submenu: [
    {
      key: 'user-management-teams',
      path: `${APP_PREFIX_PATH}/user-management/teams`,
      label: 'Teams',
      submenu: []
    },
    {
      key: 'user-management-users',
      path: `${APP_PREFIX_PATH}/user-management/users`,
      label: 'Users',
      submenu: []
    },
    {
      key: 'user-management-roles',
      path: `${APP_PREFIX_PATH}/user-management/roles`,
      label: 'Roles',
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...dashBoardNavTree,
  ...frameworkNavTree,
  ...assessmentNavTree,
  ...implementationNavTree,
  ...riskManagementNavTree,
  ...benchMarkingNavTree,
  ...otherNavTree,
  ...userManagementNavTree,
];

export default navigationConfig;
