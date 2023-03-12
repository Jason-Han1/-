
   option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '5%',
        bottom: '12%'
    },
    xAxis: [{
        type: 'category',
        data: ['SQL注入', '非法访问', '其他', 'DOS攻击','信息爬虫', '进出', '业务主机', '扫描器','恶意攻击', '攻击协助'],
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        // axisLabel: {
        //     margin: 10,
        //     color: '#e2e9ff',
        //     textStyle: {
        //         fontSize: 14
        //     },
        // },
         axisLabel: {
            interval: 0,
            formatter:function(value)
            {

                var ret = "";//拼接加\n返回的类目项
                var maxLength = 2;//每项显示文字个数
                var valLength = value.length;//X轴类目项的文字个数
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                if (rowN > 1)//如果类目项的文字大于3,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = "";//每次截取的字符串
                        var start = i * maxLength;//开始截取的位置
                        var end = start + maxLength;//结束截取的位置
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串
                    }
                    return ret;
                }
                else {
                    return value;
                }
            }
        },
        axisTick: {
            show: false
        }
    }],
    yAxis: [{
        min:0,
        max:4000,
        interval:1000,
        type: "value",
        axisLabel: {
          textStyle: {
                color: '#ffffff',
            },
            formatter: function (value, index) {
            // value大于1000时除以1000并拼接k，小于1000按原格式显示
            if (value >= 1000) {
              value = value/1000  + "000";
            }else if(value < 1000){
              value;
            }
            return value;
      }
    },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
             lineStyle: {
                color: '#FFFFFF'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
    }],
    series: [{
        type: 'bar',
        data: [2000, 1900, 1700, 1400, 1000, 800, 600, 400, 200, 100,],
        barWidth: '22px',
        itemStyle: {
            normal: {
                color: 'rgb(24,176,255)'
                
            }
        },
    }]
};