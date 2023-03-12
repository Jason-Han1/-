option = {
    color: ['#D53A35', '#E98F6F', '#6AB0B8', '#334B5C'],
    tooltip: {
        trigger: 'axis',
        //formatter: "{b} <br> 合格率: {c}%"
    },
    grid: {
        //	    	height:'66%',
        top: '6%',
        bottom: '30%',
        left: '4%',
        right: '5%',
        containLabel: true
    },
    legend: [{
        type: 'plain',
        icon: 'rect',
        bottom: '18%',
        left: 'center',
        itemWidth: 16,
        itemHeight: 12,
        itemGap: 38,
        //orient:'vertical',
        symbolKeepAspect: false,
        data: ['PM2.5','NO2','O3'],
        formatter: function(name) {
            if (name == 'NO2') {
                name = name + '  '; //3
            }
            return name;
        },
    }, {
        type: 'plain',
        icon: 'rect',
        bottom: '10%',
        left: 'center',
        itemWidth:16,
        itemHeight: 12,
        itemGap: 38,
        //orient:'vertical',
        symbolKeepAspect: false,
        data: ['SO2','PM10','CO'],
        formatter: function(name) {
            if (name == 'SO2') {
                name = name + '    '; //4
            }
            return name;
        },
    }],
    xAxis: {
        type: 'category',
        //name: '日期',
        boundaryGap: false,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#AAA'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#AAAAAA'
        },
        data: ['5.1', '5.2', '5.3', '5.4', '5.5', '5.6', '5.7']
    },
    yAxis: {
        name: '',
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#AAA'
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#AAA'
            }
        }
    },
    series: [{
            name: 'PM2.5',
            type: 'line',
            stack: '总量',
            //smooth:true,
            data: [120, 132, 101, 134, 90, 230, 210]
            //data:factorJson.PM2_5Arr
        },
        {
            name: 'NO2',
            type: 'line',
            stack: '总量',
            //smooth:true,
            data: [220, 182, 191, 234, 290, 330, 310]
            //data:factorJson.NO2Arr
        },
        {
            name: 'O3',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
            //data:factorJson.O3Arr
        },
        {
            name: 'SO2',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
            //data:factorJson.SO2Arr
        },
        {
            name: 'PM10',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [120, 302, 311, 324, 380, 320, 360]
            //data:factorJson.PM10Arr
        },
        {
            name: 'CO',
            type: 'line',
            //smooth:true,
            stack: '总量',
            data: [310, 352, 101, 234, 370, 310, 350]
            //data:factorJson.COArr
        },
    ]
};