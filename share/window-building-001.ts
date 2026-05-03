// @ts-nocheck

let blockNumber2 = 0;
let blockNumber = 0;
let blockNumber3 = 0;
let direction = 0;
let count = 0;

// main
player.onChat("run", function () {
  builder.move(FORWARD, 10);
  blockNumber = STONE_BRICKS;
  blockNumber2 = CHISELED_QUARTZ_BLOCK;
  blockNumber3 = GLASS_PANE;
  for (let index = 0; index < 5; index++) {
    floor(19, 12);
    builder.move(UP, 1);
    wall(19, 12);
    for (let index = 0; index < 2; index++) {
      builder.move(UP, 1);
      wall2(19, 12);
    }
    builder.move(UP, 1);
    wall(19, 12);
    builder.move(UP, 1);
  }
  floor(19, 12);
});

// floor
function floor(width: number, depth: number) {
  builder.setOrigin();
  direction = 1;
  for (let index = 0; index < width; index++) {
    for (let index = 0; index < depth; index++) {
      builder.place(blockNumber);
      builder.move(FORWARD, direction);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, direction);
    direction = direction * -1;
  }
  builder.teleportToOrigin();
}

// wall
function wall(width: number, depth: number) {
  for (let index = 0; index < 2; index++) {
    for (let index = 0; index < depth - 1; index++) {
      builder.place(blockNumber2);
      builder.move(FORWARD, 1);
    }
    builder.turn(RIGHT_TURN);
    for (let index = 0; index < width - 1; index++) {
      builder.place(blockNumber2);
      builder.move(FORWARD, 1);
    }
    builder.turn(RIGHT_TURN);
  }
}

// wall2
function wall2(width: number, depth: number) {
  for (let index = 0; index < 2; index++) {
    for (let index = 0; index < depth - 1; index++) {
      builder.place(blockNumber2);
      builder.move(FORWARD, 1);
    }
    builder.turn(RIGHT_TURN);
    count = 1;
    for (let index = 0; index < width - 1; index++) {
      if (count % 2 == 1) {
        builder.place(blockNumber2);
      } else {
        builder.place(blockNumber3);
      }
      builder.move(FORWARD, 1);
      count += 1;
    }
    builder.turn(RIGHT_TURN);
  }
}
