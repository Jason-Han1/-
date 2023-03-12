let arr = ['3', '2', '1', '0', '1', '2', '3']
let avg = arr.length/2-1//当X轴数据为奇数时使用
//判断在0的时候显示垂直线（当X轴为偶数时使用）
// var str = ''
// arr.map((ite,i)=>{
//     if(ite == '0'){
//         str = i
//     }
// })
option = {
    xAxis: {
        type: 'category',
        data: arr
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        markLine: {
                        symbol: "none",
                        data: [{
                            silent: false,
                            lineStyle: {
                                type: "solid",
                                color: "rgba(174, 87, 108, 1)"
                            },
                            xAxis: avg
                        }]
                    },
    },]
};