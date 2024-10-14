export type Schedule = {
  weekdays: string;
  hour: string;
};

export type Location = {
  id: number;
  title: string;
  content: string;
  opened: boolean;
  mask: 'required' | 'recommended';
  towel: 'required' | 'recommended';
  fountain: 'partial' | 'not_allowed';
  locker_room: 'allowed';
  schedules: Schedule[] | undefined;
};
