module.exports = function reverse(n) {
    let str = '';
    let end = 0;

    n = n.toString();

    if (n[0] === '-') {
        end = 1;
    }

    for (let i = n.length - 1; i >= end; i--) {
        str += n[i];
    }

    return str;
}
