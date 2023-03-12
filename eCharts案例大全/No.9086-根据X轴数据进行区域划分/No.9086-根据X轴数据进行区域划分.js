option = {
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: [
            '2019-12-14 00:00:00', 
            '2019-12-15 00:00:00', 
            '2019-12-16 00:00:00', 
            '2019-12-17 00:00:00', 
            '2019-12-18 00:00:00', 
            '2019-12-19 00:00:00', 
            '2019-12-20 00:00:00'
        ],
        axisLabel: {
            formatter: function(res) {
                return res.split(" ")[0] + "\n" + res.split(" ")[1];
            }
        }
    },
    yAxis: {
        
    },
    series: [{
        name: "测试标域",
        smooth: true,
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310],
        markArea: {
            silent: true,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderType: 'dashed'
                }
            },
            data: [[
                {},
                {
                    name: '发育期1',
                    xAxis: '2019-12-16 00:00:00',
                    itemStyle: {
                        color: getColor()
                    }
                }
            ], [
                {
                    name: '发育期2',
                    xAxis: '2019-12-16 00:00:00',
                    itemStyle: {
                        color: getColor()
                    }
                },
                {
                    xAxis: '2019-12-19 00:00:00'
                    
                }
            ], [
                {
                    name: '发育期3',
                    xAxis: '2019-12-19 00:00:00',
                    itemStyle: {
                        color: getColor()
                    }
                },
                {}
            ]]
        },
    }]
};
function getColor() {
    var c1 = parseInt(Math.random() * 255);
    var c2 = parseInt(Math.random() * 255);
    var c3 = parseInt(Math.random() * 255);
    var c4 = Math.random();
    return "rgba("+c1+","+c2+","+c3+","+c4+")";
}