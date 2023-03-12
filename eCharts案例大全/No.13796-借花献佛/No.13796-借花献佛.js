option_force = {
    tooltip: {
        show: true,
        trigger: 'item',
        //									formatter:function(params ){
        //										return params.name+'<br>'+'目录数：'+params.value+'，征集数据量：'+dataF[params.dataIndex%7]
        //									},
        "formatter": function(params) {
            if (params.dataType === 'edge') {
                return '';
            }
            return params.name + '<br>' + '目录数：' + params.value;
        },
        padding: 10,
        backgroundColor: 'rgba(2,133,255,0.6)',
        position: ['0%', '50%']
    },
    series: [{
        type: 'graph',
        symbolSize: 40,
        itemStyle: {
            color: '#038dcb'
        },
        roam: true,
        layout: 'force',
        label: {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b}',
                color: '#fff'
            },
            emphasis: {
                show: true,
                formatter: '{b}',
                fontSize: 16
            }
        },
        emphasis: {
            itemStyle: {
                color: '#80d5fb',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                borderWidth: 1,
                shadowColor: 'rgba(255, 255, 255, 0.8)',
                shadowBlur: 40
            },
            symbolSize: 60,
        },
        data: [{
            name: 'MY-City',
            value: 10,
            symbolSize: [100, 167],
            label: {
                show: false,
                color: '#e9ea2c',
                position: 'bottom',
            },
            symbol: 'image://img/tianjin.png'
        }, {
            name: '工商部',
            value: 101
        }, {
            name: '教育部',
            value: 141
        }, {
            name: '卫计委',
            value: 114
        }, {
            name: '食药总局',
            value: 10
        }, {
            name: '省工商局',
            value: 18
        }, {
            name: '标准化院',
            value: 20
        }, {
            name: '省国税局',
            value: 21
        }, {
            name: '省高法',
            value: 28
        }, {
            name: '省食药监局',
            value: 10
        }, {
            name: '省水利厅',
            value: 65
        }, {
            name: '省人社',
            value: 57
        }, {
            name: '省住建厅',
            value: 96
        }, {
            name: '省编办',
            value: 25
        }, {
            name: '省质监局',
            value: 63
        }, {
            name: '省水利厅1',
            value: 10
        }, {
            name: '省人社1',
            value: 20
        }, {
            name: '省住建厅1',
            value: 40
        }, {
            name: '省编办1',
            value: 10
        }, {
            name: '省质监局1',
            value: 25
        }, {
            name: '省水利厅2',
            value: 63
        }, {
            name: '省人社2',
            value: 46
        }, {
            name: '省住建厅2',
            value: 10
        }, {
            name: '省编办2',
            value: 75
        }, {
            name: '省质监局2',
            value: 10
        }, {
            name: '工商部1',
            value: 29
        }, {
            name: '教育部1',
            value: 10
        }, {
            name: '卫计委1',
            value: 46
        }, {
            name: '食药总局1',
            value: 49
        }, {
            name: '省工商局1',
            value: 10
        }],
        force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 170,
            edgeLength: 180
        },
        links: [{
            source: 'MY-City',
            target: '工商部'
        }, {
            source: 'MY-City',
            target: '教育部'
        }, {
            source: 'MY-City',
            target: '卫计委'
        }, {
            source: 'MY-City',
            target: '食药总局'
        }, {
            source: 'MY-City',
            target: '省工商局'
        }, {
            source: 'MY-City',
            target: '标准化院'
        }, {
            source: 'MY-City',
            target: '省国税局'
        }, {
            source: 'MY-City',
            target: '省高法'
        }, {
            source: 'MY-City',
            target: '省食药监局'
        }, {
            source: 'MY-City',
            target: '省水利厅'
        }, {
            source: 'MY-City',
            target: '省人社'
        }, {
            source: 'MY-City',
            target: '省住建厅'
        }, {
            source: 'MY-City',
            target: '省编办'
        }, {
            source: 'MY-City',
            target: '省质监局'
        }, {
            source: 'MY-City',
            target: '省水利厅1'
        }, {
            source: 'MY-City',
            target: '省人社1'
        }, {
            source: 'MY-City',
            target: '省住建厅1'
        }, {
            source: 'MY-City',
            target: '省编办1'
        }, {
            source: 'MY-City',
            target: '省质监局1'
        }, {
            source: 'MY-City',
            target: '省水利厅2'
        }, {
            source: 'MY-City',
            target: '省人社2'
        }, {
            source: 'MY-City',
            target: '省住建厅2'
        }, {
            source: 'MY-City',
            target: '省编办2'
        }, {
            source: 'MY-City',
            target: '省质监局2'
        }, {
            source: 'MY-City',
            target: '工商部1'
        }, {
            source: 'MY-City',
            target: '教育部1'
        }, {
            source: 'MY-City',
            target: '卫计委1'
        }, {
            source: 'MY-City',
            target: '食药总局1'
        }, {
            source: 'MY-City',
            target: '省工商局1'
        }]

    }]
};



myChart.setOption(option_force);
currentIndex = -1;
var time = setInterval(function() {
    var dataLen = option_force.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen;
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 1000);
myChart.on('mouseover', function(params) {
    clearInterval(time);
});
myChart.on('mouseout', function(params) {
    time && clearInterval(time);
    time = setInterval(function() {
        var dataLen = option_force.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
    }, 1000);
})