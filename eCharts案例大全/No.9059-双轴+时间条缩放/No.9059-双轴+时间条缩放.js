var data = {
    unit: '单位:次',
    xDate: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'],
    legend: ['2017', '2018'], //与下面series里面的name对应,不可不一致
    series: [{
            name: '2017',
            type: 'line', //固定值
            data: [120, 132, 101, 134, 90, 230, 210],
            
        },
        {
            name: '2018',
            type: 'line', //固定值
            data: [220, 182, 191, 234, 290, 330, 310],
           
        }
    ]
}

var option = {
    tooltip: {
        trigger: 'axis',
        //formatter: "{a} <br/>{b}: {c} ({d}%)",
        /* formatter: function(v) {
             console.log(v);
             return v;
         },*/
        axisPointer: {
            type: 'cross',
            color: 'red',
            crossStyle: {
                color: '#666',
                // backgroundColor:'#000'
            }
        }
    },
    color:['rgb(250,138,38)','rgb(82,172,232)'],
    legend: {
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },

    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data.xDate
    },
    yAxis: {
        type: 'value',
        name: data.unit,
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 100,
        zoomLock: true
    }, {
        start: 0,
        end: 100,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.9)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [{
            name: '2017',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '2018',
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        }

    ]
};