var Taiwan = [306, 5, 39];
var China = [82149, 3308, 75898];
var America = [142895, 2436, 2660];

var Global = [Taiwan, China, America];
console.log('台灣:' + Taiwan[0] + ',' + Taiwan[1] + ',' + Taiwan[2]);
console.log('中國:' + China[0] + ',' + China[1] + ',' + China[2]);
console.log('美國:' + America[0] + ',' + America[1] + ',' + America[2]);

console.log('台灣:' + Global[0][0] + ',' + Global[0][1] + ',' + Global[0][2]);
console.log('中國:' + Global[1][0] + ',' + Global[1][1] + ',' + Global[1][2]);
console.log('美國:' + Global[2][0] + ',' + Global[2][1] + ',' + Global[2][2]);

var x = ['Taiwan', '台灣', 306, 5, 39];
var y = ['China', '中國', 82149, 3308, 75898];
var z = ['America', '美國', 142895, 2436, 2660];
var Earth = [x, y, z];