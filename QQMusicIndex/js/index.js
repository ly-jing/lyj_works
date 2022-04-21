async function show_1() {
  const requestURL = "../task.json";
  const request = new Request(requestURL);

  const response = await fetch(request);
  const playLists = await response.json();
  showPlayList(playLists);
}

function showPlayList(obj) {
  const section_1 = document.getElementById("playlist_item_box");
  const list1s = obj["playlist"];

  for (const list1 of list1s) {
    const mySection = document.createElement("section");

    // 创建图片
    const myDivCover = document.createElement("div");
    const myACover = document.createElement("a");
    const myCover = document.createElement("img");
    // 创建播放
    const myDivCoverMask = document.createElement("div");
    const myCoverMask = document.createElement("img");
    // 创建描述文字
    const myADes = document.createElement("a");
    const myNum = document.createElement("p");

    // 赋值
    myCover.src = list1.cover;
    myCover.className = "playlist_item_cover";

    myDivCoverMask.className = "playlist_item_cover_mask";
    myCoverMask.className = "playlist_item_cover_play";
    myCoverMask.src = "../imgs/cover_play.png";

    myADes.textContent = list1.title;
    myADes.className = "playlist_item_title";
    myNum.textContent = `播放量: ${list1.listen_num}`;
    myACover.href = "#";
    myADes.href = "#";

    // 添加
    mySection.appendChild(myDivCover);
    myDivCover.appendChild(myACover);
    myACover.appendChild(myCover);

    myACover.appendChild(myDivCoverMask);
    myDivCoverMask.appendChild(myCoverMask);

    mySection.appendChild(myADes);
    mySection.appendChild(myNum);

    section_1.appendChild(mySection);
  }
}

show_1();

async function show_2() {
  const requestURL2 = "../task.json";
  const request2 = new Request(requestURL2);

  const response2 = await fetch(request2);
  const songLists = await response2.json();
  showSongList(songLists);
}

function showSongList(obj2) {
  const section_2 = document.getElementById("songlist_item_box");
  const list2s = obj2["songlist"];

  for (const list2 of list2s) {
    const songlist_item = document.createElement("section");

    // 创建图片
    const songlist_item_cover_a = document.createElement("a");
    const songlist_item_content = document.createElement("div");
    const songlist_item_cover = document.createElement("img");

    const songlist_item_cover_mask = document.createElement("i");
    const songlist_item_cover_play = document.createElement("img");
    const songlist_item_contentleft = document.createElement("div");
    const songlist_item_title = document.createElement("h3");
    const songlist_item_name = document.createElement("a");
    const songlist_item_subtitle = document.createElement("a");
    const songlist_item_br = document.createElement("br");
    const songlist_item_singer_a = document.createElement("a");
    const songlist_item_singers = document.createElement("ul");
    const songlist_item_interval = document.createElement("a");

    // 赋值

    songlist_item.className = "songlist_item";

    songlist_item_cover_a.href = "#";
    songlist_item_cover_a.className = "songlist_item_cover_a";
    songlist_item_content.className = "songlist_item_content";
    songlist_item_cover.className = "songlist_item_cover";
    songlist_item_cover.src = list2.cover;

    songlist_item_cover_mask.className = "songlist_item_cover_mask";
    songlist_item_cover_play.className = "songlist_item_cover_play";
    songlist_item_cover_play.src = "../imgs/cover_play.png";
    songlist_item_contentleft.className = "songlist_item_contentleft";

    songlist_item_title.className = "songlist_item_title";
    songlist_item_singer_a.className = "songlist_item_singer_a";
    songlist_item_singer_a.href = "#";
    songlist_item_singers.className = "songlist_item_singers";
    // songlist_item_singer.textContent = list2.singer;
    songlist_item_contentleft.className = "songlist_item_contentleft";

    songlist_item_name.className = "songlist_item_name";
    songlist_item_name.textContent = list2.name;
    songlist_item_name.href = "#";

    songlist_item_subtitle.className = "songlist_item_subtitle";
    songlist_item_subtitle.href = "#";
    songlist_item_subtitle.textContent = list2.subtitle;

    songlist_item_interval.className = "songlist_item_interval";
    songlist_item_interval.href = "#";
    songlist_item_interval.textContent = list2.interval;

    // 添加
    songlist_item.appendChild(songlist_item_cover_a);
    songlist_item.appendChild(songlist_item_content);

    songlist_item_cover_a.appendChild(songlist_item_cover);
    songlist_item_cover_a.appendChild(songlist_item_cover_mask);
    songlist_item_cover_a.appendChild(songlist_item_cover_play);

    songlist_item_content.appendChild(songlist_item_contentleft);
    songlist_item_content.appendChild(songlist_item_interval);

    songlist_item_contentleft.appendChild(songlist_item_title);
    songlist_item_contentleft.appendChild(songlist_item_br);
    songlist_item_contentleft.appendChild(songlist_item_singer_a);
    songlist_item_singer_a.appendChild(songlist_item_singers);

    songlist_item_title.appendChild(songlist_item_name);
    songlist_item_title.appendChild(songlist_item_subtitle);

    const singers = list2.singer;
    for (const singer of singers) {
      const songlist_item_singer = document.createElement("li");
      songlist_item_singer.className = "songlist_item_singer";
      // 判断歌手数
      const number = singers.length;
      if (number > 1) {
        songlist_item_singer.textContent = ` \r  ${singer} \r /`;
      } else {
        songlist_item_singer.textContent = singer;
      }
      songlist_item_singers.appendChild(songlist_item_singer);
    }

    section_2.appendChild(songlist_item);
  }
}

