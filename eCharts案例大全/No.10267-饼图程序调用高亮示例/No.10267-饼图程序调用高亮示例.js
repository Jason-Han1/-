
var currentIndex = -1;
var isSet = true; // 为了做判断：当鼠标移动上去的时候，自动高亮就被取消

option = {
    title : {
        text: '饼图程序调用高亮示例',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    },
    series : [
        
        {
            name: '访问来源',
            type: 'pie',
            radius: ['0%', '50%'],
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    show:false,
                }
            },
             labelLine:{
                emphasis:{
                  lineStyle:{
                      color:'#000',
                      width:6
                  }
                }
            }
        },
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: ['0%', '0%'],
            data:[
                {value:335, name:'直接访问'},
            ],
            roseType: 'angle',
            label: {
               normal: {
                    position: 'inner'
               }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
        },
    ]
};

 //自动高亮展示
      var chartHover = function () {
        var dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
       myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }
      myChart.startCharts = setInterval(chartHover, 2000);

myChart.on('mouseover', function (param) {
        isSet = false;
        clearInterval(myChart.startCharts);
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        // 高亮当前图形
        myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: param.dataIndex
        })
});
myChart.on('mouseout', function (param) {
        if (!isSet) {
            // 高亮当前图形
        myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: param.dataIndex
        });
          myChart.startCharts = setInterval(chartHover, 2000);
          isSet = true;
        }
      });

