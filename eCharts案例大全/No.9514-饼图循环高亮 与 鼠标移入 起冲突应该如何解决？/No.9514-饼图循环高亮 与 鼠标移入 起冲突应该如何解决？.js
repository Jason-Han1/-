option = {
        title: {
            "text": '特种设备接入数量',
            "textStyle": {
                "fontSize": 14,
                "color": "#007aff",
                "top": '10%'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            icon: 'circle',
            itemHeight: '8',
            orient: 'horizontal',
            x: 'center',
            bottom: '1',
            data: ['东渚', '木渎', '香山', '胥口'],
            textStyle: {
                // fontSize: 18, //字体大小
                color: '#6ea4df' //字体颜色
            },

        },
        series: [{
            name: '访问来源',
            type: 'pie',
            radius: ['30%', '60%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '东渚' },
                { value: 310, name: '木渎' },
                { value: 234, name: '香山' },
                { value: 135, name: '胥口' }
            ]
        }],
        color: ['#007aff', '#7f4450', '#bb8dff', '#c8a000', '#e8395d']
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);



cycle_heighlight();
function cycle_heighlight(){
    //自动高亮
    var currentIndex = -1; 
    var a ; 
    autoCycle();//初次点入执行
    function autoCycle(){
        a=setInterval(function() {
            var dataLength = option.series[0].data.length;
            // 取消之前高亮的图形
            myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLength;
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
        }, 3000);
    }    
    //移除执行
    myChart.on('mouseout',function(){
        autoCycle();
    })
    //移入执行
    myChart.on('mouseover', function(params) {
        myChart.dispatchAction({
                type: 'downplay',
                seriesIndex: 0,
                dataIndex: currentIndex
            });
        clearTimeout(a)
        currentIndex=-1
    })
}
    $(window).resize(function() {
        myChart.resize();
    })
