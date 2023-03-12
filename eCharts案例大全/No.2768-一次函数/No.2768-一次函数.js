const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 一次函数
const y = x.map(i => 2 * i + 1)
// 二次函数
// const y = x.map(i => i ** 2 - 10 * i + 25)
// 指数函数
// const y = x.map(i => 2 ** i)
// 对数函数
// const y = x.map(i => Math.log(i))

option = {
    xAxis: {
        type: 'category',
        data: x
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: y,
        type: 'line'
    }]
};