color = ['#17B034', '#FF4E63', '#FF8B1A', '#FFD11A', '#1AFF1A', '#3BBFB3', '#478CFF', '#FF47AF'];
colors = color.map((item, index) => {
    return {
        type: 'linear',
        colorStops: [{
            offset: 0,
            color: color[index]
        }]
    }
});
option = {
    backgroundColor: "#010d3a",
    title: {
        text: '等级分布',
        textStyle: {
            color: '#00FFFF',
            fontWeight: '800',
            fontSize: `20`,
        },
        left: 'center',
        top: '10%'
    },
    //提示框
    tooltip: {
        trigger: 'axis',
        formatter: "{b} : {c}",
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    //X轴
    xAxis: {
        type: 'category',
        show: true,
        boundaryGap: true,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20]

        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        axisLabel: {
            rotate: -10,
            fontSize: 12,
            color: '#676767'
        },
        data: ['一级', '二级', '三级', '四级', '五级', '六级', '七级', '八级'],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            fontSize: 12,
            color: '#676767'
        },
        splitNumber: 4,
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            }
        }
    },
    series: [{
        type: 'bar',
        barWidth: '26px',
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: function(params) {
                    return colors[params.dataIndex % 8];
                }
            }
        },
        label: {
            normal: {
                show: true,
                position: "top",
                color: color,
                fontSize: 14,
                fontStyle: 'bold',

            }
        },
        data: [32, 58, 64, 64, 64, 25, 66, 20]
    }],
};