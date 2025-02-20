import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import calendar from 'dayjs/plugin/calendar';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Extend dayjs with plugins
dayjs.extend(relativeTime);
dayjs.extend(calendar);
dayjs.extend(localizedFormat);

export const dateTimeUtils = {
  format: (date: string | Date, format = 'LL') => {
    return dayjs(date).format(format);
  },

  fromNow: (date: string | Date) => {
    return dayjs(date).fromNow();
  },

  calendar: (date: string | Date) => {
    return dayjs(date).calendar();
  },

  isToday: (date: string | Date) => {
    return dayjs(date).isSame(dayjs(), 'day');
  },

  isBefore: (date: string | Date, compareDate: string | Date) => {
    return dayjs(date).isBefore(dayjs(compareDate));
  },

  isAfter: (date: string | Date, compareDate: string | Date) => {
    return dayjs(date).isAfter(dayjs(compareDate));
  },

  addDays: (date: string | Date, days: number) => {
    return dayjs(date).add(days, 'day').toDate();
  },

  subtractDays: (date: string | Date, days: number) => {
    return dayjs(date).subtract(days, 'day').toDate();
  },

  startOfDay: (date: string | Date) => {
    return dayjs(date).startOf('day').toDate();
  },

  endOfDay: (date: string | Date) => {
    return dayjs(date).endOf('day').toDate();
  },

  formatDateTime: (date: string | Date) => {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
  },

  formatDate: (date: string | Date) => {
    return dayjs(date).format('YYYY-MM-DD');
  },

  formatTime: (date: string | Date) => {
    return dayjs(date).format('HH:mm:ss');
  },
}; 