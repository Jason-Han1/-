option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        axisLine:{
          show:false  
        },
        splitLine:{
          show:true  
        },
    },
    yAxis: {
        min:10,
         axisLine:{
          show:false  
        }, splitLine:{
          show:true  
        },
    },
    series: [{
        type: 'line',
        symbolSize: 0,
        data:[0]
    }]//s实现默认无数据情况下背景网格化// 有数据时替换series 重新渲染即可
};