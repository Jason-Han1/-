let color = ['#1890FF', '#00CA69'];
function _getMaxValue(arr) {
  const max = Math.max(...arr);
  // 这样处理是为了不让最大值刚好到坐标轴最顶部
  return Math.ceil(max / 9.5) * 10;
}
function _getMinValue(arr) {
  const min = Math.min(...arr);
  // 这样处理是为了不让最大值刚好到坐标轴最底部
  return Math.floor(min / 12) * 10;
}
let xAxisData = ['一季度', '二季度', '三季度', '四季度'];
let yAxisData1 = [100, 1308, 3500, 1703];
let yAxisData2 = [233, 233, 200, 180];
const min1 = _getMinValue(yAxisData1),
    min2 = _getMinValue(yAxisData2),
    max1 = _getMaxValue(yAxisData1),
    max2 = _getMaxValue(yAxisData2);
const hexToRgba = (hex, opacity) => {
    let rgbaColor = '';
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt('0x' + hex.slice(3, 5))},${parseInt(
            '0x' + hex.slice(5, 7)
        )},${opacity})`;
    }
    return rgbaColor;
};

option = {
    backgroundColor: '#fff',
    color: color,
    legend: {
        top: 20,
       right:"10%"
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            let html = '';
            params.forEach((v) => {
                html += `<div style="color: #666;font-size: 14px;line-height: 24px">
                <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                    color[v.componentIndex]
                };"></span>
                ${v.seriesName}${v.name}  
                <span style="color:${color[v.componentIndex]};font-weight:700;font-size: 12px;margin-left:5px">${
                    v.value
                }</span>
                万元`;
            });
            return html;
        },
        extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;fontSize:10px',
        // axisPointer: {
        //     type: 'shadow',
        //     shadowStyle: {
        //         color: '#ffffff',
        //         shadowColor: 'rgba(225,225,225,1)',
        //         shadowBlur: 5
        //     }
        // }
    },
    grid: {
        top: 100,
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                // formatter: '2020-{value}',
                textStyle: {
                    color: '#333',
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#000',
                },
            },
            data: xAxisData,
        },
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            min: min1,
            max: max1,
            splitNumber: 5,
            interval: (max1 - min1) / 5,
            name: '惠民人数（人）',
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#666',
                fontSize: 12,
                lineHeight: 40,
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'value',
            position: 'right',
            name: '惠民金额（万元）',
            splitNumber: 5,
            interval: (max2 - min2) / 5,
            min: min2,
            max: max2,
            axisLabel: {
                textStyle: {
                    color: '#666',
                },
            },
            nameTextStyle: {
                color: '#666',
                fontSize: 12,
                lineHeight: 40,
            },
            // 分割线
            splitLine: {
                lineStyle: {
                    color: '#E9E9E9',
                },
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '惠民人数',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            symbol: 'circle', //数据交叉点样式
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[0], 0.5),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.1),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 3,
                },
            },
            data: yAxisData1,
            yAxisIndex: 0, // 通过这个判断左右
        },
        {
            name: '惠民金额',
            type: 'line',
            smooth: true,
            symbolSize: 8,
            zlevel: 3,
            
            symbol: 'circle', //数据交叉点样式 (实心点)
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: hexToRgba(color[1], 0.5),
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[1], 0.1),
                            },
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 10,
                },
            },
            data: yAxisData2,
            yAxisIndex: 1, // 通过这个判断左右
        },
    ],
};
