export interface Book {
  id: number;
  title: string;
  authorId: number;
  description: string;
  isCompleted: boolean;
  isAlreadyRead: boolean;
  created: Date;
  updated: Date;
}

export interface BookAdd{
  title: string;
  authorId: number;
  description: string;
  isCompleted: boolean;
  isAlreadyRead: boolean;
}