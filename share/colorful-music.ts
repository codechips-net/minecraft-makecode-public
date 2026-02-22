// @ts-nocheck

let i = 0;
let keys: number[] = [];
let insts: string[] = [];
let step = 0;
let p = 0;
let inst = "";
player.say("音の長さ");
step = 200;
player.say("楽器");
insts = ["harp", "bell", "flute", "chime", "xylophone"];

// ブロックが壊された時
blocks.onBlockBroken(DIAMOND_BLOCK, function () {
  inst = insts[0];
  doremifa();
});

// ブロックが壊された時
blocks.onBlockBroken(GOLD_BLOCK, function () {
  inst = insts[3];
  kirakiraboshi();
});

// ドレミファソラシド
function doremifa() {
  playDoremi("do");
  playDoremi("re");
  playDoremi("mi");
  playDoremi("fa");
  playDoremi("so");
  playDoremi("ra");
  playDoremi("si");
  playDoremi("do2");
}
// きらきら星
function kirakiraboshi() {
  playDoremi("do");
  playDoremi("do");
  playDoremi("so");
  playDoremi("so");
  playDoremi("ra");
  playDoremi("ra");
  playDoremi("so");
  loops.pause(step);
  playDoremi("fa");
  playDoremi("fa");
  playDoremi("mi");
  playDoremi("mi");
  playDoremi("re");
  playDoremi("re");
  playDoremi("do");
}

// 楽器の音を出す
function playInst(semi: number, ms: number) {
  p = pitchFromSemitone(semi);
  player.execute(`/playsound note.${inst} @p ~ ~ ~ 1 ${p} 1`);
  loops.pause(ms);
}

// main2
player.onChat("run2", function () {
  builder.move(FORWARD, 5);
  builder.place(DIAMOND_BLOCK);
  builder.move(RIGHT, 5);
  builder.place(GOLD_BLOCK);
});

// loop
loops.forever(function () {
  playByBlockUnderFeet();
});

// ブロックの上で演奏
function playByBlockUnderFeet() {
  if (blocks.testForBlock(WOOL, pos(0, -1, 0))) {
    playInst(0, step);
  } else if (blocks.testForBlock(LIGHT_GRAY_WOOL, pos(0, -1, 0))) {
    playInst(2, step);
  } else if (blocks.testForBlock(GRAY_WOOL, pos(0, -1, 0))) {
    playInst(4, step);
  } else if (blocks.testForBlock(BLACK_WOOL, pos(0, -1, 0))) {
    playInst(5, step);
  } else if (blocks.testForBlock(RED_WOOL, pos(0, -1, 0))) {
    playInst(7, step);
  } else if (blocks.testForBlock(ORANGE_WOOL, pos(0, -1, 0))) {
    playInst(9, step);
  } else if (blocks.testForBlock(YELLOW_WOOL, pos(0, -1, 0))) {
    playInst(11, step);
  } else if (blocks.testForBlock(LIME_WOOL, pos(0, -1, 0))) {
    playInst(12, step);
  }
}

// 音階と半音を関連づけ
function playDoremi(note: string) {
  if (note == "do") {
    playInst(0, step);
  }
  if (note == "re") {
    playInst(2, step);
  }
  if (note == "mi") {
    playInst(4, step);
  }
  if (note == "fa") {
    playInst(5, step);
  }
  if (note == "so") {
    playInst(7, step);
  }
  if (note == "ra") {
    playInst(9, step);
  }
  if (note == "si") {
    playInst(11, step);
  }
  if (note == "do2") {
    playInst(12, step);
  }
}

// run
player.onChat("run", function () {
  inst = insts[0];
});

// 半音をピッチに変換
function pitchFromSemitone(semi: number) {
  return 2 ** (semi / 12);
}

// 音のでるブロックを配置
player.onChat("block", function () {
  builder.move(FORWARD, 5);
  builder.setOrigin();
  keys = [WOOL, LIGHT_GRAY_WOOL, GRAY_WOOL, BLACK_WOOL, RED_WOOL, ORANGE_WOOL, YELLOW_WOOL, LIME_WOOL];
  for (let index = 0; index < 4; index++) {
    for (let i = 0; i <= keys.length - 1; i++) {
      builder.place(keys[i]);
      builder.move(RIGHT, 1);
    }
    i = 0;
    builder.move(LEFT, keys.length);
    builder.move(UP, 1);
    builder.move(FORWARD, 1);
  }
});
