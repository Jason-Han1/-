
var itemStyle = {
    normal: {
        opacity: 1,
        color: "pink"
    }
};
var itemStyle1 = {
    normal: {
        opacity: 1,
        color: "blue"
    }
};
option = {
    backgroundColor: "#050505",
    tooltip: {
        formatter(params) {
            return `<span style="color:"#FFF"">A：${params.marker}${params.value}个</span>`;
        }
    },
    legend: {
        data: ['A'],
        orient: 'vertical',
        itemWidth: 14,
        itemHeight: 14,
        top: '5%',
        textStyle: {
            fontSize: 13,
            color: '#fff'
        }
    },
    angleAxis: {
        max: 100,
        show: false,
    },
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    polar: {
        radius: 200,
        center: ['50%', '50%'],
    },
    series: [
        {
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: "#222"
            },
            data: [60],
            coordinateSystem: 'polar',
            name: 'A',
            label: {
                show: true,
            },
            itemStyle: itemStyle,
          
            "clockWise": true,
            barGap:0
        },
        {
            
            "clockWise": true,
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
                color: "#222"
            },
            data: [80],
            coordinateSystem: 'polar',
            name: 'B',
            label: {
                show: true,
            },
            itemStyle: itemStyle1,
             barGap:0
        }
    ],
};