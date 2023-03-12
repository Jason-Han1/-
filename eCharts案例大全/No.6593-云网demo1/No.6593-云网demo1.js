
var trafficWay = [{
    name: '火车',
    value: 20
},{
    name: '飞机',
    value: 10
},{
    name: '客车',
    value: 30
},{
    name: '轮渡',
    value: 40
}];
option = {
    backgroundColor: "#0a283c",
    legend: {
        orient: 'vertical',
        top: "center",
        right: "5%",
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7'],
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['30%', '38%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        label: {
            show: false,
            normal: {
                position: 'outside',
                fontSize: 16,
                color:'#fff',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < trafficWay.length; i++) {
                        total += trafficWay[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return '交通方式：' + params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                    }else {
                        return '';
                    }
                },
            }
            
                
        },
        labelLine: {
            length: 1,
            length2: 20,
            smooth: true
        },        
        color:['#face25','#6eb249','#1f75ff','#00e1ff'],
        data:trafficWay
    }]
};