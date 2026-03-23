// @ts-nocheck

let r = 0;
let rr = 0;
let aa = 0;
let bb = 0;
let a = 0;
let b = 0;
let sideLength = 0;
let blockNumber = 0;

// メイン
player.onChat("run", function () {
  builder.move(FORWARD, 10);
  blockNumber = BLOCK_OF_QUARTZ;
  loops.pause(4000);
  circle3(5, true);
  builder.move(RIGHT, 12);
  circle3(5, false);
});

// ピタゴラスの定理を利用してブロックが円の内側に置けるかチェックする関数
function circleFill(r: number, a: number, b: number) {
  r = r * 1.02;
  rr = r * r;
  aa = a * a;
  bb = b * b;
  if (aa + bb <= rr) {
    return true;
  } else {
    return false;
  }
}

// ピタゴラスの定理を利用してブロックが円周上にあるかチェックする関数
function circleLine(r: number, a: number, b: number) {
  r = r * 1.02;
  rr = r * r;
  aa = a * a;
  bb = b * b;
  if (aa + bb <= rr && aa + bb > (r - 1) * (r - 1)) {
    return true;
  } else {
    return false;
  }
}

// 円を作る関数
function circle() {
  r = 5;
  player.say("四角の左上隅（開始位置）に移動します");
  builder.move(FORWARD, 5);
  builder.move(LEFT, 5);
  a = -5;
  b = -5;
  player.say("円の中にあるか判定します");
  for (let index = 0; index < 11; index++) {
    for (let index = 0; index < 11; index++) {
      if (circleFill(5, a, b)) {
        builder.place(BLOCK_OF_QUARTZ);
      }
      builder.move(RIGHT, 1);
      a += 1;
    }
    player.say("次の行の左端に移動します");
    builder.move(LEFT, 11);
    builder.move(BACK, 1);
    a = -5;
    b += 1;
  }
}

// 円を作る関数2
function circle2(半径: number) {
  r = 半径;
  player.say("四角の左上隅（開始位置）に移動します");
  sideLength = r * 2 + 1;
  builder.move(FORWARD, r);
  builder.move(LEFT, r);
  a = r * -1;
  b = r * -1;
  player.say("円の中にあるか判定します");
  for (let index = 0; index < sideLength; index++) {
    for (let index = 0; index < sideLength; index++) {
      if (circleFill(r, a, b)) {
        builder.place(BLOCK_OF_QUARTZ);
      }
      builder.move(RIGHT, 1);
      a += 1;
    }
    player.say("次の行の左端に移動します");
    builder.move(LEFT, sideLength);
    builder.move(BACK, 1);
    a = r * -1;
    b += 1;
  }
}

// 円を作る関数3
function circle3(半径: number, fill: boolean) {
  r = 半径;
  player.say("四角の左上隅（開始位置）に移動します");
  sideLength = r * 2 + 1;
  builder.move(FORWARD, r);
  builder.move(LEFT, r);
  a = r * -1;
  b = r * -1;
  player.say("円の中にあるか判定します");
  for (let index = 0; index < sideLength; index++) {
    for (let index = 0; index < sideLength; index++) {
      if (fill) {
        if (circleFill(r, a, b)) {
          builder.place(BLOCK_OF_QUARTZ);
        }
      } else {
        if (circleLine(r, a, b)) {
          builder.place(BLOCK_OF_QUARTZ);
        }
      }
      builder.move(RIGHT, 1);
      a += 1;
    }
    player.say("次の行の左端に移動します");
    builder.move(LEFT, sideLength);
    builder.move(BACK, 1);
    a = r * -1;
    b += 1;
  }
  player.say("円の中心に移動します");
  builder.move(FORWARD, r + 1);
  builder.move(RIGHT, r);
}
