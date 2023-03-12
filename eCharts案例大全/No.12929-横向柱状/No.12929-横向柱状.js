var myColor = ['#eb3600', '#d0a00e', '#34da62', '#00e9db', '#00c0e9'];

/*参数数值*/
var num = [100, 200, 300, 400, 500];

big_num = 0;
$.each(num, function(i, v) {
    if (big_num < v) {
        big_num = v;
    }
})

/*最大数值值*/
max_num = new Array();
/*内阴影*/
max_num_f = new Array();
/*零值*/
zero = new Array();
/*城市*/
city = ['天辰北斗', '江苏北斗', '黑龙江北斗', '世纪赢联', '河北信翔'];
/*白条*/
var white = new Array();

$.each(num, function(i, v) {
    max_num[i] = big_num + 100;
    max_num_f[i] = big_num + 99;
    zero[i] = 0;
    white[i] = 19999;
})

option = {
    grid: {
        left: '11%',
        top: '6%',
        right: '0%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: [{
        show: false,
    }],
    yAxis: [{
        axisTick: 'none',
        axisLine: 'none',
        offset: '27',
        axisLabel: {
            textStyle: {
                color: '#404040',
                fontSize: '16',
            }
        },
        data: city,
    }, {
        axisTick: 'none',
        axisLine: 'none',
        data: max_num_f
    }, {
        nameGap: '50',
        nameTextStyle: {
            color: '#fff',
            fontSize: '16',
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,0)'
            }
        },
        data: [],
    }],
    series: [{
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,

            barGap: '6000%',
            data: num,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                    barBorderRadius: 10
                }
            },
            z: 1
        },
        {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: max_num,
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#eef4fc',
                    barBorderRadius: 10,
                }
            },
            z: 0
        }
    ]
}