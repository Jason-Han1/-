var rltData = [{
    name: '湖北',
    value: 850.43
}, {
    name: '北京',
    value: 54.30
}, {
    name: '新疆',
    value: 50.63
}, {
    name: '广西',
    value: 74.46
}, {
    name: '黑龙江',
    value: 138.39
}]
var curIndx = 0;

myChart.setOption({
    title: {
        x: 'center',
        text: rltData[curIndx].name + '的数据为' + rltData[curIndx].value,
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    },
    series: [{
         type: 'map',
         mapType: 'china',
         itemStyle: {
            normal: {
                areaColor: '#404a59',
                 borderColor: 'rgba(100,149,237,1)',
                borderWidth: 0.5
            },
            emphasis: {
                borderWidth: 3,
                borderColor: '#fff',
                areaColor: '#32cd32',
                label: {
                    shadowColor: '#fff', //默认透明
                    shadowBlur: 10,
                    show: true
                }
            }
        },
        data: (function() {
            var res = [];
            var len = -1;
            while (len++ < rltData.length - 1) {
                res.push({
                    name: rltData[len].name,
                    value: rltData[len].value,
                    selected: ifSelecte(len)
                });
            }
            return res;
        })()
    }]
});

 