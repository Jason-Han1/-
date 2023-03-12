var pathSymbols = {


};

var labelSetting = {
    normal: {
        show: true,
        position: 'right',
        offset: [10, 0],
        textStyle: {
            fontSize: 16
        }
    }
};


option = {
    title: {
        text: '十年中国影视发展之数量对比图',
        subtext: '数据来源：国家统计局'
    },
    legend: {
        data: ['2006年', '2015年'],
        left: 'center',
        right: '66%',
        bottom: '90%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        containLabel: true,
        left: 25
    },
    yAxis: {
        data: ['电视剧播出数(万部)', '电影院线(条)', '全国广播电视从业人员数(万人)'],
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 20,
            textStyle: {
                fontSize: 16
            }
        }
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: '2006年',
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['50%', '50%'],
        barCategoryGap: '40%',
        data: [{
            value: 22.73,
            symbol: pathSymbols.reindeer
        }, {
            value: 34,
            symbol: pathSymbols.ship
        }, {
            value: 62.43,
            symbol: pathSymbols.plane
        }, {}]
    }, {
        name: '2015年',
        type: 'pictorialBar',
        barGap: '10%',
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['50%', '50%'],
        data: [{
            value: 23.31,
            symbol: pathSymbols.reindeer
        }, {
            value: 46,
            symbol: pathSymbols.ship
        }, {
            value: 90.07,
            symbol: pathSymbols.plane
        }, {}]
    }]
};