export interface IArea {
  id: number;
  name: string;
}

export interface IAlbum {
  id: number;
  area: number;
  name: string;
  singer: string;
  release_time: string;
  cover: string;
}
