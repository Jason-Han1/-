
let xData = [];
let xAllData = []
let yData = [];
let mo = 24 * 30;
let year = 2000;
for (let i = 0; i < mo; i++) {
    // xData.push(i);
    if (i % 10 === 0) {
        year = year + 1
    }
    xData.push(year);
    xAllData.push(i);
    yData.push(i);
}
let startDate = new Date('2015/01/02')
let endDate = new Date('2015/02/03')
// for(let i = startDate;i<endDate;i++){
//     xData.push(i)
// }
let end =(Math.floor((16 / xData.length) * 100));
option = {
    title: {
        text: '年月日折线图'
    },
    dataZoom: {
        type: 'inside', //图表下方的伸缩条
        show: true, //是否显示
        realtime: true, //
        start: 0, //伸缩条开始位置（1-100），可以随时更改
        end: 20, //伸缩条结束位置（1-100），可以随时更改
    },
    xAxis: {
        data: xData,
        // type : 'time',
        // min:function(value) {
        //     return value.min ;
        // },
        // max:mo,

        axisLabel: {
            interval: 10,
            rotate: 30,
            // formatter: function(value, index) {
            //     // 格式化成月/日，只在第一个刻度显示年份
            //     var date = new Date(value);
            //     var texts = [(date.getMonth() + 1), date.getDate()];
            //     // if (index === 0) {
            //     //     texts.unshift(date.getYear());
            //     // }
            //     return date.getFullYear();
            // }


        },

    },
    yAxis: {},
    series: [{
        type: 'line',
        data: yData
    }]
};

function setOptions() {

}

var currentIndex = -1;
myChart.on('dataZoom', function(params) {
    console.log(params.batch[0].start, params.batch[0], params.batch[0].end);
    let start = params.batch[0].start;
    let end = params.batch[0].end;
    let startEnd = end - start;
    console.log('startEnd:::', startEnd);
    if (startEnd <= 20 && 10 < startEnd) {
        console.log('走30这里了');
        myChart.setOption({
            xAxis: [{
                data: xAllData,
                axisLabel: {
                    interval: 5,
                },
            }],
            dataZoom: [{
                start: start, //伸缩条开始位置（1-100），可以随时更改
                end: end, //伸缩条结束位置（1-100），可以随时更改
            }],
        });
    } else if (startEnd <= 10 && 5 < startEnd) {
        console.log('走20这里了');
        myChart.setOption({
            xAxis: [{
                data: xAllData,
                axisLabel: {
                    interval: 3,
                },
            }],
            dataZoom: [{
                start: start, //伸缩条开始位置（1-100），可以随时更改
                end: end, //伸缩条结束位置（1-100），可以随时更改
            }],
        });
    } else if (startEnd <= 5 && 0 < startEnd) {
        console.log('走5这里了');
        myChart.setOption({
            xAxis: [{
                data: xAllData,
                axisLabel: {
                    interval: 0,
                },
            }],
            dataZoom: [{
                start: start, //伸缩条开始位置（1-100），可以随时更改
                end: end, //伸缩条结束位置（1-100），可以随时更改
            }],
        });
    }else{
         console.log('走原始这里了');
        myChart.setOption({
            xAxis: [{
                data: xData,
                axisLabel: {
                    interval: 10,
                },
            }],
            dataZoom: [{
                start: start, //伸缩条开始位置（1-100），可以随时更改
                end: end, //伸缩条结束位置（1-100），可以随时更改
            }],
        });
    }

});