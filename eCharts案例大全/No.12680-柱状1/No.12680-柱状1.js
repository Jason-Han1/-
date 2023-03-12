var obj = [{
    'community_name': '中新国际城',
    'planCharge': 22,
    'realCharge': 9.9
}, {
    'community_name': '鲁能泰山7号',
    'planCharge': 24,
    'realCharge': 19.9
}, {
    'community_name': '盛世花城',
    'planCharge': 20,
    'realCharge': 12
}, {
    'community_name': '唐城小区',
    'planCharge': 25,
    'realCharge': 18
}, {
    'community_name': '黑虎泉印象',
    'planCharge': 20,
    'realCharge': 16
}, {
    'community_name': '绿地城',
    'planCharge': 22,
    'realCharge': 8
}];
var community_name = [];
var planCharge = [];
var realCharge = [];
for (var i = 0; i < obj.length; i++) {
    community_name.push(obj[i].community_name);
    planCharge.push(obj[i].planCharge);
    realCharge.push(obj[i].realCharge);

}
var option = {
    backgroundColor: "#344b58",
    legend: {
        bottom: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['实收金额', '应收金额']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {

        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: community_name
        },
        {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: community_name
        },

    ],
    dataZoom: [{
        type: 'slider',
        show: true,
        yAxisIndex: [0, 1],
        width: 15,
        start: 1,
        end: 99
    }],
    series: [

        {
            name: '应收金额',
            type: 'bar',
            yAxisIndex: 1,
            barMaxWidth: 10,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: planCharge
        },
        {
            name: '实收金额',
            type: 'bar',
            barMaxWidth: 10,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#5de3e1',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: realCharge
        }

    ]
};