var fun = function (params) {
    var data3 = 0;
    for (var i = 0, l = series.length; i < l; i++) {
        data3 += series[i].data[params.dataIndex][1];
    }
    return data3;
};

option = {
    title: [
        {
            text: '2021',
            left: '23%',
            textStyle: {
                color: '#ccc',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'sans-serif',
                fontSize: 16,
            },
        },
        {
            text: '2020',
            right: '49%',
            textStyle: {
                color: '#ccc',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'sans-serif',
                fontSize: 16,
            },
        },
        {
            text: '2019',
            right: '22%',
            textStyle: {
                color: '#ccc',
                fontStyle: 'normal',
                fontWeight: '400',
                fontFamily: 'sans-serif',
                fontSize: 16,
            },
        },
    ],
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
        },
    },
    grid: [
        {
            top: 100,
            bottom: 101,
        },
        {
            height: 60,
            bottom: 40,
        },
        {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 10,
            containLabel: true,
        },
    ],
    xAxis: {
        type: 'category',
        data: ['备案回执单', '审查决定单', '备案回执单', '审查决定单', '备案回执单', '审查决定单'],
        splitLine: {
            show: true,
            interval: 1,
            lineStyle: {
                color: '#fff',
                width: 1,
                dashOffset: 11,
            },
        },
    },
    yAxis: {
        type: 'log',
        min: -1,
        max: 2000,
        logBase: 10,
        // axisLabel: {
        //   formatter: function (value) {
        //     return value === 1 ? 0.01 : value;//第2步，将y轴最小值1变成从0开始；
        //   }
        // },
    },
    tooltip: {
        show: true,
        trigger: 'axis',
    },
    series: [
        {
            type: 'bar',
            name: '科教影片',
            data: [1, 2, 3, 4, 5, null],
            stack: 'AD',
            label: {
                show: true,
            },
            itemStyle: {
                color: 'rgba(213, 64, 64, 1)',
            },
        },
        {
            type: 'bar',
            name: '动画影片',
            stack: 'AD',
            data: [8, 4, 103, 98, 76, 23],
            label: {
                show: true,
            },
        },
        {
            type: 'bar',
            name: '故事影片',
            stack: 'AD',
            data: [79, 36, 4, 8, 23, 9],
            label: {
                show: true,
            },
        },
        {
            type: 'bar',
            name: '恐怖片',
            stack: 'AD',
            data: [2, 99, 0, 3, 4, 5],
            label: {
                show: true,
            },
        },
        {
            name: '合计',
            type: 'bar',
            stack: 'AD',
            label: {
                normal: {
                    // show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000',
                    },
                    formatter: '111',
                },
            },
            data: [0, 0, 0, 0, 0, 0], //思路一：给series集合末尾多加一栏用于展示合计，但是值都是0；缺点：必须根据xAxis的data生成一组为空的数据，且tooltip不能加trigger: 'axis',这个条件，不然会展示合计：0
        },
    ],
};
//加载页面时候替换最后一个series的formatter
series[series.length - 1]['label']['normal']['formatter'] = fun;
var series = option['series'];
myChart.on('legendselectchanged', function (obj) {
    var b = obj.selected,
        d = [];
    //alert(JSON.stringify(b))
    for (var key in b) {
        if (b[key]) {
            //alert(key)
            for (var i = 0, l = series.length; i < l; i++) {
                var changename = series[i]['name'];
                if (changename == key) {
                    d.push(i); //得到状态是true的legend对应的series的下标
                }
            }
        }
    }
    var fun1 = function (params) {
        var data3 = 0;
        for (var i = 0, l = d.length; i < l; i++) {
            for (var j = 0, h = series.length; j < h; j++) {
                if (d[i] == j) {
                    data3 += series[j].data[params.dataIndex][1]; //重新计算总和
                }
            }
        }
        return data3;
    };
    series[series.length - 1]['label']['normal']['formatter'] = fun1;
    myChart.setOption(option);
});
