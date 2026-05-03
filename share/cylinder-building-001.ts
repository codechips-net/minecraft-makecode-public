// @ts-nocheck

let r = 0;
let rr = 0;
let aa = 0;
let bb = 0;
let sideLength = 0;
let a = 0;
let b = 0;
let blockNumber = 0;
let blockNumber2 = 0;

// メイン
player.onChat("run", function () {
  builder.move(FORWARD, 20);
  blockNumber = BLOCK_OF_QUARTZ;
  blockNumber2 = GLASS;
  builder.move(DOWN, 1);
  circle(12, true);
  for (let index = 0; index < 6; index++) {
    builder.move(UP, 1);
    for (let index = 0; index < 4; index++) {
      circle(8, false);
      builder.move(UP, 1);
    }
    circle(8, true);
  }
});

// 円を作る関数
function circle(半径: number, fill: boolean) {
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
          builder.place(blockNumber);
        }
      } else {
        if (circleLine(r, a, b)) {
          if (Math.abs(a) <= 3 || Math.abs(b) <= 3) {
            builder.place(blockNumber2);
          } else {
            builder.place(blockNumber);
          }
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

// ピタゴラスの定理を利用してブロックが円周に置けるかチェックする関数
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
