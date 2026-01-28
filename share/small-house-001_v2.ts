// @ts-nocheck

let size = 0;
let blockNumber = 0;
let shrink = 0;

// main
player.onChat("house", function () {
  player.say("家の大きさや位置（原点）を決めます");
  size = 6;
  builder.face(NORTH);
  builder.move(FORWARD, 10);
  builder.setOrigin();
  // ===== 1階の床 =====
  player.say("1階の床を作ります");
  blockNumber = LIGHT_GRAY_CONCRETE;
  floor(size, blockNumber);
  // ===== 家の壁（2〜4段目）=====
  player.say("家の壁（2〜4段目）を作ります");
  builder.teleportToOrigin();
  builder.move(UP, 1);
  blockNumber = WHITE_CONCRETE;
  wall(size, blockNumber);
  // ===== 家の屋根 =====
  player.say("家の屋根を作ります");
  builder.teleportToOrigin();
  builder.move(UP, 4);
  blockNumber = PLANKS_DARK_OAK;
  roof(size, blockNumber);
  // ===== 窓 =====
  player.say("窓を作ります");
  builder.teleportToOrigin();
  builder.move(UP, 2);
  blockNumber = GLASS_PANE;
  window(size, blockNumber);
  // ===== エクステリア =====
  player.say("エクステリアを作ります");
  builder.teleportToOrigin();
  blockNumber = DARK_OAK_FENCE;
  exterior(size, blockNumber);
  // ===== 玄関 =====
  player.say("玄関を作ります");
  builder.teleportToOrigin();
  entrance(size);
});

// floor
function floor(size: number, blockNumber: number) {
  for (let index = 0; index < size / 2; index++) {
    for (let index = 0; index < size; index++) {
      builder.place(blockNumber);
      builder.move(FORWARD, 1);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, 1);
    for (let index = 0; index < size; index++) {
      builder.place(blockNumber);
      builder.move(BACK, 1);
    }
    builder.move(RIGHT, 1);
    builder.move(FORWARD, 1);
  }
}

// wall
function wall(size: number, blockNumber: number) {
  // 2〜4段目（合計3段）
  for (let index = 0; index < 3; index++) {
    // 1周ぶん壁を作る
    for (let index = 0; index < 4; index++) {
      for (let index = 0; index < size - 1; index++) {
        builder.place(blockNumber);
        builder.move(FORWARD, 1);
      }
      builder.turn(RIGHT_TURN);
    }
    builder.move(UP, 1);
  }
}

// roof
function roof(size: number, blockNumber: number) {
  shrink = 0;
  for (let index = 0; index < 2; index++) {
    for (let index = 0; index < 4; index++) {
      for (let index = 0; index < size - shrink - 1; index++) {
        builder.place(blockNumber);
        builder.move(FORWARD, 1);
      }
      builder.turn(RIGHT_TURN);
    }
    builder.move(UP, 1);
    builder.move(FORWARD, 1);
    builder.move(RIGHT, 1);
    shrink += 2;
  }
  // ===== 屋根のふた =====
  player.say("屋根のふたを作ります");
  floor(size - shrink, blockNumber);
}

// window
function window(size: number, blockNumber: number) {
  for (let index = 0; index < Math.floor(size / 3) - 1; index++) {
    for (let index = 0; index < 2; index++) {
      builder.move(RIGHT, 1);
      builder.place(blockNumber);
    }
    builder.move(RIGHT, 1);
  }
}

// exterior
function exterior(size: number, blockNumber: number) {
  builder.move(BACK, 1);
  for (let index = 0; index < size; index++) {
    builder.place(blockNumber);
    builder.move(RIGHT, 1);
  }
}

// entrance
function entrance(size: number) {
  builder.move(BACK, 1);
  builder.move(RIGHT, size - 2);
  builder.place(blocks.blockWithData(QUARTZ_STAIRS, 3));
  builder.move(UP, 1);
  builder.move(FORWARD, 1);
  builder.place(blocks.blockWithData(DARK_OAK_DOOR, 1));
}
