import { Video, Image, Address } from '@/types';

export interface Concert {
  id: string;
  title: string;
  date?: Date;
  location?: Address;
  videos?: Video[];
  images?: Image[];
  description?: string;
  eventUrl?: string;
}