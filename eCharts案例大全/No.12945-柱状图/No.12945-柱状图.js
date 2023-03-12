	var myData =['郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '周口市', '南阳市', '信阳市', '漯河市', '商丘市', '济源市', '驻马店市', '三门峡市'];
	var databeast = ['1', '2', '3','1', '2', '3', '2', '3', '2', '3', '3','1', '2', '3', '2', '3', '2', '3'];
	var databeauty = ['1', '2', '3','2', '3','2', '3','2','3','2', '3','1', '2', '3', '2', '3', '2', '3'];
	option = {
    baseOption: {
        backgroundColor: '#DFDFDF',
     
        title: {
            //   text:'统计', 
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
         
        },
        legend: {
                data: [
                  {
                    name: '公共资源交易',
                    icon: 'rect',
                    textStyle: {
                        color: '#61BFF4'// 图例文字颜色
                    }
                }, {
                    name: '政务服务大厅',
                    icon: 'rect',
                    textStyle: {
                        color: '#F4F361'// 图例文字颜色
                    }
                }],
            top: 4,
            right: '10%',
           
        },
     
        
        toolbox:{
            right:20,
            feature:{
             
            }
        },
        
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, ],

        xAxis: [
          
            {
        
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            splitNumber:3,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                  formatter: function (value) {
                        var texts = [];
                        if (value == 1) {
                            texts.push('是否对接');
                        }
                        else if (value == 2) {
                            texts.push('统计嵌入');
                        }
                        else if (value == 3) {
                            texts.push('是否反馈');
                        }

                        return texts;
                    },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white',
                    width: 0.5,
                    type: 'solid',
                },
            },
           data: ['是否对接', '统计嵌入', '是否反馈'],
    
            
        }, {
            gridIndex: 1,
            show: true,
          
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            splitNumber:3,
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },
                  formatter: function (value) {
                        var texts = [];
                        if (value == 1) {
                            texts.push('是否对接');
                        }
                        else if (value == 2) {
                            texts.push('统计嵌入');
                        }
                        else if (value == 3) {
                            texts.push('是否反馈');
                        }

                        return texts;
                    },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'white',
                    width: 0.5,
                    type: 'solid',
                },
            },
            data: ['是否对接', '统计嵌入', '是否反馈'],
        }, 
        
        ],
        yAxis: [
            {
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
          
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'black',
                    fontSize: 14,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
           series: [{
                name: '公共资源交易',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#61BFF4',
                    },
                    emphasis: {
                        color: '#2D89BD',
                    },
                },
                data: databeast,
            },
            {
                name: '政务服务大厅',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#F4F361',
                    },
                    emphasis: {
                        color: '#C9C415',
                    },
                },
                data: databeauty
            }
        ],

    },
};