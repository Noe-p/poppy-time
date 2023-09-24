import { Video, Image } from '@/types';

export interface Concert {
  id: string;
  title: string;
  videos?: Video[];
  images?: Image[];
  description?: string;
}