var ageArea = ['0~10', '11~30', '30~60', '60~100', '100以上'];
var FbarData = [3100, 2142, 1218, 581, 431]; //男
var MbarData = [-3010, -2742, -218, -381, -521]; //女

option = {
    color: ["#3ED4FF", "#ffd800"],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params, ticket, callback) {
            console.log(params)
            var res = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
                res += '<br/>' + params[i].seriesName + ' : ' + Math.abs(params[i].value);
            }
            setTimeout(function() {
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 500)
            return res;
        }
    },
    legend: {
        data: ['男', '女']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        axisLabel: {
            formatter: function(value) {
                return Math.abs(value); //显示的数值都取绝对值
            }
        },
        type: 'value'
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        // data : ['0~5岁','5~10岁','10-30岁','30-50岁','50-70岁','70-100','100以上']
        data: ageArea
    }],
    series: [{
            name: '男',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',

                }
            },
            data: FbarData
        },
        {
            name: '女',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: function(v) {
                        return Math.abs(v.data)
                    }
                }
            },

            // data:[-120, -132, -101, -134, -190, -230, -210]
            data: MbarData
        }
    ]
};