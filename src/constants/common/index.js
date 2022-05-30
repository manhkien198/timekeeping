import i18n from '../../translation/i18n';

export const DEFAULT_SELECTED_MENU_SIDEBAR = '/time_keeping';
export const DEFAULT_SELECTED_ADMIN = '/accept_request';
export const LOGOUT = 'logout';
export const TIME_KEEPING = '/api/v1/logs/members'
export const TIME_OPTIONS = [
  {
    id: 0,
    title: i18n.t('edit.hours'),
  },
  {
    id: 1,
    title: i18n.t('edit.days'),
  },
  {
    id: 2,
    title: i18n.t('edit.weeks'),
  },
];
export const ACCEPT_REQUEST_ADMIN = '/checkin';
export const TIME_KEEPING_ADMIN = '/logs';
export const DEFAULT_PAGE=1;
export const DEFAULT_LIMIT = 10;
export const CONFIRM_LATE = '/api/v1/checkin'
