const sma = (array, window) => {
    let res = [];
    for (let i = 0; i < array.length - window; ++i) {
        res.push(array.slice(i, i + window).reduce((x, y) => x + y) / window);
    }
    return res;
}

const range = (start, end, step = 1) => {
    let res = [];
    if (start < end) {
        for (let i = start; i < end; i += step) res.push(i);
    } else {
        for (let i = start; i > end; i += step) res.push(i);
    }
    return res;
}

const sum = a => a.reduce((x, y) => x + y, 0);
const dot = (a, b) => {
    let res = 0;
    for (let i = 0; i < a.length; ++i)
        res += a[i] * b[i];
    return res;
}

// returns array.length values, kernel.length should be 2*array.length - 1
const convolution = (array, kernel) => {
    const kn = kernel.length;
    const an = array.length;
    const halfk = Math.trunc(kn / 2);
    let res = [];
    for (let i = 0; i < an; ++i) {
        const kwindow = kernel.slice(halfk - i, halfk - i + an);
        res.push(dot(kwindow, array) / sum(kwindow));
    }
    return res;
}

const wmaKernel = (n, window) => {
    const kernel = [
        ...Array(n - window + 1).fill(0),
        ...range(1, window),
        ...range(window, 0, -1),
        ...Array(n - window + 1).fill(0)
    ]; // [0..0,1..window..1,0..0]
    return kernel;
}

const emaKernel = (n, decay) => {
    const kernel = [
        ...range(n, 0, -1).map(x => decay ** x),
        ...range(0, n + 1).map(x => decay ** x),
    ];
    return kernel;
}

export { sma, emaKernel, wmaKernel, convolution };