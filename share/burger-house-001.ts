// @ts-nocheck

let blockNumber = 0;

// main
player.onChat("burger", function () {
  player.say("原点を設定します");
  builder.teleportTo(pos(0, 0, 0));
  builder.face(NORTH);
  builder.move(FORWARD, 10);
  builder.setOrigin();
  blockNumber = BLOCK_OF_QUARTZ;
  makeCircle1(1);
  builder.teleportToOrigin();
  blockNumber = HARDENED_CLAY;
  makeCircle2(1);
  builder.teleportToOrigin();
  builder.move(UP, 1);
  makeCircle3(1);
  builder.teleportToOrigin();
  builder.move(UP, 2);
  makeCircle4(1);
  builder.teleportToOrigin();
  builder.move(UP, 3);
  blockNumber = BROWN_WOOL;
  makeCircle3(1);
  builder.teleportToOrigin();
  builder.move(UP, 4);
  blockNumber = YELLOW_CONCRETE;
  makeCircle4(1);
  builder.teleportToOrigin();
  builder.move(UP, 5);
  blockNumber = LIME_STAINED_GLASS;
  makeCircle3(1);
  builder.teleportToOrigin();
  builder.move(UP, 6);
  blockNumber = HARDENED_CLAY;
  makeCircle4(1);
  builder.teleportToOrigin();
  builder.move(UP, 7);
  makeCircle3(1);
  builder.teleportToOrigin();
  builder.move(UP, 8);
  makeCircle2(1);
  builder.teleportToOrigin();
  builder.move(UP, 8);
  makeCircle1(1);
  player.say("玄関を作ります");
  builder.teleportToOrigin();
  builder.move(BACK, 5);
  entrance();
});

// circle 1
function makeCircle1(height: number) {
  builder.place(blockNumber);
  builder.move(BACK, 3);
  for (let index = 0; index < 4; index++) {
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, -1);
    for (let index = 0; index < 3; index++) {
      builder.place(blockNumber);
      builder.shift(0, 0, 1);
    }
    builder.shift(1, 0, -3);
    for (let index = 0; index < 4; index++) {
      builder.place(blockNumber);
      builder.shift(0, 0, 1);
    }
    builder.shift(1, 0, -1);
    builder.turn(RIGHT_TURN);
  }
}

// circle 2
function makeCircle2(height: number) {
  builder.move(BACK, 4);
  for (let index = 0; index < 4; index++) {
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.turn(RIGHT_TURN);
  }
}

// circle 3
function makeCircle3(height: number) {
  builder.move(BACK, 5);
  for (let index = 0; index < 4; index++) {
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 1);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(1, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.turn(RIGHT_TURN);
  }
}

// circle 4
function makeCircle4(height: number) {
  builder.move(BACK, 6);
  for (let index = 0; index < 4; index++) {
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 1);
    builder.place(blockNumber);
    builder.shift(0, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(1, 0, 1);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.place(blockNumber);
    builder.shift(1, 0, 0);
    builder.turn(RIGHT_TURN);
  }
}

// entrance
function entrance() {
  player.say("階段を置きます");
  builder.place(blocks.blockWithData(QUARTZ_STAIRS, 3));
  builder.move(FORWARD, 1);
  builder.place(BLOCK_OF_QUARTZ);
  player.say("穴を開けます");
  builder.move(BACK, 1);
  builder.move(UP, 1);
  builder.place(AIR);
  builder.move(BACK, 1);
  builder.move(UP, 1);
  builder.place(AIR);
  player.say("ドアとライトを置きます");
  builder.move(DOWN, 1);
  builder.move(FORWARD, 1);
  builder.place(blocks.blockWithData(DARK_OAK_DOOR, 1));
  builder.move(UP, 1);
  builder.move(RIGHT, 1);
  builder.place(HARDENED_CLAY);
  builder.move(BACK, 1);
  builder.place(OCHRE_FROGLIGHT);
  builder.move(LEFT, 2);
  builder.place(OCHRE_FROGLIGHT);
  builder.move(FORWARD, 1);
  builder.place(HARDENED_CLAY);
}
