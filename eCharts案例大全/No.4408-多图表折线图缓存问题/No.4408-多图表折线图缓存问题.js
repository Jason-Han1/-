option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    legend: {
        data: ["动态数据1"]
    },
    // dataZoom: [{
    //         show: true,
    //         realtime: true

    //     },
    //     {
    //         type: 'inside',
    //         realtime: true

    //     }

    // ],
    tooltip: {
        trigger: 'axis',
        // formatter: function(params) {
        //     var arr = [];
        //     for (var index in params) {
     
        //         var date = params[index].data.value[0];
        //         arr.push(date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + "/" + date.getHours() + "/" + date.getMinutes() + "/" + date.getSeconds() + ' : ' + params[index].data.value[1]);
        //     }
        //     return arr.join("<br>");

        // },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
     //   type: 'time',
     type:'category',
        splitLine: {
            show: false
        },
        data :datearr
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        }
    },
    series: [{
            name: '模拟数据',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            sampling: 'average',
            data: data
        }
       
    ]
};
var data = [];
var datearr=[];
var now = new Date();
//初始化数据

//伪造数据
function randomData() {
    var value = Math.random() * 1000;
    var dateTime = new Date();
    dateTime.setTime(now.getTime() + 1000);
    // var dataItem = {
    //     name: dateTime,
    //     value: [
    //         dateTime,
    //         Math.round(value)
    //     ]
    
    // };
 
    // data.push(dataItem);
    data.push(Math.round(value))
    datearr.push(dateTime);

    now = dateTime;
}


for (var i = 0; i < 10; i++) {
    randomData();
    // data2.push(randomData());
}

//定时每秒添加一条
setInterval(function() {

    randomData();



    var newOption = myChart.getOption();

//     data = compressData(data);
//   data2 = compressData(data2);
//      data3 = compressData(data3);
//   data4 = compressData(data4);

    myChart.setOption({
        series: [{
                data: data,
                 sampling: 'average'
            }
       
        ],
           xAxis: {
  
        data :datearr
     },
    });
}, 1000);




