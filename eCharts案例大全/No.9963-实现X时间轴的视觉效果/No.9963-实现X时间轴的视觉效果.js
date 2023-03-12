option = {
    xAxis: {
                show: true,
                type: 'category',
                offset:-200,    //为了将X轴放到中间
                boundaryGap: false,
                data: ['17:00', '17:10', '17:20', '17:30', '17:40', '17:50',
                       '18:00', '18:10', '18:20', '18:30', '18:40', '18:50',
                       '19:00', '19:10', '19:20', '19:30', '19:40', '19:50',
                       '20:00', '20:10', '20:20', '20:30', '20:40', '20:50',
                       '21:00', '21:10', '21:20', '21:30', '21:40', '21:50',
                       '22:00'],
                axisLabel: {
                    show: true,
                    interval: 0,
                    formatter: function (value) {
                        var minute = value.split(":")[1];   //拿到分钟
                        if (minute == "00") {
                            return value;
                        } else {
                            return "";
                        }
                    }
                },
                axisTick:{
                    show:true,
                    interval:0,
                    length:8
                }
            },
            yAxis: {
                show: false,
                type: 'value'
            },
            series: [
                {
                    name: '无数据',
                    type:'bar'
                }
            ]
};