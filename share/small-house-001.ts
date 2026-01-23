// @ts-nocheck

let basePos: Position = null;
let size = 0;
let shrink = 0;

// チャットコマンドhouseを入力した時
player.onChat("house", function () {
  player.say("プレイヤーの位置を覚えておきます");
  basePos = player.position().toWorld();
  player.say("家の大きさを決めます（偶数）");
  size = 6;
  player.say("使うブロックを決めます");
  agent.setItem(LIGHT_GRAY_CONCRETE, 1, 1);
  agent.setItem(WHITE_CONCRETE, 1, 2);
  agent.setItem(PLANKS_DARK_OAK, 1, 3);
  agent.setItem(GLASS_PANE, 1, 4);
  agent.setItem(DARK_OAK_FENCE, 1, 5);
  agent.setItem(QUARTZ_STAIRS, 1, 6);
  agent.setItem(DARK_OAK_DOOR, 1, 7);
  // ===== 1階の床 =====
  player.say("1階の床を作ります");
  agent.teleport(basePos, NORTH);
  agent.move(UP, 1);
  agent.move(FORWARD, 10);
  agent.setSlot(1);
  floor();
  // ===== 家の壁（2〜4段目）=====
  player.say("家の壁（2〜4段目）を作ります");
  agent.teleport(basePos, NORTH);
  // 2段目スタート
  agent.move(UP, 2);
  agent.move(FORWARD, 10);
  agent.setSlot(2);
  wall();
  // ===== 屋根（5〜7段目）=====
  player.say("屋根を（5〜7段目）に作ります");
  agent.teleport(basePos, NORTH);
  agent.move(UP, 5);
  agent.move(FORWARD, 10);
  agent.setSlot(3);
  roof();
  // ===== 窓 =====
  player.say("窓を作ります");
  agent.teleport(basePos, NORTH);
  agent.move(UP, 2);
  agent.move(FORWARD, 9);
  agent.setSlot(4);
  window();
  // ===== エクステリア =====
  player.say("エクステリアを作ります");
  agent.teleport(basePos, NORTH);
  agent.move(FORWARD, 8);
  agent.setSlot(5);
  exterior();
  // ===== 玄関 =====
  player.say("玄関の階段とドアを作ります");
  agent.teleport(basePos, NORTH);
  agent.move(FORWARD, 8);
  entrance();
});

// floor
function floor() {
  for (let index = 0; index < size / 2; index++) {
    for (let index = 0; index < size; index++) {
      agent.place(DOWN);
      agent.move(FORWARD, 1);
    }
    agent.move(RIGHT, 1);
    agent.move(BACK, 1);
    for (let index = 0; index < size; index++) {
      agent.place(DOWN);
      agent.move(BACK, 1);
    }
    agent.move(RIGHT, 1);
    agent.move(FORWARD, 1);
  }
}
// wall
function wall() {
  // 2〜4段目（合計3段）
  for (let index = 0; index < 3; index++) {
    // 1周ぶん壁を作る
    for (let index = 0; index < 4; index++) {
      for (let index = 0; index < size - 1; index++) {
        agent.place(DOWN);
        agent.move(FORWARD, 1);
      }
      agent.turn(RIGHT_TURN);
    }
    // 次の段へ（開始位置に戻っている前提）
    agent.move(UP, 1);
  }
}
// roof
function roof() {
  shrink = 1;
  // 5〜7段目（合計3段）
  for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 4; index++) {
      for (let index = 0; index < size - shrink; index++) {
        agent.place(DOWN);
        agent.move(FORWARD, 1);
      }
      agent.turn(RIGHT_TURN);
    }
    // 次の段へ（内側に入って縮小）
    agent.move(UP, 1);
    agent.move(FORWARD, 1);
    agent.move(RIGHT, 1);
    shrink += 2;
  }
}
// window
function window() {
  for (let index = 0; index < Math.floor(size / 3) - 1; index++) {
    for (let index = 0; index < 2; index++) {
      agent.move(RIGHT, 1);
      agent.destroy(FORWARD);
      agent.place(FORWARD);
    }
    agent.move(RIGHT, 1);
  }
}
// exterior
function exterior() {
  for (let index = 0; index < size; index++) {
    agent.place(FORWARD);
    agent.move(RIGHT, 1);
  }
}

// entrance
function entrance() {
  agent.move(RIGHT, size - 2);
  agent.destroy(FORWARD);
  agent.setSlot(6);
  agent.place(FORWARD);
  agent.move(UP, 1);
  agent.move(FORWARD, 1);
  for (let index = 0; index < 2; index++) {
    agent.destroy(FORWARD);
    agent.move(UP, 1);
  }
  agent.move(DOWN, 2);
  agent.setSlot(7);
  agent.place(FORWARD);
}
