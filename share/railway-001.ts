// @ts-nocheck

let rail = 0;
let poweredRail = 0;
let redStone = 0;

// メイン
player.onChat("railway", function () {
  rail = RAIL;
  poweredRail = POWERED_RAIL;
  redStone = REDSTONE_TORCH;
  builder.move(RIGHT, 2);
  builder.move(FORWARD, 3);
  for (let index = 0; index < 2; index++) {
    rail3(20);
    builder.turn(RIGHT_TURN);
    rail3(10);
    builder.turn(RIGHT_TURN);
  }
});

// レールを置く手順を関数にする
function rail1() {
  for (let index = 0; index < 2; index++) {
    builder.place(rail);
    builder.move(FORWARD, 1);
  }
  builder.place(poweredRail);
  builder.move(LEFT, 1);
  builder.place(redStone);
  builder.move(RIGHT, 1);
  builder.move(FORWARD, 1);
  for (let index = 0; index < 7; index++) {
    builder.place(rail);
    builder.move(FORWARD, 1);
  }
}

// 関数を整理
function rail2() {
  for (let count = 0; count <= 9; count++) {
    if (count % 10 == 2) {
      builder.place(poweredRail);
      builder.move(LEFT, 1);
      builder.place(redStone);
      builder.move(RIGHT, 1);
      builder.move(FORWARD, 1);
    } else {
      builder.place(rail);
      builder.move(FORWARD, 1);
    }
  }
}

// 長さを変数で管理
function rail3(length: number) {
  for (let count = 0; count <= length - 1; count++) {
    if (count % 10 == 2 || count % 10 == 3) {
      builder.place(poweredRail);
      builder.move(LEFT, 1);
      builder.place(redStone);
      builder.move(RIGHT, 1);
      builder.move(FORWARD, 1);
    } else {
      builder.place(rail);
      builder.move(FORWARD, 1);
    }
  }
}
