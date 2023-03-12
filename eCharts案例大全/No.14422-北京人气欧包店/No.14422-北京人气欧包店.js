var data = [
        {value:2242, name:'原麦山丘', selected:true},
        {value:1382, name:'真麦粮品'},
        {value:1250, name:'德南面包房'},
        {value:1244, name:'Baker&Spice'},
        {value:957, name:'零擀'},
        {value:671, name:'台北物语'}
    ];
var count = 0;
option = {
    title: {
        text: '北京人气欧包店',
        x: 'center'
    },
    backgroundColor: '#FAEBD7',
    color: ['#CD853F', '#EE9A00', '#EEAD0E', '#EEC591', '#EEC900', '#F5DEB3'],
    series: [
        {
            type:'pie',
            selectedMode: 'single',
            selectedOffset: 20,
            radius: [0, '30%'],
            label: {
                normal: {
                    show: false
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:data
        },
        {
            type:'pie',
            selectedMode: 'single',
            selectedOffset: 20,
            radius: ['40%', '55%'],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                      fontSize: 24,
                      color: '#698B69'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
              normal:{
                 opacity:0.6
              }  
            },
            data:data
        }
    ]
};
app.timeTicket = setInterval(function() {
    var r = count % data.length;
    option.series[0].data[r].selected = false;
    option.series[1].data[r].selected = false;
    count++;
    var s = count % data.length;
    option.series[0].data[s].selected = true;
    option.series[1].data[s].selected = true;
    myChart.setOption(option, true);
}, 1000);