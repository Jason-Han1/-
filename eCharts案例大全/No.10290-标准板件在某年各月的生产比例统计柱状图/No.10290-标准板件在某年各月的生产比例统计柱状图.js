app.title = '标准板件年各月统计图';
var sourceData = [];
for (var i = 0; i < 12; i++) {
    var stdCount = Math.random() * 100;
    var totalCount = stdCount + Math.random() * 150;
    var tempArr = [i, (stdCount / totalCount * 100.0).toFixed(2), stdCount.toFixed(0), totalCount.toFixed(0)];
    sourceData.push(tempArr);
}
Math.random();

option = {
    title: {
        text: "2019年各月标准板件生产比例统计",
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        },
        //使用字符串模板的功能较弱，需要自定义函数解决
        formatter:'{a0}<br/>{b0} {c0}'
    },
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
    legend: {
        data: ['标准板件'],
        top: 45
    },
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
        type: 'value',
        name: '比例',
        min: 0,
        max: 100,
        interval: 25,
        axisLabel: {
            formatter: '{value} %'
        }
    }],
    series: [{
        name: '标准板件',
        type: 'bar',
        // data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        data: sourceData,
        label: {
            show: true,
            position: 'top',
            formatter:'{@[1]} %'
        }
    }]
};