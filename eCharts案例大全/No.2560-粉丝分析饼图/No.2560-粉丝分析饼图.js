var colors = ['#0085ff','#00ffaa','#ecff44']
var datas = [
                {value: 689, name: '铁粉'},
                {value: 400, name: '粉丝'},
                {value: 200, name: '回头客'},
               
            ]
option = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        top :'middle',
        left: '70%',
        data:datas,
        formatter: function (name) {
            var data = option.series[0].data;
            var total = 0;
            var tarValue;
            for (var i = 0; i < data.length; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                tarValue = data[i].value;
              }
            }
            var v = tarValue;
            var p = Math.round(((tarValue / total) * 100));
            return `${name}  ${v}人(${p}%)`;
        }
    },
    series: [
        {
            name: '生命周期统计',
            type: 'pie',
            radius: '50%',
            data:datas,
             itemStyle: {
                color: function (param) {
                    // console.log(param.dataIndex)
                    return colors[param.dataIndex];
                }
            },
             label: {
                show: false
            },
             labelLine: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};