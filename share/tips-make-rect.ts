// @ts-nocheck

let step = 0;

// メイン
player.onChat("run", function () {
  builder.move(FORWARD, 10);
  makeRect5(7, 12);
});

// makeRect
function makeRect() {
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, 1);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, 1);
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, -1);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, -1);
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, 1);
  }
}

// makeRect2
function makeRect2() {
  step = 1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, step);
  step = -1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, step);
  step = 1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
}

// makeRect3
function makeRect3() {
  step = 1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, step);
  step = step * -1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, step);
  step = step * -1;
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, step);
  }
}

// makeRect4
function makeRect4() {
  step = 1;
  for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 5; index++) {
      builder.place(BLOCK_OF_QUARTZ);
      builder.move(FORWARD, step);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, step);
    step = step * -1;
  }
}

// makeRect5
function makeRect5(width: number, depth: number) {
  step = 1;
  for (let index = 0; index < width; index++) {
    for (let index = 0; index < depth; index++) {
      builder.place(BLOCK_OF_QUARTZ);
      builder.move(FORWARD, step);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, step);
    step = step * -1;
  }
}
