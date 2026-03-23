// @ts-nocheck

let bridgeMainBlock = 0;
let ballastBlock = 0;
let underRailBlock = 0;
let rail = 0;
let step = 0;
let poweredRail = 0;
let redStone = 0;

// メイン
player.onChat("railway", function () {
  bridgeMainBlock = IRON_BLOCK;
  ballastBlock = COBBLESTONE_SLAB;
  underRailBlock = COBBLESTONE;
  rail = RAIL;
  poweredRail = POWERED_RAIL;
  redStone = REDSTONE_BLOCK;
  builder.move(FORWARD, 10);
  bridge(7, 5, 20, "start");
  builder.move(FORWARD, 20);
  bridge(7, 5, 20, "");
  builder.move(FORWARD, 20);
  bridge(7, 5, 20, "end");
});

// 橋
function bridge(width: number, height: number, length: number, end: string) {
  builder.setOrigin();
  bridgePier(width, height, length);
  makeRect(width, height, length);
  rail2(width, height, length, end);
}

// 橋脚
function bridgePier(width: number, height: number, length: number) {
  builder.setOrigin();
  for (let index = 0; index < 2; index++) {
    for (let index = 0; index < height; index++) {
      builder.place(bridgeMainBlock);
      builder.move(UP, 1);
    }
    builder.move(RIGHT, width - 1);
    for (let index = 0; index < height; index++) {
      builder.move(DOWN, 1);
      builder.place(bridgeMainBlock);
    }
    builder.move(LEFT, width - 1);
    builder.move(FORWARD, length - 1);
  }
  builder.teleportToOrigin();
}

// 四角
function makeRect(width: number, height: number, length: number) {
  builder.setOrigin();
  builder.move(UP, height);
  step = 1;
  for (let count = 0; count <= width - 1; count++) {
    for (let index = 0; index < length; index++) {
      if (count == 0 || count == width - 1) {
        builder.place(bridgeMainBlock);
        builder.move(UP, 1);
        builder.place(bridgeMainBlock);
        builder.move(DOWN, 1);
      } else {
        builder.place(bridgeMainBlock);
        builder.move(UP, 1);
        builder.place(ballastBlock);
        builder.move(DOWN, 1);
      }
      builder.move(FORWARD, step);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, step);
    step = step * -1;
  }
  builder.teleportToOrigin();
}

// レールを敷く
function rail2(width: number, height: number, length: number, end: string) {
  builder.setOrigin();
  builder.move(UP, height + 1);
  builder.move(RIGHT, 2);
  for (let index = 0; index < 2; index++) {
    for (let count = 0; count <= length - 1; count++) {
      if (count % 10 == 3 || count % 10 == 4) {
        builder.place(redStone);
        builder.move(UP, 1);
        builder.place(poweredRail);
        builder.move(DOWN, 1);
        builder.move(FORWARD, 1);
      } else {
        builder.place(underRailBlock);
        builder.move(UP, 1);
        builder.place(rail);
        builder.move(DOWN, 1);
        builder.move(FORWARD, 1);
      }
    }
    builder.move(RIGHT, 2);
    builder.move(BACK, length);
  }
  builder.teleportToOrigin();
  if (end == "start") {
    railStart(width, height, length);
  } else if (end == "end") {
    railEnd(width, height, length);
  }
}

// 開始のレール
function railStart(width: number, height: number, length: number) {
  builder.setOrigin();
  builder.move(UP, height + 1);
  for (let index = 0; index < width - 2; index++) {
    builder.move(RIGHT, 1);
    builder.place(AIR);
    loops.pause(100);
    builder.place(bridgeMainBlock);
  }
  builder.move(FORWARD, 1);
  for (let index = 0; index < width - 2; index++) {
    builder.place(ballastBlock);
    builder.move(LEFT, 1);
  }
  builder.move(FORWARD, 1);
  builder.move(RIGHT, 3);
  builder.place(underRailBlock);
  builder.move(UP, 1);
  builder.place(rail);
  builder.teleportToOrigin();
}

// 終わりのレール
function railEnd(width: number, height: number, length: number) {
  builder.setOrigin();
  builder.move(UP, height + 1);
  builder.move(FORWARD, length - 1);
  for (let index = 0; index < width - 2; index++) {
    builder.move(RIGHT, 1);
    builder.place(AIR);
    loops.pause(100);
    builder.place(bridgeMainBlock);
  }
  builder.move(BACK, 1);
  for (let index = 0; index < width - 2; index++) {
    builder.place(ballastBlock);
    builder.move(LEFT, 1);
  }
  builder.move(BACK, 1);
  builder.move(RIGHT, 3);
  builder.place(underRailBlock);
  builder.move(UP, 1);
  builder.place(rail);
  builder.teleportToOrigin();
}
