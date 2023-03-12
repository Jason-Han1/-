// mock数据
const dataArr = {
      xdata: [ '12:05',	 '12:06',	 '12:07',	 '12:08',	 '12:09',	 '12:10',	 '12:11',	 '12:12',	 '12:13',	 '12:14',	 '12:15',	 '12:16',	 '12:17',	 '12:18',	 '12:19',	 '12:20',],

    // xdata: ['12:05', '12:06', '12:07', '12:08', '12:09'],
    vaccination: [1000, 1300, 1200, 700, 600, 700, 900, 1000, 1300, 1200, 700, 600, 700, 900, 1000, 1300],
    unvaccinated: [700, 800, 900, 800, 700, 400, 500, 700, 400, 500, 700, 800, 900, 800, 700, 400],
    unvaccinatedTwo: [400, 300, 500, 200, 200, 300, 300, 400, 300, 500, 200, 200, 300, 300, 200],
    rateDataOne: [300, 200, 400, 100, 400, 200, 200, 300, 200, 400, 100, 400, 200, 200, 300, 200],
    rateDataTwo: [88, 86, 87, 82, 84, 85, 95, 88, 86, 87, 82, 84, 85, 95, 88],
};

// tooltip
const tooltip = {
    trigger: 'axis',
    textStyle: { fontSize: '100%' },
    formatter: (params) => {
        let rander = params
            .map((item) =>
                // item.seriesType !== 'pictorialBar'
                //     ? `<div>${item.seriesName}: ${item.seriesType !== 'line' ? item.value : item.value + '%'}</div>`
                //     : ''
                 `<div>${item.seriesName}: ${  item.value }</div>`
                    
            )
            .join('');
        return `
            <div>${params[0].axisValue}</div>
            ${rander}
        `;
    },
};
const legend = {
    data: ['模型NAME1', '模型NAME2', '模型NAME3', '模型NAME4', '完成第二次接种率'],
    textStyle: { fontSize: 14, color: '#000' },
    itemWidth: 25,
    itemHeight: 15,
    itemGap: 15,
    bottom: '5%',
};
const grid = { top: '18%', left: '10%', right: '6%', bottom: '25%' };
// xAxis
const xAxis = {
    boundaryGap: false,
    axisTick: { show: false },
    axisLine: { lineStyle: { color: '#C7DEFF' } },
    splitLine: { lineStyle: { color: '#C7DEFF' } },
    axisLabel: { textStyle: { fontSize: 12, color: '#2B6BD1' } },
    data: dataArr.xdata,
};

// yAxis
const yAxis = [
    {
        axisTick: { show: false },
        axisLine: { lineStyle: { color: '#fff' } },
        splitLine: { lineStyle: { color: '#C7DEFF' } },
        axisLabel: { textStyle: { fontSize: 16, color: '#2B6BD1' } },
    },
    {
        show: true,
        max: 100,
        splitLine: { show: false },
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
            textStyle: { fontSize: 16, color: '#000' },
            formatter: (params) => {
                return `${params}%`;
            },
        },
    },
];

// series
const series = [
    {
        name: '模型NAME4',
        type: 'line',
        smooth: true, //平滑曲线显示
        showAllSymbol: false, //显示所有图形。
        symbolSize: 0,
        lineStyle: {
            width: 0,
        },
        areaStyle: {
            color: '#1851B3',
        },
        data: dataArr.rateDataOne,
    
    },
    {
        name: '模型NAME3',
        type: 'line',
        smooth: true, //平滑曲线显示
        showAllSymbol: false, //显示所有图形。
        symbolSize: 0,
        lineStyle: {
            width: 0,
        },
        areaStyle: {
            color:  '#61B2FF',
        },
        data: dataArr.unvaccinatedTwo,
  
    },
    {
        name: '模型NAME2',
        type: 'line',
        smooth: true, //平滑曲线显示
        showAllSymbol: false, //显示所有图形。
        symbolSize: 0,
        lineStyle: {
            width: 0,
        },
        areaStyle: {
            color: 'rgba(44,108,209, .3)',
        },
        data: dataArr.unvaccinated,
    
    },
    {
        name: '模型NAME1',
        type: 'line',
        smooth: true, //平滑曲线显示
        showAllSymbol: false, //显示所有图形。
        symbolSize: 0,
        lineStyle: {
            width: 0,
        },
        areaStyle: {
            color:  'rgba(142, 205, 255, .4)',
        },
        data: dataArr.vaccination,
      
    },
];
option = { tooltip, xAxis, yAxis, series, grid, legend, backgroundColor: '#fff' };
