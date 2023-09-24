import { Image, Video } from './Media';

export interface Musician {
  id:string;
  description: string[];
  name: string;
  image: Image;
  video: Video;
}