show_2();

async function show_3() {
  const requestURL3 = "../task.json";
  const request3 = new Request(requestURL3);

  const response3 = await fetch(request3);
  const mvLists = await response3.json();
  showMvList(mvLists);
}

function showMvList(obj3) {
  const section_3 = document.getElementById("mvlist_item_box");
  const list3s = obj3["mvlist"];

  for (const list3 of list3s) {
    const mvlist_item = document.createElement("div");

    // 创建
    const mvlist_item_cover_a = document.createElement("a");
    const mvlist_item_title_a = document.createElement("a");
    const mvlist_item_singer = document.createElement("a");
    const mvlist_item_listen = document.createElement("div");

    const mvlist_item_cover = document.createElement("img");
    const mvlist_item_cover_mask = document.createElement("i");
    const mvlist_item_cover_play = document.createElement("img");

    const mvlist_item_title = document.createElement("div");

    const mvlist_item_listen_num = document.createElement("div");
    const mvlist_item_listen_icon = document.createElement("img");

    // 赋值

    mvlist_item.className = "mvlist_item";

    mvlist_item_cover_a.href = "#";
    mvlist_item_cover_a.className = "mvlist_item_cover_a";
    mvlist_item_cover.className = "mvlist_item_cover";
    mvlist_item_cover.src = list3.cover;
    mvlist_item_cover_mask.className = "mvlist_item_cover_mask";
    mvlist_item_cover_play.className = "mvlist_item_cover_play";
    mvlist_item_cover_play.src = "../imgs/cover_play.png";

    mvlist_item_title_a.className = "mvlist_item_title_a";
    mvlist_item_title_a.href = "#";
    mvlist_item_title.className = "mvlist_item_title";
    mvlist_item_title.textContent = list3.title;

    mvlist_item_singer.className = "mvlist_item_singer";
    mvlist_item_singer.href = "#";
    mvlist_item_singer.textContent = list3.singer;

    mvlist_item_listen_num.className = "mvlist_item_listen_num";
    mvlist_item_listen_num.textContent = list3.listen_num;

    mvlist_item_listen_icon.className = "mvlist_item_listen_icon";
    mvlist_item_listen_icon.src = "../imgs/icon_listen.png";

    // 添加
    mvlist_item.appendChild(mvlist_item_cover_a);
    mvlist_item.appendChild(mvlist_item_title_a);
    mvlist_item.appendChild(mvlist_item_singer);
    mvlist_item.appendChild(mvlist_item_listen);

    mvlist_item_cover_a.appendChild(mvlist_item_cover);
    mvlist_item_cover_a.appendChild(mvlist_item_cover_mask);
    mvlist_item_cover_a.appendChild(mvlist_item_cover_play);

    mvlist_item_title_a.appendChild(mvlist_item_title);

    mvlist_item_listen.appendChild(mvlist_item_listen_icon);
    mvlist_item_listen.appendChild(mvlist_item_listen_num);

    section_3.appendChild(mvlist_item);
  }
}

show_3();
