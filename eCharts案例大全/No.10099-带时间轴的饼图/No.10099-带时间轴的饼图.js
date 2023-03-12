function getRandom(num) {
  return Math.floor(Math.random() * num);
}


var time = ['2017', '2018', '2019', '2020'],
    pieData = function() {
        var arr = [];
        for (var i = 0; i < time.length; i++) {
            arr.push({
                time: time[i],
                data: [{
                    name: '房屋建筑工程',
                    value: getRandom(1000)
                }, {
                    name: '市政工程',
                    value: getRandom(1000)
                }, {
                    name: '交通工程',
                    value: getRandom(1000)
                }, {
                    name: '水利工程',
                    value: getRandom(1000)
                }, {
                    name: '电力工程',
                    value: getRandom(1000)
                }, {
                    name: '其它工程',
                    value: getRandom(1000)
                }]
            });
        }
        return arr;
    }();

var optionsData = [];
    $.each(pieData, function (i, e) {
      optionsData.push({
        series: {
          data: e.data
        }
      });
    });
    
option = {
    baseOption: {
        timeline: {
            tooltip: {
                show: false
            },
            playInterval: '5000',
            axisType: 'category',
            autoPlay: true,
            symbol: 'circle',
            symbolSize: 14,
            itemStyle: {
                normal: {
                    color: '#000b33',
                    borderColor: '#1f79ff',
                    borderWidth: 2
                },
                emphasis: {
                    color: '#3cd1fc'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14,
                        color: '#1f79ff'
                    }
                },
                emphasis: {
                    textStyle: {
                        fontSize: 14,
                        color: '#3dd4ff'
                    }
                }
            },
            lineStyle: {
                color: '#1f79ff',
                width: 2
            },
            checkpointStyle: {
                color: '#3dd4ff',
                borderColor: '#1f79ff',
                    borderWidth: 2
            },
            controlStyle: {
                show: false
            },
            data: time
        },
        tooltip: {
            textStyle: {
                fontSize: 18
            }
        },
        color: ['#f9918c', '#6bdbab', '#6a4afd', '#c641f6', '#5ef5d4', '#00bcea'],
        series: [{
            name: '交易额',
            type: 'pie',
            radius: ['36%', '58%'],
            center: ['50%', '39%'],
            label: {
                textStyle: {
                    fontSize: 14
                }
            },
            labelLine: {
                show: true,
                length: 10,
                length2: 25
            }
        }]
    },
    options: optionsData
};