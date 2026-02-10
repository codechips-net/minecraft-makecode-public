// @ts-nocheck

// building1
player.onChat("building1", function () {
  player.say("位置や大きさを決めます。");
  builder.teleportTo(pos(0, 0, 0));
  builder.face(NORTH);
  builder.move(FORWARD, 12);
  for (let index = 0; index < 3; index++) {
    player.say("床を作ります");
    floor();
    builder.move(LEFT, 10);
    builder.move(UP, 1);
    player.say("壁を作ります");
    wall1();
  }
  player.say("屋根を作ります");
  floor();
});

// building2
player.onChat("building2", function () {
  player.say("位置や大きさを決めます。");
  builder.teleportTo(pos(0, 0, 0));
  builder.face(NORTH);
  builder.move(FORWARD, 12);
  for (let index = 0; index < 10; index++) {
    player.say("床を作ります");
    floor();
    builder.move(LEFT, 10);
    builder.move(UP, 1);
    player.say("壁を作ります");
    wall2();
  }
  player.say("屋根を作ります");
  floor();
});

// floor
function floor() {
  for (let index = 0; index < 5; index++) {
    player.say("1列分並べます。");
    for (let index = 0; index < 10; index++) {
      builder.place(NETHER_BRICK);
      builder.move(FORWARD, 1);
    }
    builder.move(RIGHT, 1);
    builder.move(BACK, 1);
    player.say("1列分並べます。");
    for (let index = 0; index < 10; index++) {
      builder.place(NETHER_BRICK);
      builder.move(BACK, 1);
    }
    builder.move(RIGHT, 1);
    builder.move(FORWARD, 1);
  }
}

// wall1
function wall1() {
  for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 4; index++) {
      player.say("9個のブロックを置きます。");
      for (let index = 0; index < 9; index++) {
        builder.place(BLOCK_OF_QUARTZ);
        builder.move(FORWARD, 1);
      }
      player.say("方向転換します。");
      builder.turn(RIGHT_TURN);
    }
    builder.move(UP, 1);
  }
}

// wall2
function wall2() {
  for (let index = 0; index < 3; index++) {
    for (let index = 0; index < 4; index++) {
      player.say("9個のブロックを置きます。");
      for (let index = 0; index < 2; index++) {
        for (let index = 0; index < 2; index++) {
          builder.place(BRICKS);
          builder.move(FORWARD, 1);
        }
        for (let index = 0; index < 2; index++) {
          builder.place(GLASS_PANE);
          builder.move(FORWARD, 1);
        }
      }
      light();
      builder.place(BRICKS);
      builder.move(FORWARD, 1);
      player.say("方向転換します。");
      builder.turn(RIGHT_TURN);
    }
    builder.move(UP, 1);
  }
}

// light
function light() {
  builder.move(RIGHT, 1);
  builder.place(OCHRE_FROGLIGHT);
  builder.move(LEFT, 1);
}
