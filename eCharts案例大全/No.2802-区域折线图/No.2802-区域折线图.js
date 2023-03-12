let bgColor = "";
let color = [
    "#0090FF",
    "#36CE9E",
    "#FFC005",
    "#FF515A",
    "#8B5CFF",
    "#00CA69"
];
let echartData = [{
        name: "上海",
        value1: 8,
    },
    {
        name: '浙江',
        value1: 3,
    },
    {
        name:  '江苏',
        value1: 7,
    },
    {
        name: '福建',
        value1: 4,
    },
    {
        name:  '台湾',
        value1: 1
    },
            {
        name: '湖南',
        value1: 6,
    },
    {
        name:  '湖北',
        value1: 8
    }
];

let xAxisData = echartData.map(v => v.name);
//  ['沪东', '雄程', '浩思', '宏皓', '亨通', '洋利', '西伯瀚', '遨拓', '崇和', '东海', '宏华', '思纬', '彩虹鱼']
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
                color: "#4c647c",
                fontSize: 14,
            }
        },
        axisLine: {
            lineStyle: {
                color: "#D9D9D9"
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
                color: "#4c647c",
                fontSize: 14,
            }
        },
        nameTextStyle: {
            color: "#4c647c",
            fontSize: 14,
        },
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#E9E9E9"
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