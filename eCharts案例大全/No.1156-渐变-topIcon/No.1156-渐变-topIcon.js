var echartData = [
    { name:"农业用水", value: 350 },
    { name:"生态用水", value: 300 },
    { name:"工业用水", value: 250 },
]; // 获取数据
var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAYAAAAMJL+VAAAA6UlEQVQ4T+WTPRKCMBSE9wU7tEWQQk/k3yFo7LSms4VDcAHGwhNoZ+kRFOQMFsZBBtQh4THOUJk2mbfv290QOj7U8Xz8kYCzT8fijhCAJQxaX6bOqY29rSxy49QDUQCgXw0l6Sez0ZYTaRQotqYQhKVykJRHjkYr4O4yD1LmlpjclmigqQnY8W1iAIF2a52ahuZLYBhlZm/wiECktoRBIeAA0Oo6t8/lU6VFylA5n6T0k0U9dG0GVS0ZmnxrEtjoasvWtKARASDfFS1pNFt/wrIC+eMaTYt6Nmags/tFI2C1+WA/CXA5q+6fT9VPEc2oIfcAAAAASUVORK5CYII="  //小
var xData = echartData.map((item, index) => {
    return {
        value: item.name,
    };
});
var yData = echartData.map((item, index) => {
    return {
        value: item.value,
    };
});

var barWidth = 15;
option = {
        //提示框
        tooltip: {
            trigger: 'axis',
            formatter: "{b} : {c}",
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        /**区域位置*/
        grid: {
              left: 20,
              right: 20,
              top: 28,
              bottom: 0,
              containLabel: true
        },
        /**图例大小*/
            //  legend: {
            //   type: 'plain',
            //   left: 0,
            //   top: 20,
            //   itemGap: 20,
            //   itemWidth: 35,
            //   itemHeight: 20
            // },
        //X轴
        xAxis: {
            nameTextStyle: {
                color: '#bac3d4',
            },
            data: xData,
            show: true,
            type: 'category',
            axisLabel: {
                // rotate: -30,
                fontSize: 14,
                color: '#6f7178',
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            nameTextStyle: {   // 坐标轴名称样式
                color: '#6f7178',
                padding: [0, 0, 0, -5],
                fontSize: 12
            },
            type: "value",
            show: true,
            splitNumber: 4,
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "#e7edf8"
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: '#6f7178',
            },
            name: "面积(立方米)"
        },
        series: [{
                type: 'bar',
                barWidth: barWidth,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                            [
                                {offset: 0, color: "rgba(28, 216, 255, 0.05)"},
                                {offset: 1, color: "rgba(27, 181, 239, 0.82)"}
                            ]
                        )
                        
                    }
                },
                data: yData
            },
            {
                z: 2,
                type: 'pictorialBar',
                data: yData,
                symbol: 'diamond',
                symbolOffset: [0, '50%'],
                symbolSize: [barWidth, barWidth * 0.5],
                itemStyle: {
                    normal: {
                        color: "rgba(27, 181, 239, 0.82)"
                    }
                },
            },
            {
                z: 3,
                type: 'pictorialBar',
                symbolPosition: 'end',
                data: yData,
                symbol: 'circle',
                symbolOffset: [0, -barWidth*0.8],
                symbolSize: [barWidth * 1.2, barWidth * 1.2],
                symbol: "image://" + img,
                label: {
                    show: false,
                    // offset: [0, -30],
                    // fontSize: 16,
                    // color: "#00baff",
                    // formatter: function(params) {
                    //     return params.value + '%'
                    // }
                }
            },
        ],
    };
