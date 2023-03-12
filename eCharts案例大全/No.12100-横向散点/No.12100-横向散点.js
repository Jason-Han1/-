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
   
    legend: {
        data: ['2015', '2016','2017'],
        left: 'center',
        right: '66%',
        bottom: '90%',
    },
    
    grid: {
        containLabel: true,
        left: 25
    },
    yAxis: {
        data: ['2015', '2016', '2017'],
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
        type: 'pictorialBar',
        label: labelSetting,
        symbolRepeat: true,
        symbolSize: ['50%', '50%'],
        barCategoryGap: '40%',
        data: [{
            name:'2015',
            value: 22.73,
        }, {
             name:'2016',
            value: 34,
        }, {
             name:'2017',
            value: 62.43,
        }]
    
    }]
};