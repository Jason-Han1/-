var base = +new Date(2020, 0, 0);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];
var data2 = [Math.random() * 300];
var data3 = [Math.random() * 300];
var data4 = [Math.random() * 300];
var data5 = [Math.random() * 300];
for (var i = 1; i < 367; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
    data2.push(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
     data3.push(Math.round((Math.random() - 0.5) * 20 + data3[i - 1]));
      data4.push(Math.round((Math.random() - 0.5) * 20 + data4[i - 1]));
       data5.push(Math.round((Math.random() - 0.5) * 20 + data5[i - 1]));
}

option = {
    tooltip: {
        trigger: 'axis',
        
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        left: 'center',
        text: '大数据量面积图',
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        axisLabel:{
            formatter:function (value, index) {
    // 格式化成月/日，只在第一个刻度显示年份
    var date = new Date(value);
    var texts = [(date.getMonth() + 1), date.getDate()];
    return texts.join('/');
}
            
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%']
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: '2020预算',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#CA76C4'
            },
     
            data: data
        },
          {
            name: '2019预算',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#EFAA4E'
            },
     
            data: data2
        },
          {
            name: '本行指标',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#75CFA0'
            },
     
            data: data3
        },  {
            name: '2019同业',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color:  '#C75E5E'
            },
     
            data: data4
        },  {
            name: '2019本行指标',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: '#4250BA'
            },
     
            data: data5
        }
    ]
};
