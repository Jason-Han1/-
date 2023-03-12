let bgColor = "#000";
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "2021-04-09",
        value1: 8,
    },
    {
        name: '2021-04-10',
        value1: 3,
    },
    {
        name:  '2021-04-11',
        value1: 7,
    },
    {
        name: '2021-04-12',
        value1: 4,
    },
    {
        name:  '2021-04-13',
        value1: 1
    },
            {
        name: '2021-04-14',
        value1: 6,
    },
    {
        name:  '2021-04-15',
        value1: 8
    },
    {
        name: '2021-04-16',
        value1: 4,
    },
    {
        name:  '2021-04-17',
        value1: 1
    },
            {
        name: '2021-04-18',
        value1: 6,
    },
    {
        name:  '2021-04-19',
        value1: 8
    },
    {
        name: '2021-04-20',
        value1: 4,
    },
    {
        name:  '2021-04-21',
        value1: 1
    },
            {
        name: '2021-04-22',
        value1: 6,
    },
    {
        name:  '2021-04-23',
        value1: 8
    },
    {
        name: '2021-04-24',
        value1: 4,
    },
    {
        name:  '2021-04-25',
        value1: 1
    },
            {
        name: '2021-04-26',
        value1: 6,
    },
    {
        name:  '2021-04-27',
        value1: 8
    }
];

let xAxisData = echartData.map(v => v.name);
//  ['2021-04-09', '2021-04-10', '2021-04-11', '2021-04-12', '2021-04-13', '2021-04-14', '2021-04-15', '2021-04-16', '2021-04-17', '2021-04-18', '2021-04-19', '2021-04-20', '2021-04-21']
let yAxisData1 = echartData.map(v => v.value1);
// [100, 138, 350, 173, 180, 150, 180, 230]
let yAxisData2 = echartData.map(v => v.value2);
// [233, 233, 200, 180, 199, 233, 210, 180]
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
    backgroundColor: bgColor,
    color: color,
    legend: {
      right: 2,
      top: 2
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            let html = '';
            params.forEach(v => {
                console.log(v)
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:1px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
                ${v.seriesName}.${v.name}
                <span style="color:${color[v.componentIndex]};font-weight:500;font-size: 14px">${v.value}</span>
                个`;
            })
            return html
        },
        extraCssText: 'background: #fff;color: #333;',
    },
    grid: {
        top: 10,
        left: '0',  
        right: '20',  
        bottom: '2', 
        containLabel: true
    },
    xAxis: [{
        type: "category",
        boundaryGap: false,
        axisLabel: {
            formatter: '{value}',
            textStyle: {
                color: "#fff",
                fontSize: 14,
            }
        },
        axisLine: {
            lineStyle: {
                color: "#1C2149"
            }
        },
        data: xAxisData
    }],
    yAxis: [{
        type: "value",
        name: '',
        max: 15,
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 14,
            }
        },
        nameTextStyle: {
            color: "#fff",
            fontSize: 14,
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#1C2149"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        // name: "经济效益指标情况",
        type: "line",
        smooth: true,
        // showSymbol: false,/
        symbolSize: 8,
        zlevel: 2,
        lineStyle: {
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [{
                            offset: 0,
                            color: hexToRgba(color[0], 0.3)
                        },
                        {
                            offset: 1,
                            color: hexToRgba(color[0], 0.1)
                        }
                    ],
                    false
                ),
            }
        },
        data: yAxisData1
    }]
};