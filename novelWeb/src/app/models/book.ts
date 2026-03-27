export interface Books {
  id: number;
  title: string;
  authorId: number;
  description: string;
  status: BookStatus;
  isAlreadyRead: boolean;
  created: Date;
  updated: Date;
}

export interface BookAdd {
  title: string;
  authorId: number;
  description: string;
  status: BookStatus;
  isAlreadyRead: boolean;
}

export enum BookStatus {
  InProgress = 0,
  Completed = 1,
  Removed = 2,
  Rerun = 3,
  RerunCompleted = 4
}

export const statusDisplay = [
  { label: 'In Progress', value: BookStatus.InProgress },
  { label: 'Completed', value: BookStatus.Completed },
  { label: 'Removed', value: BookStatus.Removed },
  { label: 'Re-run', value: BookStatus.Rerun },
  { label: 'Re-run Completed', value: BookStatus.RerunCompleted }
];