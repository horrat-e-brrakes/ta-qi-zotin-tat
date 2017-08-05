var px = 100;
var py = 100;

function set_position(x, y) {
  el = document.getElementsByClassName("f")[0];
  el.style.left = x + "px";
  el.style.top = y + "px";
}

/* rronz e rastit brrehi */
function random_angle() {
  return 2 * Math.PI * Math.random();
}

var angle = random_angle();

function draw() {
  var w = window.innerWidth,
    h = window.innerHeight;

  /*
   * jepi pak me llom
   * jepi pak me llap
   * normalisht aty pastaj
   * SHKATARROHET mashkulli fare
   * RRRRREEEEEEEEE
   */

  if (px + 50 < 0 || px + 50 > w) {
    /* e ka preki qiktu _ */
    /* 90 + (90 - angle) */
    angle = Math.PI - angle;
  } else if (py + 60 < 0 || py + 60 > h) {
    /* apo e ka preki qiktu | */
    /* 0 + (0 - angle) */
    angle = -angle;
  }

  /* a thu vektori viktim ?! UN TA QI FAMILIN */
  var r = w / h;
  var vx = Math.cos(angle) * 3 * r;
  var vy = Math.sin(angle) * 3;

  px += vx;
  py -= vy;
  set_position(px, py);
}

function init() {
  /* hupja zotin vec ni her */
  if (window.ta_kam_qi_zotin === true)
    return;
  window.ta_kam_qi_zotin = true;

  var head = document.getElementsByTagName("head")[0];
  var body = document.getElementsByTagName("body")[0];

  /* qitash shtija stilin */
  head.innerHTML += "<style>.f{position:fixed;width:100px;z-index:5555;animation:s 2s linear infinite;transform-origin:50% 60%;}@keyframes s{100%{transform:rotate(360deg);}}</style>";

  /* qitash shtija fidxhetin */
  body.innerHTML += "<img class='f' src='http://i.imgur.com/8ymSDcJ.png'>";

  /* qitash shtija mjuzikun */

  /* flipe centin bitch */
  if (Math.random() < 0.5) {
    body.innerHTML += "<audio id='audio' src='https://github.com/horrat-e-brrakes/ta-qi-zotin-tat/raw/master/noizy.mp3' autoplay></audio>";
  } else {
    body.innerHTML += "<audio id='audio' src='https://github.com/horrat-e-brrakes/ta-qi-zotin-tat/raw/master/buta.mp3' autoplay></audio>";
  }

  /* qitash vune trikun */
  document.addEventListener('touchstart', function() {
    audio.play();
  });

  /* fluturro bitch */
  set_position(px, py);
  setInterval(draw, 1000 / 60);
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState !== "loading")
  init();
