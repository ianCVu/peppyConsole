let list = {
  "davidw6054@mytusd.org" : "7706054"
};
list.grab = function() {
  console.log("Loading JSON...");
  console.log(list);
};
list.add = function() {
  window.open("https://github.com/ianCVu/peppyConsole/blob/main/main.js", "_blank");
  console.log("Add value to JSON.");
};
let peppy = {};
peppy.ssidg = function(fn) {
  var vps = {
    "vp1" : "2100",
    "vp2" : "770",
    "vp3" : "3007",
    "vp4" : "4600",
    "vp5" : "200"
  };
  var pg = {};
  pg.g1 = vps.vp1 + fn;
  pg.g2 = vps.vp2 + fn;
  pg.g3 = vps.vp3 + fn;
  pg.g4 = vps.vp4 + fn;
  pg.g5 = vps.vp5 + fn;
  console.log(pg);
};
