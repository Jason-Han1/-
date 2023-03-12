option = {
    backgroundColor: '#04243E',
    color: ['#54aeff', '#e4942c', '#689b58'],
    tooltip: {
        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        formatter: function(params) {
            // console.log(params)
            var tipHtml = '';
            tipHtml = '<div style="width:136px;height:138px;color:#fff;background:rgba(52,90,200,.9);">' +
                        '    <div style="width:100%;height:31px;background:rgba(85,123,233,.9);">' +
                        '        <span style="line-height:31px;margin-left:12px">' + params.name + '</span>' +
                        '    </div>' +
                        '    <div style="height:107px;width:100%;background:rgba(52,90,200,.9);">' +
                        '        <div style="padding-left:12px;padding-top:12px">' +
                        '            <span>总数</span>' +
                        '            <span style="float:right;margin-right:18px">' + params.value + '</span>' +
                        '        </div>' +
                        '        <div style="padding-left:12px;padding-top:12px">' +
                        '            <span>占比</span>' +
                        '            <span style="float:right;margin-right:18px">' + params.percent + '%</span>' +
                        '        </div>' +
                        '        <div style="padding-left:12px;padding-top:12px">' +
                        '            <span>同比</span>' +
                        '            <span style="float:right;margin-right:18px">' + params.data.compared + '%</span>' +
                        '        </div>' +
                        '    </div>' +
                      '</div>';
            return tipHtml;
        }
    },
    series : [
        {
            name: '用户来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:335, name:'微信', compared:10},
                {value:310, name:'PC', compared:20},
                {value:234, name:'APP', compared:30},
            ],
            label: {
                normal: {
                    // formatter: '{t|{b}}\n{f|{c}}',
                    formatter: function(params){
                        console.log(params)
                        return '{t|' + params.name + '}' + '\n{f|' + '+' + params.data.compared + '%}';
                    
                    },
                    rich: {
                        t: {
                            fontSize: 14,
                            color: '#fff',
                            align: 'center',
                            padding: 4
                        },
                        f: {
                            fontSize: 12,
                            color: '#32d72a',
                            align: 'center',
                            padding: 4
                        }
                    }
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
