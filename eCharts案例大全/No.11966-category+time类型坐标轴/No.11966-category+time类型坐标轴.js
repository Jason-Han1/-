var baseDate = new Date(2019,02,12).getTime()
var baseDatestr = echarts.format.formatTime("yyyy-MM-dd",baseDate)
var daySecond = 24*60*60*1000
var dataX = []
var dataY = []
console.log(echarts.format.formatTime("yyyy-MM-dd",baseDate))
function makeData(baseDate){
    for(var i=0;i<8;i++){
        curDate = baseDate + daySecond*i + Math.random()*24*60*60*1000
        dataX.push(echarts.format.formatTime("yyyy-MM-dd",curDate))
        dataY.push(baseDatestr + " " +echarts.format.formatTime("hh:mm",curDate))
    }
}
makeData(baseDate)
option = {
    tooltip:{
        show:true,
        formatter:(params)=>{
            value = echarts.format.formatTime("hh:mm",params.value)
            return value}
    },
    xAxis: {
        type: 'category',
        data: dataX
    },
    yAxis: {
        type: 'time',
        min:"2019-03-12 00:00",
        max:"2019-03-12 23:00",
        axisLabel:{
            formatter:(params)=>{
            value = echarts.format.formatTime("hh:mm",params)
            return value}
        }
    },
    series: [{
        data: dataY,
        type: 'line',
        smooth: true
    }]
};
