option = {
    backgroundColor:'#FFFFFF',
    title: {
        text: '食品储存',
        //subtext: '12月',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            var res = params.seriesName;
            res += '<br/>' + params.name + ' : ' +params.value+ '('+params.percent + '%'+ ')';
            return res;
        }
    },
    color: ['#e47070', '#55b4e3','#33CC99','#FFDAB9','#D8BFD8','#EEC591','#5F9EA0'],
    legend: {
        orient: 'vertical',
        right: '15%',
        bottom: '45%',
        data:['11.1区域摆放','11.2设备设施','11.3规范经营','11.4食品存放','11.5查验记录','11.6食用农产品储存','11.7监督公示'],
        itemWidth: 20,
        itemHeight: 10
    },
    series: [{
        name: '检查小项',
        type: 'pie',
        selectedMode: 'single',
        radius: ['21%', '40%'],
        label: {
            normal: {
                position: 'inner',
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
            value: 11,
            name: '11.1区域摆放'
        }, {
            value: 22,
            name: '11.2设备设施'
        }, {
            value: 33,
            name: '11.3规范经营'
        }, {
            value: 22,
            name: '11.4食品存放'
        }, {
            value: 22,
            name: '11.5查验记录'
        }, {
            value: 22,
            name: '11.6食用农产品储存'
        }, {
            value: 22,
            name: '11.7监督公示'
        }]
    }]
};