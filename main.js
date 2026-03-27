console.clear();
console.log("Welcome to N.H.A.A.D Console.");
let list = {
  "anirudhs5817@mytusd.org" : "21005817",
  "alexanderd5971@mytusd.org" : "21005971",
  "aaravb5818@mytusd.org" : "21005818",
  "everettk5746@mytusd.org" : "21005746"
};
let peppy = {};
peppy.ssidg = function(fn) {
  var vps = {
    "vp1" : "2100",
    "vp2" : "770",
    "vp3" : "3007",
    "vp4" : "4600",
    "vp5" : "200",
    "vp6" : "4200",
    "vp7" : "100",
    "vp8" : "400",
    "vp9" : "5700",
    "vp10" : "1200",
    "vp11" : "1400"
  };
  var pg = {};
  pg.g1 = vps.vp1 + fn;
  pg.g2 = vps.vp2 + fn;
  pg.g3 = vps.vp3 + fn;
  pg.g4 = vps.vp4 + fn;
  pg.g5 = vps.vp5 + fn;
  pg.g6 = vps.vp6 + fn;
  pg.g7 = vps.vp7 + fn;
  pg.g8 = vps.vp8 + fn;
  pg.g9 = vps.vp9 + fn;
  pg.g10 = vps.vp10 + fn;
  pg.g11 = vps.vp11 + fn;
  console.log(pg);
};
peppy.vreq = function() {
  console.log("You will be redirected to requests.json to view requests.");
  setTimeout(function() {
    console.log("3");
  }, 1000);
  setTimeout(function() {
    console.log("2");
  }, 2000);
  setTimeout(function() {
    console.log("1");
    setTimeout(function() {
      window.open("https://peppyyuke.github.io/nhaadConsole/requests.json", "_blank");
      console.log("You have been redirected to Peppy's Request's JSON.");
    }, 500);
  }, 3000);
}
