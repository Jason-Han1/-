option = {
    title: {
        text: '温度'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['供温', '回温', '均温','供压','回压','均压','流量','热量','频率']
    },
      color: ['#1891FF', '#12C3C3', '#FBCD14', '#F14864', '#8542E1', '#7DA6FF', '#c9daf8', '#ead1dc', '#e6b8af','#fce5cd'],
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['2020-11-03', '2020-11-04', '2020-11-05', '2020-11-06', '2020-11-07', '2020-11-08', '2020-11-09']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '供温',
            type: 'line',
            step: 'start',
            data: [10, 20, 30, 40, 50, 60, 70]
        },
        {
            name: '回温',
            type: 'line',
            step: 'middle',
            data: [10, 20, 30, 40, 50, 60, 70]
        },
        {
            name: '均温',
            type: 'line',
            step: 'end',
          data: [10, 20, 30, 40, 50, 60, 70]
        },
         {
            name: '供压',
            type: 'line',
            step: 'end',
          data: [70, 60, 50, 40, 30, 20, 10]
        },
         {
            name: '回压',
            type: 'line',
            step: 'middle',
           data: [70, 60, 50, 40, 30, 20, 10]
        },
         {
            name: '均压',
            type: 'line',
            step: 'start',
            data: [70, 60, 50, 40, 30, 20, 10]
        },
         {
            name: '流量',
            type: 'bar',
            show: true,
            data: [70, 60, 50, 40, 30, 20, 10]
        },
         {
            name: '热量',
            type: 'bar',
          data: [10, 20, 30, 40, 50, 60, 70]
        },
        // {
        //     name: '频率',
        //     type: 'pie',
        //     labelLine: {
        //     normal: {
        //         length: 0,
        //         length2:0,
        //         // smooth: false,
        //     }
        // },
        //   data: [10, 10, 10, 10, 10, 10, 10]
        // },
    ]
};
