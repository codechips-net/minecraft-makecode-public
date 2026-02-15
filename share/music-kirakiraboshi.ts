// @ts-nocheck

// harp 自動演奏テンプレ（Minecraft Education / MakeCode）

// 半音ずらすときのピッチ倍率：2^(n/12)
function pitchFromSemitone(semi: number): number {
  return Math.pow(2, semi / 12);
}

// 1音鳴らす（semi: 0が基準、+12で1オクターブ上）
function playHarp(semi: number, ms: number) {
  const p = pitchFromSemitone(semi);
  player.execute(`/playsound note.harp @p ~ ~ ~ 1 ${p} 1`);
  loops.pause(ms);
}

// きらきら星（超短い例）
player.onChat("music", function () {
  const T = 250; // 速さ（ミリ秒）ここ変えるとテンポ変化

  // ドドソソララソ / ファファミミレレド（っぽい並び）
  // 0 を「ド」扱いにして、音程は半音で指定
  // ド(0) レ(2) ミ(4) ファ(5) ソ(7) ラ(9)
  const seq = [0, 0, 7, 7, 9, 9, 7, 5, 5, 4, 4, 2, 2, 0];

  for (let i = 0; i < seq.length; i++) {
    playHarp(seq[i], T);
  }
});
