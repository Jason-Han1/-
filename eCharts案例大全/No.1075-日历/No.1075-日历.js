      let time ='2021-11'
      
       let maxArr = [];

        let month = new Date(time).getMonth() + 1; //获取当前月
        var year = new Date(time).getFullYear(); //获取当前年
        var datas = []; //新建日期数组
        var dataLength = new Date(year, month).toJSON().substring(0, 10).split('-')[2]; //获取当前年月日期最大值
        for (var i = 0; i < Number(dataLength); i++) {
            let months = month >= 10 ? month : '0' + month;
            let day = i + 1 >= 10 ? i + 1 : '0' + (i + 1);
            datas.push({ date: year + '-' + months + '-' + day, total: Math.floor(Math.random() * 100) }); //存入数组
        }
        let chartData = [];
        datas.forEach((item) => {
            maxArr.push(item.total);
            chartData.push({
                value: [item.date, item.total],
            });
        });
        let thisMonth = time; //当前月份
 option ={
            tooltip: {
                backgroundColor: '#3A5B90',
                textStyle: {
                    color: '#A7E4FD',
                    fontSize: 18
                },
                formatter: function (params) {
                    return '入场车辆数: ' + params.value[1];
                },
            },
            visualMap: {
                min: 0,
                max: 300,
                inRange: {
                    color: ['#1EBED4', '#1CE4FF', '#1780AC'],
                },
                show: false,
            },
            calendar: {
                cellSize: ['auto', 52],
                left: '10%',
                right: '10%',
                top: '10%',
                orient: 'vertical',
                range: [thisMonth],
                itemStyle: {
                    borderColor: '#060F2C',
                    borderWidth: 1,
                },
                splitLine: {
                    show: false,
                },
                yearLabel: { show: false },
                monthLabel: {
                    show: false,
                },
                dayLabel: {
                    firstDay: 1,
                    margin: 10,
                    nameMap: 'cn',
                    textStyle: {
                        color: '#579AF9',
                        fontSize: 16,
                    },
                },
            },
            series: [
                {
                    type: 'scatter',
                    coordinateSystem: 'calendar',
                    symbolSize: 1,
                    label: {
                        normal: {
                            show: true,
                            formatter: function (params) {
                                var d = echarts.number.parseDate(params.value[0]);
                                return d.getDate();
                            },
                            textStyle: {
                                color: '#fff',
                                fontSize: 20,
                                textShadowColor: '#0B1131',
                                textShadowBlur: 0,
                                textShadowOffsetX: 1,
                                textShadowOffsetY: 1
                            },
                        },
                    },
                    data: chartData,
                },
                {
                    type: 'heatmap',
                    coordinateSystem: 'calendar',
                    data: chartData
                },
            ],
        };