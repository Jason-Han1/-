res = {
    xAxisData: ['2019-04-18','2019-04-19','2019-04-20','2019-04-21','2019-04-22','2019-04-23','2019-04-24'],
    seriesData: [500,250,1000,250,300,1000,270]
}
option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var tar = params[0];
            return '日期：' + tar.name + ' <br/> ' + tar.seriesName + '：' + tar.value+ ' GB' ;
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: res.xAxisData
    },
    yAxis: {
        type: 'value',
        name: 'GB'
    },
    series: [
        {
            name:'流量使用',
            type:'line',
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: res.seriesData
        }
    ],
     dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100
    }, {
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: 'red',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
    }]
};
