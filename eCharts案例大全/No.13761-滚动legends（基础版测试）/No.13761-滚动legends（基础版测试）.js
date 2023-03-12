const seriesCount = 14;
const seriesLegendShowLimit = 4;
const switcherText = ['一键切换为清爽套装', '一键切换为完全体'];

const getSeries = () => {
    const series = [];
    for (let i = 0; i < seriesCount; i++) {
        const data = Array.from(new Array(7), x => Math.round(Math.random() * 100));
        const sum = data.reduce((a, b) => a + b);
        const name = `序列${i+1}-${i%2?'sum':'summary'}${sum}`;
        series.push({
            name,
            type: 'line',
            smooth: true,
            data,
            sum,
        });
    }
    series.push({
        name: switcherText[0],
        type: 'line',
    });
    return series;
}

const getLegend = (series, type) => {
    const selected = {};
    const isMoreThanSeriesLimit = series.length > seriesLegendShowLimit;
    const data = series.map((each, i) => {
        // console.log(each);
        const name = each.name;
        selected[name] = type ? true : (i < seriesLegendShowLimit || i === series.length - 1) ? true : false;
        return {
            name,
            // icon,
            // textStyle,
        }
    });
    return {
        type: type || (isMoreThanSeriesLimit ? 'scroll' : 'plain'),
        left: '2%',
        width: type ? 'auto' : (isMoreThanSeriesLimit ? '70%' : 'auto'),
        data,
        selected,
        scrollDataIndex: 0,
    };
}

// ===============================================

const series = getSeries();
const legend = getLegend(series);

option = {
    legend,
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        boundaryGap: false,
    },
    yAxis: {},
    series,
};

myChart.on('legendselectchanged', (params) => {
    const selectedName = params.name;
    const selectedList = params.selected
    if (switcherText[0] === selectedName) {
        console.log('清爽否');
        const thisSeries = [];
        series.forEach(each => {
            if (selectedList[each.name]) {
                thisSeries.push(each);
            }
        });
        thisSeries.push({
            name: switcherText[1],
            type: 'line',
            data: [], // 消除历史数据
        });
        const thisLegend = getLegend(thisSeries, 'plain');
        console.log(thisLegend, thisSeries);
        myChart.setOption({
            legend: thisLegend,
            series: thisSeries,
        });
    } else if (switcherText[1] === selectedName) {
        console.log('还清爽吗');
        const legendSelectedList = legend.selected;
        Object.keys(legendSelectedList).forEach(name => {
            legendSelectedList[name] = selectedList[name] ? true : false;
        });
        legendSelectedList[switcherText[0]] = true;
        myChart.setOption({
            legend,
            series,
        });
    }
});