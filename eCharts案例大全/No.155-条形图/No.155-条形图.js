var colorList=['rgb(125,235,255)','rgb(23,167,244)','rgb(1,155,255)','rgb(39,115,254)','rgb(39,93,254)'];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        width:280,
        height:100,
        top: '5%',
        right: '0%',
        left: '12%',
        bottom: '8%'
    },
    xAxis: [{
        type: 'category',
        data: ['公共资源交易', '政务服务网站', '省人民政府网', '两法衔接系统','公共信息平台'],
        axisLine: {
            lineStyle: {
                color: "#385194",
                width:3
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: 10,
                color:'#ffffff'
            },
            formatter:function(value)
            {

                var ret = "";//拼接加\n返回的类目项
                var maxLength = 3;//每项显示文字个数
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
               color: "#385194",
                width:3
            }
        },
        splitLine: {
            lineStyle: {
                // color: 'rgba(255,255,255,0.12)'
               color: '#192a44'
            }
        },
    }],
    series: [{
        type: 'bar',
        data: [3000, 2500, 2100, 1800, 1200],
        barWidth: '8px',
        itemStyle: {
            normal: {
                barBorderRadius: 0,
                color: (params) => {
				return colorList[params.dataIndex]
			}
            },
        },
    },
    {
		type: 'bar',
		itemStyle: {
			normal: {
				color: 'rgba(35,107,247,0.1)',
			}
		},
		silent: true,
		barWidth: 8,
		barGap: '-100%',
		data: [4000, 4000, 4000,4000, 4000]
	},
    ]
};
