option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    dataZoom: [
        {
            show: false, //为true滚动条出现
            type: 'slider', //type:'inside'，滚动条在最下面，鼠标点击滚动
            startValue: 0, // 从头开始。
            endValue: 3, //end百分比显示范围，endValue具体显示几个数值
        },
    ],
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            barWidth: 40,
        },
    ],
};
var timeOut=null
myChart.on('mouseover',stop);
myChart.on('mouseout',goMove);
autoMove()
function autoMove(){
   timeOut = setInterval(() => {
        // clearInterval(this.timeOut)
        // 每次向后滚动一个，最后一个从头开始。
        // if(this.stopMove){ return }
        if (Number(option.dataZoom[0].endValue) == option.series[0].data.length - 1) {
            option.dataZoom[0].endValue = 3;
            option.dataZoom[0].startValue = 0;
        } else {
            option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
            option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        }
        myChart.setOption(option);
    }, 3000);
}
    //停止滚动
  function stop(){
      clearInterval(timeOut)
  }
    //继续滚动
   function goMove(){
      autoMove()
    }