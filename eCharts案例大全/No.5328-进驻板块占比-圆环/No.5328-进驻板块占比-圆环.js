let getname= ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
var  getvalue=[34.2,38.87,17.88,9.05,2.05];
option = {
    color:['#E67A72','#FAC633','#4BB0FD','#C993D5'],
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
     title: {
        text: '进驻板块占比',
        top: '48%',
        textAlign: "center",
        left: "49%",
        textStyle: {
            color: '#000',
            fontSize: 12,
            fontWeight: '400'
        }
    },
    legend: {
        orient: 'vertical',
        icon:'circle',
        right: 12,
        top:'middle',
         formatter: function(name) {
            for (var i = 0; i<getname.length; i++) {
				return '{rate|' + name+ '}{name|' + getvalue[i].toFixed(2) + '%}{name|}'
            }
        },
        textStyle: {
            rich: {
                name: {
                    fontSize: 12,
                    fontWeight: 400,
                    width: 12,
                    height: 35,
                    padding:[0,0,0,50],
					color:'#656565'
                },
                rate: {
                    fontSize: 12,
                    fontWeight: 500,
                    height: 35,
                    width: 20,
                    padding:[0,0,0,0],
					color:'#656565'
                }
            }
        },
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 234, name: '联盟广告'},
                {value: 135, name: '视频广告'},
                {value: 1548, name: '搜索引擎'}
            ]
        }
    ]
};
