var bTestData = [],
    cTestData = [];
for (var i = 0; i < 12; i++) {
    var stdCount = Math.random() * 100;
    var totalCount = stdCount + Math.random() * 150;
    bTestData.push([i, (stdCount / totalCount * 100.0).toFixed(2), stdCount.toFixed(0), totalCount.toFixed(0)]);
}
for (var i = 0; i < 12; i++) {
    var stdCount = Math.random() * 100;
    var totalCount = stdCount + Math.random() * 150;
    cTestData.push([i, (stdCount / totalCount * 100.0).toFixed(2), stdCount.toFixed(0), totalCount.toFixed(0)]);
}
var resonArr = ['设计', '安装', '物流', '工厂'];
var bPieData = [];
for (var i = 0; i < resonArr.length; i++) {
    bPieData.push({
        name: resonArr[i],
        // value: Math.round(Math.random() * 1000)
        value: i % 2 ? Math.round(Math.random() * 1000) : 0
    });
}
var cPieData = [];

function cp1() {
    cPieData = [];
    for (var i = 0; i < resonArr.length; i++) {
        cPieData.push({
            name: resonArr[i],
            value: Math.round(Math.random() * 1000)
        });
    }
    return cPieData;
}
option = {
    title: [{
        id: 'barTitle',
        text: '2019年补单占比统计图',
        x: 'center',
        // textAlign: 'center'
    }, {
        id: 'pieTitle1',
        text: '9月销售补单下单原因占比',
        x: '25%',
        y: '59%',
        textAlign: 'center'
    }, {
        id: 'pieTitle2',
        text: '9月售后补单下单原因占比',
        x: '75%',
        y: '59%',
        textAlign: 'center'
    }],
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },

    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            // type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        formatter: '柱状图专用'
    },
    // legend: {},
    grid: {
        bottom: '46%',
        containLabel: false,
        left: '50',
        right: '30'
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: {
        type: 'value',
        name: '单数',
        // min: 0,
        // max: 100,
        // interval: 25,
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [{
        name: 'B单占比',
        type: 'bar',
        data: bTestData,
        label: {
            show: true,
            position: 'top',
            formatter: '{@[1]} %'
        }
    }, {
        name: 'C单占比',
        type: 'bar',
        data: cTestData,
        label: {
            show: true,
            position: 'top',
            formatter: '{@[1]} %'
        }
    }, {
        name: '销售补单下单原因占比',
        type: 'pie',
        radius: '28%',
        center: ['25%', '83%'],
        label: {
            formatter: '{b}: {d}%'
        },
        data: bPieData,
        tooltip: {
            //饼图专用
            trigger: 'item',
            formatter: '饼图专用<br/>{a}/{b}/{c}/{d}'
        }
    }, {
        name: '售后补单下单原因占比',
        type: 'pie',
        radius: '28%',
        center: ['75%', '83%'],
        label: {
            formatter: '{b}:{c}单 {d}%'
        },
        data: cp1(),
        tooltip: {
            //饼图专用
            trigger: 'item',
            formatter: '饼图专用<br/>{a}/{b}/{c}/{d}'
        }
    }]
};

myChart.getZr().on('click', params => {
    console.log('点击zr');
    const pointInPixel = [params.offsetX, params.offsetY];
    if (myChart.containPixel('grid', pointInPixel)) {
        let xIndex = myChart.convertFromPixel({
            seriesIndex: 0
        }, [params.offsetX, params.offsetY])[0];
        /*事件处理代码书写位置*/
        console.log(xIndex);
        //这里可以根据X轴的索引来改变charts的数据显示
        myChart.setOption({
            title: [{
                id: 'pieTitle1',
                text: (xIndex + 1) + '月饼图1'
            }, {
                id: 'pieTitle2',
                text: (xIndex + 1) + '月饼图2'
            }],
            series: {
                name: '售后补单下单原因占比',
                data: cp1()
            }
        });
    }
});
//普通click只能相应系列元素的“点击”事件，
//要对axisPointer进行鼠标事件监听，需要使用getZr(),另外处理
// myChart.on('click',function(params){
//   console.log(params);
//   alert('点击了');
// });
// setInterval(function() {
//     myChart.setOption({
//         title: [{
//             id: 'pieTitle1',
//             text: '饼图1'
//         }, {
//             id: 'pieTitle2',
//             text: '饼图2'
//         }],
//         series:{
//              name: '售后补单下单原因占比',
//              data: cp1()
//         }
//     });
// }, 3000);