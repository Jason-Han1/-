



var x_data = ['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100'];
var normal_distribution= [0.0,0.01,0.02,0.05,0.1,0.19,0.32,0.47,0.63,0.75,0.8,0.75,0.63,0.47,0.32,0.19,0.1,0.05,0.02,0.01,0.0];
var bar_data = [0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 1,0,0, 0, 0];

var sign_data = [{name : '分数', value : 80, xAxis: '80', yAxis: 1}];

option = {
    xAxis: [
        {
            splitLine:{
                show: true,
                lineStyle: {
                // 使用深浅的间隔色
                color: ['#cccc', '#ddd']
            }
            },
            axisLabel:{
                interval: 0,
                
            },
            type: 'category',
            data: x_data,
            axisPointer: {
                type: 'shadow'
            },
            
        }
    ],
    yAxis: 
        {
            splitLine:{
                show: true,
                lineStyle: {
                color:  '#ddd'
                },
            },           
            max:1.2,
            type: 'value',
            axisLabel: {
                show:false,
            },
            axisLine: {
                show:false,
                color:'#cccc'
            },
            axisTick: {
                show:false,
            }
        
        },
      
    series: [
        {
            type:'bar',
            data:bar_data,
            barWidth : 3,
            itemStyle:{
                color:'#3fa7dc',
                barBorderRadius:50,
            },
        },
        {
            symbol:'none',
            data: normal_distribution,
            type: 'line',
            areaStyle: {},
            smooth :0.4,
            lineStyle:{
                color: {
                    type: 'linear',
                    x: 1,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#e4d7d7' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#72d4c5' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            areaStyle:{
                color: {
                    type: 'linear',
                    x: 1,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                        offset: 0, color: '#e4d7d7' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#72d4c5' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            markPoint:{
                itemStyle:{
                    color:'#3fa7dc'
                },
                data : sign_data,
            }
        },

    ]
};
