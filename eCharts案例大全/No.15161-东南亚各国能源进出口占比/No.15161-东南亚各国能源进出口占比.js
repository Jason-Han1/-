app.title = '柱状图框选';

var xAxisData = ['印度', '尼泊尔', '巴基斯坦', '斯里兰卡', '马尔代夫', '马来西亚', '泰国', '越南', '新加坡', '印度尼西亚'];
var data1 = [-19.6266231494598, -0.00427691971404587, -2.64219810685149, -2.65418857213762, -0.0466777384759983, -22.0111876929998, -4.80076625160013, -6.15828224962063, -16.6957184896636, -29.1797619080209];
var data2 = [41.319864482916, 20.3972481720904, 31.295784166272, 22.8538015794241, 28.7025092183396, 17.0599170891131, 21.7983218988504, 7.01639206475235, 31.175540988124, 24.7184627939739];


// for (var i = 0; i < 10; i++) {
//     xAxisData.push('Class' + i);
//     data1.push((Math.random() * 2).toFixed(2));
//     data2.push(-Math.random().toFixed(2));
//     data3.push((Math.random() * 5).toFixed(2));
//     data4.push((Math.random() + 0.3).toFixed(2));
// }
function dataFormatter(data){
    var obj = []
    for(var i = 0, l = data.length; i < l; i++) {
        obj[i] = {
            value: parseFloat(data[i]).toFixed(2),
            textStyle:{
                fontWeight: 'lighter',
                fontSize: 12,
            }
        }
    }
    return obj;
}

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    // backgroundColor: 'tran',
    legend: {
        data: ['进口', '出口'],
        // align: 'right',
        left: 'right',
        textStyle:{
            color:'#fff'
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        // name: 'X Axis',
        silent: false,
        splitLine: {show: false},
        splitArea: {show: false},
        'axisLabel': {
                    margin:8,
                    'interval': 0,
                    rotate: 35,
                    textStyle: {
                      color: '#00ccfe',
                  }
                },
        axisLine:{
            onZero:true,
                    lineStyle:{
                        color: '#00ccfe',
                    }
                },
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false},
        splitLine:false,
        axisLine:{
                    lineStyle:{
                        color: '#00ccfe',
                    }
                },
        axisLabel: {
                  show: false,
                  formatter: function(param) {
                        return param + '%';
                      },
                  textStyle: {
                      color: '#00ccfe',
                  }
                }
    },
    grid: {
        left: 10,
        right:10,
        top:30,
        bottom:30,
    },
    color:['#e97e61','#2bb4fc'],
    series: [
        {
            name: '进口',
            type: 'bar',
            barWidth:'70%',
            stack: 'one',
            itemStyle: itemStyle,
            data: dataFormatter(data1),
            label: {
                    normal: {
                        show: true,
                        position: 'top'
                    },
                    
                },
        },
        {
            name: '出口',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: dataFormatter(data2),
            label: {
                    normal: {
                        show: true,
                        position: 'bottom'
                    },
                    
                },
        }
    ]
};