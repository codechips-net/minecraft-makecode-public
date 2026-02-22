// @ts-nocheck

let xx = 0;
let posX = 0;
let zz = 0;
let posZ = 0;
let rr = 0;
let r = 0;
let flag = false;
let sideLength = 0;
let blockNumber = 0;
let step = 0;

// castle
player.onChat("castle", function () {
  builder.teleportTo(pos(0, 0, 0));
  builder.move(FORWARD, 20);
  builder.setOrigin();
  player.say("庭を作ります");
  blockNumber = BRICKS;
  builder.teleportToOrigin();
  makeCircle(13, false);
  builder.teleportToOrigin();
  blockNumber = GRASS;
  makeCircle(12, true);
  blockNumber = AZALEA;
  makeCircle(12, false);
  builder.teleportToOrigin();
  blockNumber = BRICKS;
  makeCircle(10, true);
  player.say("建物を作ります");
  blockNumber = BLOCK_OF_QUARTZ;
  builder.teleportToOrigin();
  builder.move(UP, 1);
  for (let index = 0; index < 4; index++) {
    makeCircle(9, false);
  }
  makeCircle(10, true);
  for (let index = 0; index < 4; index++) {
    makeCircle(9, false);
  }
  makeCircle(10, true);
  player.say("屋根を作ります");
  blockNumber = PRISMARINE_BRICKS;
  makeCircle(9, false);
  makeCircle(8, false);
  makeCircle(7, false);
  makeCircle(6, false);
  makeCircle(5, false);
  makeCircle(4, false);
  makeCircle(3, true);
  makeCircle(2, true);
  makeCircle(1, true);
  player.say("窓を作ります");
  blockNumber = BLOCK_OF_QUARTZ;
  builder.teleportToOrigin();
  builder.move(UP, 1);
  builder.move(BACK, 9);
  builder.move(LEFT, 1);
  entrance();
  builder.move(LEFT, 1);
  builder.move(FORWARD, 1);
  builder.place(blocks.blockWithData(DARK_OAK_DOOR, 3));
  player.say("2階の窓を作ります");
  builder.teleportToOrigin();
  builder.move(UP, 6);
  builder.move(BACK, 9);
  builder.move(LEFT, 1);
  entrance();
  builder.move(LEFT, 1);
  builder.move(FORWARD, 1);
  builder.place(GLASS_PANE);
  builder.move(UP, 1);
  builder.place(GLASS_PANE);
  player.say("入場口を作ります");
  builder.teleportToOrigin();
  builder.move(UP, 1);
  builder.move(LEFT, 1);
  builder.move(BACK, 11);
  for (let index = 0; index < 3; index++) {
    builder.place(AIR);
    builder.move(RIGHT, 1);
  }
  builder.teleportToOrigin();
  builder.move(LEFT, 1);
  builder.move(BACK, 13);
  blockNumber = BRICKS;
  makeRect(3, 5);
  builder.teleportToOrigin();
  builder.move(BACK, 14);
  builder.move(LEFT, 1);
  blockNumber = blocks.blockWithData(BRICK_STAIRS, 3);
  makeRect(3, 1);
});

// ピタゴラスの定理を利用してブロックが円の範囲に置けるかチェックする関数2
// 円周のみにする場合
function checkDistance() {
  xx = posX * posX;
  zz = posZ * posZ;
  if (xx + zz < rr && xx + zz >= (r - 1) * (r - 1)) {
    flag = true;
  } else {
    flag = false;
  }
}

// ピタゴラスの定理を利用してブロックが円の範囲に置けるかチェックする関数
function checkDistanceFill() {
  xx = posX * posX;
  zz = posZ * posZ;
  if (xx + zz < rr) {
    flag = true;
  } else {
    flag = false;
  }
}

// 円を作る関数
function makeCircle(半径: number, fill: boolean) {
  r = 半径;
  rr = r * r;
  flag = false;
  player.say("四角の左上隅（開始位置）に移動します");
  builder.shift(r * 1, 0, r * 1);
  posX = r * -1;
  posZ = r * -1;
  player.say("1辺の長さを計算します");
  sideLength = r * 2 + 1;
  player.say("四角の中に円を描きます");
  for (let index = 0; index < sideLength; index++) {
    for (let index = 0; index < sideLength; index++) {
      if (fill) {
        checkDistanceFill();
      } else {
        checkDistance();
      }
      if (flag) {
        builder.place(blockNumber);
      }
      builder.move(RIGHT, 1);
      posX += 1;
    }
    player.say("次の行の左端に移動します");
    builder.move(LEFT, sideLength);
    builder.move(BACK, 1);
    posX = r * -1;
    posZ += 1;
  }
  player.say("円の中心に移動して上に1段移動します");
  builder.move(FORWARD, r + 1);
  builder.move(RIGHT, r);
  builder.move(UP, 1);
}
function makeRect(width: number, depth: number) {
  step = 1;
  for (let index = 0; index < width; index++) {
    for (let index = 0; index < depth; index++) {
      builder.place(blockNumber);
      builder.move(FORWARD, step);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, step);
    step = step * -1;
  }
}

// entrance
function entrance() {
  for (let index = 0; index < 2; index++) {
    builder.place(blockNumber);
    builder.move(UP, 1);
  }
  builder.place(blocks.blockWithData(QUARTZ_STAIRS, 0));
  builder.move(RIGHT, 1);
  builder.place(blockNumber);
  builder.move(RIGHT, 1);
  builder.place(blocks.blockWithData(QUARTZ_STAIRS, 1));
  for (let index = 0; index < 2; index++) {
    builder.move(DOWN, 1);
    builder.place(blockNumber);
  }
}
