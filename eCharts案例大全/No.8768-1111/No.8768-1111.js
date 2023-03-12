app.title = '环形图';

const colors = 
    [
        
    ]

var isVal = true;
option = {
    backgroundColor: '#333',
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['中国人保','太平洋保险','平安保险','其它'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },
    series: [{
        type:'pie',
        radius: ['0', '110'],
         selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        itemStyle: {
            borderColor: '#04192b',
            borderWidth: 1
        },
        label: {
            normal: {
                show: true,
                formatter: function(params){
                    if(isVal) {
                        var d = params.data;
                    
                        return d.value + d.untis;  
                    }else {
                        return params.percent+'%'
                    }
                }
            }
        },
        labelLine: {
            length: 24  
        },
        emphasis: {
            label: {
                show: true
            }    
        },
        data:[{
            value:100, 
            name:'其它',
            untis: '人'
        }, {
            value:30, 
            name:'平安保险',
            untis: '人'
        }, {
            value:30, 
            name:'太平洋保险',
            untis: '人'
        }, {
            value:30, 
            name:'中国人保',
            untis: '人'
        }]
    }]
};

