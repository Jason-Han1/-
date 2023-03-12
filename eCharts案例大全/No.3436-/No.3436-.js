let color = [
    "#FF6D85",
    "#3FE0A4"
];
let xAxisData = ["1", "2", "3", "4", "5", "6", "7", "8"];
let yAxisData1 = [100, 138, 350, 173, 180, 150, 180, 230];
let yAxisData2 = [233, 233, 200, 180, 199, 233, 210, 180];

const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
      "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

 option = {
    color: color,
    legend: {
        show: true,
          right: 20,
          top: 0,
          textStyle: {
            color: '#fff',
            fontSize: 14,
          },
    },
    tooltip: {
        trigger: "axis"
    },
    grid: {
          left: 50,
          right: 15,
          top: 40,
          bottom: 20
        },
    xAxis: {
            type: 'category',
            data: xAxisData,
            axisPointer: {
              type: 'shadow',
            },
            axisLabel: {
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(107,107,107,0.37)',
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
          },
    yAxis:  {
            type: 'value',
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                color: '#fff',
                fontSize: 14,
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: 'rgba(255,255,255,0.2)',
              },show: false,
            },
          },
    series: [{
        name: "网格员",
        type: "line",
        // smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[0],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[0], 0.5),
                shadowOffsetY: 8
            }
        },
        symbol: 'circle',//数据交叉点样式
        data: yAxisData1
    }, {
        name: "公众用户",
        type: "line",
        // smooth: true,
        symbolSize: 8,
        zlevel: 3,
        lineStyle: {
            normal: {
                color: color[1],
                shadowBlur: 3,
                shadowColor: hexToRgba(color[1], 0.5),
                shadowOffsetY: 8
            }
        },
        symbol: 'circle',
        data: yAxisData2
    }]
};