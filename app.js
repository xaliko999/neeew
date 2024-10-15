let qidir = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let nBor = [];
let nYoq = [];
console.log(qidir);


for (let i = 0; i < qidir.length; i++) {
    if (qidir[i].includes('n')) {
        nBor.push(qidir[i]);
    } else {
        nYoq.push(qidir[i]);
    }
}

console.log('n harfi qatnashgan so\'zlar:', nBor);
console.log('n harfi qatnashmagan so\'zlar:', nYoq);