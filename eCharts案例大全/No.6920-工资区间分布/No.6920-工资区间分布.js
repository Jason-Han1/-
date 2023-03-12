option = {
    title: {
        text: '工资区间分布',
        left: 38,
        top: 18,
        textStyle: {
            color: '#111',
            fontWeight: 'lighter',
            fontSize: 18
        }
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        showDelay: 0,
        extraCssText: 'padding:15px;font-size:10px',
        formatter: function(params) {
            return '工资区间' + ' : ' + params[1].name + '<br/>' + '占比' + ' : ' + params[1].value + '%'
        },
        axisPointer: {
            show: true,
            type: 'shadow',
        }
    },
    // 直角坐标系内绘图网格
    grid: {
        left: '20',
        right: '40',
        top: '90',
        bottom: '20',
        containLabel: true
    },
    xAxis: {
        show: false,
    },
    yAxis: {
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            onZero: false,

        },
        axisTick: {
            show: false
        },


        splitLine: {
            show: false
        },
        data: ["0k-2k", "2k-4k", "4k-6k", "6k-8k", "8k-10k", '10k-12k', '12k-14k'],

    },
    series: [{
        name: '工资区间1',
        type: 'bar',
        barCategoryGap: 40,
        barWidth: 20,
        stack: '总量',
        label: {
            show: false,
            color: 'white',
        },
        itemStyle: {
            normal: {
                barBorderRadius: [5, 0, 0, 5],
                color: function(params) {
                    var myColor = ["#8bb6ff", "#81b0ff", "#6ea4ff", "#649eff", "#5091ff", "#478cff", "#487aff", ];
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                }
            }
        },
        data: [-20, -34, -60, -80, -50, -78, -69],

    }, {
        name: '工资区间2',
        type: 'bar',
        stack: '总量',
        z: 10, //防止数字被覆盖
        label: {
            show: true,
            color: 'white',
            position: 'insideLeft',
            distance: -11,
            formatter: "{c}%"
        },
        itemStyle: {
            normal: {
                barBorderRadius: [0, 5, 5, 0],
                color: function(params) {
                    var myColor = ["#8bb6ff", "#81b0ff", "#6ea4ff", "#649eff", "#5091ff", "#478cff", "#487aff", ];
                    var num = myColor.length;
                    return myColor[params.dataIndex % num];
                }
            }
        },
        data: [20, 34, 60, 80, 50, 78, 69],
    }]

}