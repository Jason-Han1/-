// mock数据
const dataArr = {
    xdata: ['01.01', '01.02', '01.03', '01.04', '01.05', '01.06', '01.07', '01.04', '01.05', '01.06', '01.07'],
    vaccination: [1000, 1300, 1200, 800, 600, 700, 900, 600, 700, 600, 300],
    unvaccinated: [700, 800, 900, 500, 300, 400, 500, 500, 300, 500, 300],
    unvaccinatedTwo: [400, 300, 500, 200, 100, 100, 300, 300, 500, 800, 200],
    rateDataOne: [98, 96, 97, 92, 94, 95, 100, 96, 97, 95, 97],
    rateDataTwo: [88, 86, 87, 82, 84, 85, 95, 84, 85, 84, 82],
}

// tooltip
const tooltip = { 
    trigger: "axis",
    textStyle: { fontSize: '100%' },
    formatter: params => {
        let rander = params.map(item => item.seriesType !== "pictorialBar" ? `<div>${item.seriesName}: ${item.seriesType !== "line" ? item.value : item.value + "%"}</div>` : '').join('')
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `
    }
}
const legend = {
    data: ['应接种', '已完成第一次接种', '已完成第二次接种',],
    textStyle: { fontSize: 14, color: '#fff'},
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '5%',
}
const grid = { top: '18%', left: '10%', right: '6%', bottom: '25%'}
// xAxis
const xAxis = { 
    axisTick: { show: true },
    axisLine: { lineStyle: { color: 'rgba(255,255,255, .2)' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#fff'  }, },
    data: dataArr.xdata
}

// yAxis
const yAxis = [{ 
    axisTick: { show: false },
    axisLine: { show: false, },
    splitLine: { lineStyle: { color: 'rgba(255,255,255, .05)' } },
    axisLabel: { textStyle: { fontSize: 14, color: '#fff' } }
},{
    show: true,
    max: 100,
    splitLine: { show:false },
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: { 
        textStyle: { fontSize: 14, color: '#fff' },
        formatter: params => {
            return `${params}%`
        }
    }
}]

// series
const series = [{
    z: 1,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.vaccination,
    symbol : 'diamond',
    symbolOffset: ['-50%', '-50%'],
    symbolSize: [20, 19],
    itemStyle: {
        borderColor: '#FFFFFF',
        color: '#ffd881'
    },
},{
    z: 1,
    type: 'bar',
    name: '应接种',
    barWidth: 20,
    barGap: '-50%',
    data: dataArr.vaccination,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: '#fac858' }, 
                { offset: 0.5, color: '#fac858'}, 
                { offset: 0.5, color: '#fac858' }, 
                { offset: 1, color: '#d9a83a' }
            ]
        }
    },
},{
    z: 2,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.unvaccinated,
    symbol : 'diamond',
    symbolOffset: [0, '-50%'],
    symbolSize: [20, 19],
    itemStyle: {
        borderColor: '#81e253',
        color: '#8de563'
    },
},{
    z: 2,
    type: 'bar',
    name: '已完成第一次接种',
    barWidth: 20,
    data: dataArr.unvaccinated,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: '#91cc75' }, 
                { offset: 0.5, color: '#79bd59'  }, 
                { offset: 0.5, color: '#6cad4d'  }, 
                { offset: 1, color: '#6cad4d'  }
            ]
        }
    },
}, {
    z: 3,
    name: '上部1',
    type: 'pictorialBar',
    symbolPosition: 'end',
    data: dataArr.unvaccinatedTwo,
    symbol : 'diamond',
    symbolOffset: ['50%', '-50%'],
    symbolSize: [20, 19],
    itemStyle: {
        borderColor: '#ff8d72',
        color: '#ff8d72'
    },
},{
    z: 3,
    type: 'bar',
    name: '已完成第二次接种',
    barWidth: 20,
    data: dataArr.unvaccinatedTwo,
    itemStyle: {
        color: {
            type: 'linear',
            x: 0, x2: 1, y: 0, y2: 0,
            colorStops: [
                { offset: 0, color: '#ed7c61' }, 
                { offset: 0.5, color: '#ed7c61' }, 
                { offset: 0.5, color: '#cd5b40' }, 
                { offset: 1, color: '#cd5b40' }
            ]
        }
    },

}]
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor: '#1a2439' }