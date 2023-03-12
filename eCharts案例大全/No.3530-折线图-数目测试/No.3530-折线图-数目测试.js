
// 每个类目点数/x轴数目
const xPonitNum = 7; 

// 折线条数
// 折线条数大于等于300时，卡顿明显
const lineNum = 300;

const randomInt = (min, max) => Math.ceil(Math.random() * (max - min) + min);
const randomArr = (len = 7) => new Array(len).fill(0).map(_ => randomInt(0,1000));
const getSeries = (len = 1000) => new Array(len).fill(0).map((_, index) => ({
    name: 'line-' + index,
    type: 'line',
    data: randomArr(xPonitNum)
}));
const getXaxisData = (len) =>  new Array(len).fill(0).map((_, index) => index);
option = {
    title: {
        text: '折线数目、折线点数对卡顿的影响'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: []
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: getXaxisData(xPonitNum)
    },
    yAxis: {
        type: 'value'
    },
    series: getSeries(lineNum),
  
};
