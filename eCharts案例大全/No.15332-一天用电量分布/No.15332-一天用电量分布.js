option = {
    title: {
        text: '一天用电量分布',
        subtext: '纯属虚构'
    },
    //当trigger为’item’时只会显示该点的数据，
    //为’axis’时显示该列下所有坐标轴所对应的数据。
    //提示框组件
    tooltip: {
        //？触发类型
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    
    //工具栏组件
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {} //是否保存图片  
        }
    },
    xAxis:  {
        type: 'category',  //X轴均为category，Y轴均为value   //设置为类目轴  
        boundaryGap: false,  //数值轴两端的空白策略  //类目在分割线上  
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'red'
        }, {
            gt: 17,
            color: 'green'
        }]
    },
    series: [
        {
            name:'用电量',
            type:'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
                data: [ [{
                    name: '早高峰',
                    xAxis: '07:30'
                }, {
                    xAxis: '10:00'
                }], [{
                    name: '晚高峰',
                    xAxis: '17:30'
                }, {
                    xAxis: '21:15'
                }] ]
            }
        }
    ]
};
