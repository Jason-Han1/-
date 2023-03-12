app.title = '环形图';
var seriesData = [
    {value:335, name:'直接访问'},
    {value:310, name:'邮件营销'},
    {value:234, name:'联盟广告'},
    {value:135, name:'视频广告'},
    {value:1548, name:'搜索引擎'}
], total = 2582;
var legendDataArr = [], legendDataText = [], pa = [];
echarts.util.map(seriesData, function(n) {
    pa.push((n['value'] / total * 100).toFixed(0));
    legendDataText.push(n['name']);
    legendDataArr.push({
        name: n['name'],
        icon: 'circle',
        textStyle: {
            rich: {
                gh: {
                    padding: [0, 0, 0, -15],
                    fontSize: 24,
                    color: '#444',
                    lineHeight: 30,
                    align: 'left'
                }
            }
        }
    });
});
option = {
    backgroundColor: '#fff',
    color: ['#ff715e', '#f7e631', '#7dca53', '#0098d9', '#2ec7c9'],
    tooltip: {
        show: false
    },
    legend: {
        orient: 'vertical',
        x: '70%',
        y: 'center',
        align: 'left',
        selectedMode: false,
        formatter: function(v) {
            return v + '\n' + '{gh|' + pa[legendDataText.indexOf(v)] + '%}';
        },
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            lineHeight:16,
            height: 16,
            color: '#888'
        },
        data:legendDataArr
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '65%'],
            center: ['35%', '50%'],
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: seriesData
        }
    ]
};
