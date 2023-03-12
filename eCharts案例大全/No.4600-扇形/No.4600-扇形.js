var color =  ['#050BFF', '#00F8FE','#FFD700','#A227FF'];
var getname = ['共青团员','中共党员','未知','其他党派人士']
var getvalue = ['200','120','154','3'];
var echartData = [];
for(var i = 0;i<getname.length;i++){
	echartData.push({name:getname[i],value:getvalue[i]})
}

var formatNumber = function(num) {
    let reg = /(?=(\B)(\d{3})+$)/g;
    return num.toString().replace(reg, ',');
}
let total = echartData.reduce((a, b) => {
    return a + b.value * 1
}, 0);

option = {
    backgroundColor: '#000',
    color: color,
   tooltip: {
        trigger: 'item'
     },
    series: [{
        type: 'pie',
        //roseType: 'radius', //添加则为南丁格尔玫瑰图
        radius: ['40%', '60%'],
        center: ['50%', '50%'],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 0
            }
        },
        labelLine: {
            normal: {
                length: 10,
                length2: 50,
                lineStyle: {
                    color: '#79B5FF'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return (
                        '{name|' + params.name + '}\n{hr|}\n{value|' + formatNumber(params.value) + '}'
                    );
                },
                padding: [2, 0, 0, 0],
                rich: {
                    name: {
                        fontSize: 12,
                        padding: [0, -40, 0, -50],
                        color: '#77CAFF'
                    },
                    value: {
                        fontSize: 12,
                        padding: [0, -40, 0, -30],
                        color: '#FFFFFF'
                    }
                }
            }
        },
    }]
};