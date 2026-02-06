// @ts-nocheck

let xx = 0;
let posX = 0;
let zz = 0;
let posZ = 0;
let rr = 0;
let flag = false;
let blockNumber = 0;
let placeZ = 0;
let minR = 0;
let r = 0;
let sideLength = 0;

// circle
player.onChat("circle", function () {
  builder.teleportTo(pos(0, 0, 0));
  builder.move(FORWARD, 20);
  builder.setOrigin();
  blockNumber = GLASS;
  makeCircle(5);
  builder.teleportToOrigin();
  builder.move(UP, 1);
  makeCircle(4);
  builder.teleportToOrigin();
  builder.move(UP, 1);
  makeCircle(3);
});

// sphere
player.onChat("sphere", function () {
  builder.teleportTo(pos(0, 0, 0));
  builder.move(FORWARD, 20);
  builder.setOrigin();
  blockNumber = GLASS;
  placeZ = 0;
  minR = 4;
  for (let index = 0; index < 4; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    minR = minR + 1;
    placeZ = placeZ + 1;
  }
  for (let index = 0; index < 6; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    placeZ = placeZ + 1;
  }
  minR = minR - 1;
  for (let index = 0; index < 4; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    minR = minR - 1;
    placeZ = placeZ + 1;
  }
  player.runChatCommand("water");
});

// water
player.onChat("water", function () {
  player.say("水を入れます。");
  blockNumber = WATER;
  placeZ = 1;
  minR = 4;
  for (let index = 0; index < 3; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    minR = minR + 1;
    placeZ = placeZ + 1;
  }
  for (let index = 0; index < 6; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    placeZ = placeZ + 1;
  }
  minR = minR - 1;
  for (let index = 0; index < 3; index++) {
    builder.teleportToOrigin();
    builder.move(UP, placeZ);
    makeCircle(minR);
    minR = minR - 1;
    placeZ = placeZ + 1;
  }
  player.runChatCommand("aquarium");
});

// aquarium
player.onChat("aquarium", function () {
  player.say("魚を入れます。");
  builder.teleportToOrigin();
  for (let カウンター = 0; カウンター <= 7; カウンター++) {
    builder.move(UP, 1);
    mobs.spawn(TROPICAL_FISH, builder.position());
  }
  player.runChatCommand("light");
});

// light
player.onChat("light", function () {
  player.say("ライトを付けます。");
  blockNumber = OCHRE_FROGLIGHT;
  placeZ = 1;
  minR = 4;
  builder.teleportToOrigin();
  builder.move(UP, placeZ);
  makeCircle(minR);
});

// 円を作る関数
function makeCircle(半径: number) {
  r = 半径;
  rr = r * r;
  flag = false;
  player.say("開始位置に移動します");
  builder.shift(r * 1, 0, r * 1);
  posX = r * -1;
  posZ = r * -1;
  player.say("1辺の長さ");
  sideLength = r * 2 + 1;
  player.say("1辺ごとに円を描いていきます");
  for (let index = 0; index < sideLength; index++) {
    for (let index = 0; index < sideLength; index++) {
      checkDistance();
      if (flag) {
        builder.place(blockNumber);
      }
      builder.move(RIGHT, 1);
      posX += 1;
    }
    player.say("次の行の開始位置に移動します");
    builder.move(LEFT, sideLength);
    builder.move(BACK, 1);
    posX = r * -1;
    posZ += 1;
  }
}

// ピタゴラスの定理を利用してブロックが円の範囲に置けるかチェックする関数
function checkDistance() {
  xx = posX * posX;
  zz = posZ * posZ;
  if (xx + zz < rr) {
    flag = true;
  } else {
    flag = false;
  }
}

// ピタゴラスの定理を利用してブロックが円の範囲に置けるかチェックする関数2
// 円周のみにする場合
function checkDistance2() {
  xx = posX * posX;
  zz = posZ * posZ;
  if (xx + zz < rr && xx + zz >= (r - 1) * (r - 1)) {
    flag = true;
  } else {
    flag = false;
  }
}
