export class Area {
    id;
    name;
    el;
    constructor(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this.el = null;
    }
}
export class Album {
    area;
    name;
    singer;
    release_time;
    cover;
    el;
    constructor(obj) {
        this.area = obj.area;
        this.name = obj.name;
        this.singer = obj.singer;
        this.release_time = obj.release_time;
        this.cover = obj.cover;
        this.el = null;
    }
}
//# sourceMappingURL=types.js.map