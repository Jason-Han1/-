var dataArray = [];
dataArray.push({ id: 'sqjjhz', name: '社区居家照护', value: 1158, zs: 1578, colora: '#1db0d2', colorb: '#01438b', color: ['#1c80d5', '#2ed3dd'] });
 var data1 = [{ value: dataArray[0].value, name: '占' }, { value: dataArray[0].zs -  dataArray[0].value, name: '不占' }];
            var data1_1 = [{ value:  dataArray[0].zs , name: '占' }, { value: 0, name: '不占' }];

            data1.push({ value:  dataArray[0].zs , name: '__other', 
            itemStyle: { normal: { color: 'rgba(0,0,0,0)' } } });
            data1_1.push({ value:  dataArray[0].zs , name: '__other', 
            itemStyle: { normal: { color: 'rgba(0,0,0,0)' } } });
option={
    title: {
                    show: false
                },
series:[{
                name: dataArray[0].name,
                type: 'pie',
                startAngle: -180,
                radius: ['85%', '95%'],
                center: ['50%', '70%'],
                hoverAnimation: false,
                label: {
                    normal: {
                        color: '#90e7ff',
                        show: false,
                        position: 'inside',
                        textStyle: {
                            fontSize: 20,
                            fontFamily: 'ZHSCNMT-GBK'
                        },
                        formatter: function (a, b) {
                            return a.value
                        }
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: data1,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            //自定义颜色
                            return dataArray[0].color[params.dataIndex];
                        }
                    }
                }
            }, {
                name: dataArray[0].name,
                type: 'pie',
                startAngle: -180,
                radius: ['71%', '75%'],
                center: ['50%', '70%'],
                hoverAnimation: false,
                legendHoverLink: false,
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },

                itemStyle: {
                    normal: {
                        color: dataArray[0].colorb
                    }
                },
                data: data1_1
            }]//需要多个自己变量series  
}