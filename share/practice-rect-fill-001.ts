// @ts-nocheck

let step = 0;
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
// 四角を作る関数
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
function makeRect() {
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, 1);
  }
  builder.move(RIGHT, 1);
  builder.move(BACK, 1);
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(BACK, 1);
  }
  builder.move(RIGHT, 1);
  builder.move(FORWARD, 1);
  for (let index = 0; index < 5; index++) {
    builder.place(BLOCK_OF_QUARTZ);
    builder.move(FORWARD, 1);
  }
}
player.onChat("run", function () {
  builder.move(FORWARD, 10);
  makeRect3();
});
function makeRect2() {
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
