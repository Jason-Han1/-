var chartdata1 = [355.5, 255.5, 155.5, 55.5];

var dataname = ['part1', 'part2', 'part3', 'part4'];
var unitname ='￥'
var Name = ['value'];
var colortype = ['#3398DB'];
//var colortype=['rgb(255,217,0)', 'rgb(255,74,74)', 'rgb(36,51,249)'];

dv1 = chartdata1;
//function getchartdata1(){
//    return dv1;
//}
function getchartdata1() {
    var c1 = Math.round(255 - 0.5 * dv1[0]);
    var mainColor1 = 'rgb(50,' + c1 + ',' + 210 + ')';

    var c2 = Math.round(255 - 0.5 * dv1[1]);
    var mainColor2 = 'rgb(50,' + c2 + ',' + 210 + ')';

    var c3 = Math.round(255 - 0.5 * dv1[2]);
    var mainColor3 = 'rgb(50,' + c3 + ',' + 210 + ')';

    var c4 = Math.round(255 - 0.5 * dv1[3]);
    var mainColor4 = 'rgb(50,' + c4 + ',' + 210 + ')';

    return [{
        value: dv1[0],
        itemStyle: {
            normal: {
                color: mainColor1,
            }
        }
    }, {
        value: dv1[1],
        itemStyle: {
            normal: {
                color: mainColor2,
            }
        }
    }, {
        value: dv1[2],
        itemStyle: {
            normal: {
                color: mainColor3,
            }
        }
    }, {
        value: dv1[3],
        itemStyle: {
            normal: {
                color: mainColor4,
            }
        }
    }];
}

var option = {
    color: colortype,
    legend: {
        y: 'top',
        right: '4%',
        data: Name,
        textStyle: {
            color: '#000',
            fontWeight: '600',
            fontSize: 20
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: dataname,
        axisLabel: {
            textStyle: {
                color: '#000',
                fontWeight: '600',
                fontSize: 24,
            }
        },
        axisTick: {
            show: false,
            alignWithLabel: false
        }
    }],
    yAxis: [{
        type: 'value',
        show: false
    }, {
        type: 'value',
        min: -10,
        max: 100,
        show: false
    }, ],
    series: [{
        name: name,
        type: 'bar',
        //barWidth: '60%',
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: function(obj) {
                    if (obj.value === 0) {
                        return '';
                    } else {
                        return unitname+obj.value ;
                    }
                },
                textStyle: {
                    color: '#000',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontFamily: 'sans-serif',
                    fontSize: 24,
                },
            },
        },
        data: getchartdata1(),
        animationEasing: 'quarticOut',
        animationDuration: 2000,
        animationEasingUpdate: 'quarticOut',
        animationDurationUpdate: 2500
    }, ]
};

///////////////////////////////////////////////////
setInterval(function() {
    var a1 = Math.random() * chartdata1[0];
    var a2 = Math.random() * chartdata1[1];
    var a3 = Math.random() * chartdata1[2];
    var a4 = Math.random() * chartdata1[3];

    var b1 = a1.toFixed(1);
    var b2 = a2.toFixed(1);
    var b3 = a3.toFixed(1);
    var b4 = a4.toFixed(1);

    var newdata = [b1, b2, b3, b4]

    //var zerodata  =[0,0,0,0];
    //var Aee = [zerodata,chartdata1];  
    //var n = Math.floor(Math.random() * Aee.length + 1)-1;  
    //dv1=Aee[n];
    dv1 = newdata



    myChart.setOption({
        series: [{
            name: Name,
            type: 'bar',
            data: getchartdata1()
        }, ]
    });
}, 2500);