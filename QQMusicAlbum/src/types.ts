export interface IArea {
  id: number
  name: string
}

export interface IAlbum {
  area: number
  name: string
  singer: string
  release_time: string
  cover: string
}

export class Area implements IArea {
  id: number
  name: string
  el: HTMLElement

  constructor(obj: IArea) {
    this.id = obj.id
    this.name = obj.name
    this.el = null
  }
}

export class Album implements IAlbum {
  area: number
  name: string
  singer: string
  release_time: string
  cover: string
  el: HTMLElement

  constructor(obj: IAlbum) {
    this.area = obj.area
    this.name = obj.name
    this.singer = obj.singer
    this.release_time = obj.release_time
    this.cover = obj.cover
    this.el = null
  }
}