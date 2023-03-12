var index = 0;
var colorList = ['#0f0', '#ff0', '#ffc000', '#f00','#a42c9b','#662831'];
var baccolor = ["rgb(249,131,104)","rgb(249,107,104)","rgb(34,195,170)","rgb(66,164,245)"]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show: false
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',

        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        }

    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: [ '海曙区', '江北区', '北仑区', '镇海区', '鄞州区', '奉化区', '余姚市', '慈溪市', '象山县', '宁海县'],
        axisLabel: {
            margin: 100,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: baccolor[0],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 5
                },
                a2: {
                    color: '#fff',
                    backgroundColor: baccolor[1],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 5
                },
                a3: {
                    color: '#fff',
                    backgroundColor: baccolor[2],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 5
                },
                b: {
                    color: '#fff',
                    backgroundColor: baccolor[3],
                    width: 30,
                    height: 30,
                    align: 'center',
                    borderRadius: 5
                }
            },
            formatter: function(params) {
                if (index == 10) {
                    index = 0;
                }
                index++;
                if (index - 1 < 3) {
                    return [
                        '{a' + index + '|' + index + '}' + '  ' + params
                    ].join('\n')
                } else {
                    return [
                        '{b|' + index + '}' + '  ' + params
                    ].join('\n')
                }
            }
        }
    },
    series: [{
            z: 2,
            name: 'value',
            type: 'bar',
            data: [28,35,43,46,49,72,86,103,149,156].map((item, i) => {
                var colors = '';
                if(item < 50){
                    colors = colorList[0]
                }else if(item < 100){
                    colors = colorList[1]
                }else if(item <150){
                    colors = colorList[2]
                }else if(item < 200){
                    colors = colorList[3]
                }else{
                    colors = colorList[4]
                }
                /*switch (item){
        			case item < 50:
        			    colors = colorList[0]
        				break;
        			case 50 <= item < 100:
        			    colors = colorList[1]
        				break;
        			case item < 150:
        			    colors = colorList[2]
        				break;
        			case item < 200:
        			    colors = colorList[3]
        				break;
        			case item >=  100:
        			    colors = colorList[4]
        				break;
        			default:
        				break;
        		}*/
                itemStyle = {
                    color:colors
                }
                return {
                    value: item,
                    itemStyle: itemStyle
                };
            }),
            label: {
                show: true,
                position: 'right',
                color: '#333333',
                fontSize: 14,
                offset: [10, 0]
            }
        }

    ]
};