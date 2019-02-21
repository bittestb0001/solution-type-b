console.log('Problem 04');

/**
 * Main.html 을 실행하세요.
 * 게임 시작 시 강을 건널 돌다리 생성
 * # > 10
 * O > 10
 */
let modul = {
  do() {

    if (confirm('돌다리 게임을 시작하시겠습니까?')) {
      if (!document.getElementById('brige')) {
        alert(`Main.html 파일 안에 <div id=brige></div>를 생성해주세요`);
      }
      doGame()
    }

    function doGame() {
      let noah = []
        , brg = getBrige()
        , count = 0
        , goCount = 0;

      if (confirm(`돌다리를 건너시려면 스페이스바나 엔터키를 누르세요.`)) {
        document.addEventListener('keydown', function (e) {
          count += 1;
          let keyCode = [13, 32]
          if (keyCode.includes(e.keyCode)) {

            let ranNum = (Math.ceil(Math.random() * 4));
            if (brg[ranNum - 1] == '#') {
              goCount = 0;
              noah = [];
              brg = getBrige()
            } else if (brg[ranNum - 1] == 'O') {
              goCount += 1;
              noah.push(brg[ranNum - 1]);
              brg.splice(ranNum - 1, 1);
              console.log('brg', brg)
              console.log('noah', noah)
            }
            if (brg.every(x => x == '#')) {
              alert('돌다리를 건넜습니다!');
              document.getElementById('res').innerHTML = `도전 횟수 ${count} 재시도 횟수${goCount}`
            }
          }
        })
      }

    }

    function getBrige() {
      let brige = [];
      for (let i = 5; i -= 1;) {
        brige.push(Math.ceil(Math.random() * 2) == 1 ? "#" : "O");
      }
      document.getElementById('brige').innerHTML = brige.join('');
      return brige
    }

  }
}

modul.do()