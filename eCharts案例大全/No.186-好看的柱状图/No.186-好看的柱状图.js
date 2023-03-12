

 let dataArray = {
    xData: [...new Array(6)].map((item,index)=> `${index + 1}月`),
    data1: [...new Array(6)].map((item,index)=> parseInt(Math.random() * 100) ),
    data2: [...new Array(6)].map((item,index)=> parseInt(Math.random() * 1000) ),
}
        
// lenged
const legend = [{
    top: '1%',
    right: '2%',
    itemWidth: 12,
    itemHeight: 8,
    itemGap: 10,
    data: ['建成区绿化覆盖率', '人均公园绿地面积'],
    textStyle:{ color: '#fff', fontSize: 12 },
    tooltip: { show: true }
}]

// tooltip
const tooltip = {
    confine: true,
    trigger: 'axis',
    textStyle: { fontSize: 18 },
    formatter: v => {
        const render = v.map(item => item.componentSubType === 'pictorialBar' ? '' : `<div>${item.seriesName}：${item.value}</div>`).join('')
        return `
            <div class='p-2'>
                ${render}
            </div>
        `
    }
}

let dataNum = dataArray.data2.map((v,i) => ({   
    value: v,
    itemStyle: {
        color: { type: 'linear', x: 0, x2: 0, y: 0, y2: 1, colorStops:[{ offset: 1, color: '#6de82d' }, { offset: 0, color: '#d9ff7d' }]},
    },
    symbol: 'path://M25.000,16.969 C23.792,18.795 21.826,18.979 18.000,18.979 C17.870,20.641 18.000,23.000 18.000,23.000 L16.000,23.000 C16.000,23.000 16.236,18.707 17.449,16.448 C20.034,11.636 24.533,8.271 24.533,8.271 C24.533,8.271 19.729,9.971 17.000,13.953 C17.252,12.673 16.847,10.038 16.000,8.927 C19.405,6.003 23.293,4.037 31.995,5.512 C28.783,7.032 28.443,11.765 25.000,16.969 ZM11.000,11.942 C12.915,14.372 15.000,17.974 15.000,17.974 C15.000,17.974 11.184,17.717 9.000,15.963 C6.095,13.632 5.000,6.923 5.000,6.923 C5.000,6.923 12.691,6.307 15.000,9.932 C15.987,11.781 16.000,13.687 16.000,15.963 C14.435,13.424 12.863,12.462 11.000,11.942 Z', // 「小树叶」
    symbolPosition: 'end', // 在数据结尾显示
    symbolSize: [20, 40], // 「树叶大小」
    symbolOffset: [35, 0], //「偏移量」
}))

// grid
const grid = { top: '20%', left: '12%', right: '8%', bottom: '15%' }

// xAxis
const xAxis = {
    type: 'category',
    boundaryGap: true,
    data: dataArray.xData,
    axisLine: { lineStyle: { color: 'rgba(255, 255, 255, .35)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff' }, },
    axisTick: { show: false }, //坐标轴刻度
}

    // yAxis
const yAxis = [{
    type: 'value', scale: true,
    name: '覆盖率%',
    max: 100,
    nameTextStyle: { color: '#fff', fontSize: 12 },
    // y轴线
    splitLine: { show: false },
    // y轴
    axisLine: { lineStyle: { color: 'rgba(255, 255, 255, .35)' } },
    // 文字
    axisLabel: { textStyle: { fontSize: 14, color: '#fff' } },
    // 刻度
    axisTick: { show: false }
}, {
    splitNumber: 4,
    type: 'value', scale: true, min: 0,
    name: '万平方米',
    nameTextStyle: { color: '#fff', fontSize: 12 },
    // y轴线
    splitLine: { show: false },
    // y轴
    axisLine: { lineStyle: { color: 'rgba(255, 255, 255, .35)' } },
    // 文字
    axisLabel: { textStyle: { fontSize: 14, color: '#fff' } },
    // 刻度
    axisTick: { show: false }
}]

// series
const series = [{
    name: '建成区绿化覆盖率',
    type: 'line',
    data: dataArray.data1,
    itemStyle: { color: '#2ffea4' },
}, {
    data: dataArray.data2,
    type: "pictorialBar",
    yAxisIndex: 1,
    itemStyle: {
        color: { type: 'linear', x: 0, x2: 0, y: 0, y2: 1, colorStops:[{ offset: 1, color: '#6de82d' }, { offset: 0, color: '#d9ff7d' }]},
    },
    symbol: 'path://M25.000,16.969 C23.792,18.795 21.826,18.979 18.000,18.979 C17.870,20.641 18.000,23.000 18.000,23.000 L16.000,23.000 C16.000,23.000 16.236,18.707 17.449,16.448 C20.034,11.636 24.533,8.271 24.533,8.271 C24.533,8.271 19.729,9.971 17.000,13.953 C17.252,12.673 16.847,10.038 16.000,8.927 C19.405,6.003 23.293,4.037 31.995,5.512 C28.783,7.032 28.443,11.765 25.000,16.969 ZM11.000,11.942 C12.915,14.372 15.000,17.974 15.000,17.974 C15.000,17.974 11.184,17.717 9.000,15.963 C6.095,13.632 5.000,6.923 5.000,6.923 C5.000,6.923 12.691,6.307 15.000,9.932 C15.987,11.781 16.000,13.687 16.000,15.963 C14.435,13.424 12.863,12.462 11.000,11.942 Z', // 「小树叶」
    symbolPosition: 'end', // 在数据结尾显示
    symbolSize: [26, 20], // 「树叶大小」
    symbolOffset: ['1%', '-110%'], //「偏移量」
},{
    name: '人均公园绿地面积',
    type: 'bar',
    yAxisIndex: 1,
    data: dataArray.data2,
    itemStyle: {
        color: { type: 'linear', x: 0, x2: 0, y: 0, y2: 1, colorStops:[{ offset: 1, color: '#6de82d' }, { offset: 0, color: '#d9ff7d' }]},
    },
    barWidth: 20,
}]

// 渲染
option = { tooltip, grid, xAxis, yAxis, series, legend, backgroundColor: 'rgba(0, 0 ,0, .8)' }