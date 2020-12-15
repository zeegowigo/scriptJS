function getBallMetrics(r)
{
    var s = 4 * Math.PI * Math.pow(r, 2);
    var v = 4 / 3 * Math.PI * Math.pow(r, 3);
    return [s, v];
}
console.log( getBallMetrics(4) );