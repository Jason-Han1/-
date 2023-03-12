//使用这个 https://www.makeapie.com/editor.html?c=xePqG2zTLi 里面的方法更灵活
let value = [150, 230, 224, 218, 135, 147, 260]; 
let min = Math.min(...value); //计算最小值
let max = Math.max(...value); //计算最大值
console.log(min, max);
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            symbol: function (value, params) {
                console.log(params);
                if (value == min || value == max) {
                    return 'circle'; //拐点类型
                } else {
                    return 'none'; //拐点不显示
                }
            },
            itemStyle: {
                normal: {
                    color: 'red',
                    borderColor: 'red', //拐点边框颜色
                    lineStyle: {
                        color: '#ff9c35', //折线颜色
                    },
                },
            },
        },
    ],
};
