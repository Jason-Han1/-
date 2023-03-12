
var data = [];
var dateTime=new Date();

var formatDate = function (date) {  
    var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second;  
}; 

for (let n=0;n<7;n++){
    data[n]=[]      
}
for (var i = 0; i < 10000; i++) {
    dateTime=dateTime.setDate(dateTime.getDate()+Math.round(Math.random()*10));
    dateTime=new Date(dateTime);
    for (let n=0;n<7;n++){
        data[n].push([formatDate(dateTime),Math.round(Math.random()*10)*n])
    }
}

option = {
    title: {
        text: '时间坐标轴脚本'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        },
        confine: true,
        // 增加单位的显示
        formatter: function(params, ticket, callback) {
            let htmlStr = ''
            for (let i = 0; i < params.length; i++) {
                const param = params[i]
                if (i === 0) {
                    const xName = param.value[0]// x轴的名称
                    htmlStr += xName + '<br/>'// x轴的名称
                }
                const seriesName = param.seriesName// 图例名称
                const value = param.value[1]// y轴值
                const color = param.color// 图例颜色

                htmlStr += '<div>'
                // 为了保证和原来的效果一样，这里自己实现了一个点的效果
                htmlStr += '<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' + color + ';"></span>'

                // 圆点后面显示的文本
                htmlStr += seriesName + '：' + value
                htmlStr += '</div>'
            }
            return htmlStr
        }
    },
    xAxis: {
        type: 'time'
    },
    yAxis: {
            name: 'test',
            type: 'value',
            splitNumber: 10,
            splitLine: {// 网格线
                lineStyle: {
                    // color: '#bda29a',
                }
            },
            axisLine: {// 坐标轴线
                lineStyle: {
                    // color: '#546570',
                }
            }
        },
    dataZoom: [
        {
            type: 'slider',
            show: true,
            // y: 35,
            bottom: 10,
            height: 18,
            // fillerColor: '#3097d1',
            // handleColor: '#3097d1',
            start: 90,
            end: 100,
            realtime: false
        },
        {
            type: 'inside',
            start: 90,
            end: 100
        }
    ],
    graphic: [
        {
            type: 'text',
            id: 'test1',
            left: 'center',
            top: 'middle',
            style: {
                fill: '#333',
                text: ['暂无数据'],
                font: '15px Microsoft YaHei'
            }
        }
    ]
};

const series = []
for(let m=0;m<7;m++){
    const obj = {
        name: m,
        type: 'line',
        symbolSize: 5, // 标记的大小
        data: data[m]
    }
    console.log(data[m])
    series.push(obj)
}
option.series = series
myChart.setOption(option)