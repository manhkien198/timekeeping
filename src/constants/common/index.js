import i18n from '../../translation/i18n';

export const DEFAULT_SELECTED_MENU_SIDEBAR = '/time_keeping';
export const DEFAULT_SELECTED_ADMIN = '/accept_request';
export const LOGOUT = 'logout';
export const TIME_KEEPING = '/logs/members';
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
export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const CONFIRM_LATE = '/checkin';
export const ID_DESC = 'id-DESC';
export const REFRESH_TOKEN_TIME_UNIT = 900;
export const STATUS_REQUEST= [
  {
    id:0,
    title:i18n.t('request.default')
  },
  {
    id:1,
    title:i18n.t('request.approve')
  },
  {
    id:2,
    title:i18n.t('request.unapprove')
  }
]
export const TYPE_ONLEAVE = [
  {
    id: i18n.t("type_onLeave.P",),
    title: i18n.t("type_onLeave.P"),
  },
  {
    id: i18n.t("type_onLeave.1/2P",),
    title: i18n.t("type_onLeave.1/2P"),
  },
  {
    id: i18n.t("type_onLeave.Ro",),
    title: i18n.t("type_onLeave.Ro"),
  },
  {
    id: i18n.t("type_onLeave.1/2Ro",),
    title: i18n.t("type_onLeave.1/2Ro"),
  },
  {
    id: i18n.t("type_onLeave.CO",),
    title: i18n.t("type_onLeave.CO"),
  },
  {
    id: i18n.t("type_onLeave.O",),
    title: i18n.t("type_onLeave.O"),
  },
  {
    id: i18n.t("type_onLeave.TS",),
    title: i18n.t("type_onLeave.TS"),
  },
  {
    id: i18n.t("type_onLeave.CT",),
    title: i18n.t("type_onLeave.CT"),
  },
  {
    id: i18n.t("type_onLeave.KH",),
    title: i18n.t("type_onLeave.KH"),
  },
  {
    id: i18n.t("type_onLeave.1/2KH",),
    title: i18n.t("type_onLeave.1/2KH"),
  },
  {
    id: i18n.t("type_onLeave.TG",),
    title: i18n.t("type_onLeave.TG"),
  },
  {
    id: i18n.t("type_onLeave.1/2TG",),
    title: i18n.t("type_onLeave.1/2TG"),
  },
  {
    id: i18n.t("type_onLeave.VS",),
    title: i18n.t("type_onLeave.VS"),
  },
  {
    id: i18n.t("type_onLeave.1/2VS",),
    title: i18n.t("type_onLeave.1/2VS"),
  },
  {
    id: i18n.t("type_onLeave.NS",),
    title: i18n.t("type_onLeave.NS"),
  },
  {
    id: i18n.t("type_onLeave.NB",),
    title: i18n.t("type_onLeave.NB"),
  },
  {
    id: i18n.t("type_onLeave.OT",),
    title: i18n.t("type_onLeave.OT"),
  },
]
// export const STATUS_