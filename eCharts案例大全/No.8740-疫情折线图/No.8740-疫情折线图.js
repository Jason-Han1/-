function formatNum(strNum) {
                if(strNum.length <= 3) {
                    return strNum;
                }
                if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                    return strNum;
                }
                var a = RegExp.$1,
                    b = RegExp.$2,
                    c = RegExp.$3;
                var re = new RegExp();
                re.compile("(\\d)(\\d{3})(,|$)");
                while(re.test(b)) {
                    b = b.replace(re, "$1,$2$3");
                }
                return a + "" + b + "" + c;
            }
            
            function formatNum2(strNum) {
                if(strNum.length <= 2) {
                    return strNum;
                }
                if(!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {
                    return strNum;
                }
                var a = RegExp.$1,
                    b = RegExp.$2,
                    c = RegExp.$3;
                var re = new RegExp();
                re.compile("(\\d)(\\d{2})(,|$)");
                while(re.test(b)) {
                    b = b.replace(re, "$1,$2$3");
                }
                return a + "" + b + "" + c;
            }
            
var max = 4000; //设置个最大值
var colors = ['#FD5959', '#5AD8A6', 'rgba(93, 112, 146, 0.45)']; //对应折线的颜色

option = {
    color: colors,

    tooltip: {
        trigger: 'axis',
    },
    legend: {
        data:['确诊', '死亡', '治愈']
    },
    grid: {
        top: 70,
        bottom: 50
    },
    xAxis: {
        type: 'category',
        axisTick: {
            alignWithLabel: true,
        },
        axisLine: {
            onZero: false,
            lineStyle:{
                color: '#999',//X轴日期的颜色
            }
        },
        data: ['2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7']
    },
    yAxis: [{
            name: '确诊',
            type: 'value',
            axisTick: {
                alignWithLabel: true,
                show: false,
            },
            axisLine: {
                show: false,
            },
            min: 0,
            max: max,
            scale: true,
            boundaryGap: [0.2, 0.2],
            axisLabel: {
                formatter: function(value){
                    return formatNum(value*10)
                }
            },
        }, {
            name: '死亡/治愈',
            type: 'value',
            axisTick: {
                alignWithLabel: true,
                show: false,
            },
            min: 0,
            max: max,
            axisLine: {
                show: false,
            },
            axisLabel: {
                formatter: function(value){
                    return formatNum2(value)
                }
            }
        }],
    series: [
        {
            name: '确诊',
            data: [10, 30, 500, 1000, 1290, 2000, 3500],
            type: 'line',
            smooth: true
        },
        {
            name: '死亡',
            type: 'line',
            smooth: true,
            data: [10, 15, 20, 25, 30, 200, 400]
        },
        {
            name: '治愈',
            type: 'line',
            smooth: true,
            data: [20, 50, 80, 100, 150, 200, 300]
        }
    ]
};
