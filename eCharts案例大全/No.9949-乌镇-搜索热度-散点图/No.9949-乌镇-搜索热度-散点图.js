 let nameList = [
            {
                name: '乌镇',
                value: '100'
            },
            {
                name: '嘉兴',
                value: '90'
            },
            {
                name: '互联网大会',
                value: '80'
            },
            {
                name: '西栅大街',
                value: '100'
            },
            {
                name: '酒店',
                value: '90'
            },
            {
                name: '包车',
                value: '80'
            },
            {
                name: '公交',
                value: '100'
            },
            {
                name: '桐乡站',
                value: '90'
            },
            {
                name: '浙传',
                value: '80'
            },
            {
                name: '智能家居',
                value: '80'
            },
            {
                name: '智能消防',
                value: '80'
            },
            {
                name: '无人机',
                value: '80'
            },
        ];

        let dataList = [
            {
                offset: [50, 50],
                symbolSize: 150,
            },
            {
                offset: [80, 100],
                symbolSize: 70,
            },
            {
                offset: [70, 0],
                symbolSize: 70,
            },
            {
                offset: [75, 50],
                symbolSize: 40,
            },
            {
                offset: [35, 100],
                symbolSize: 70,
            },
            {
                offset: [33, 10],
                symbolSize: 70,
            },
            {
                offset: [15, 80],
                symbolSize: 70,
            },
            {
                offset: [20, 23],
                symbolSize: 50,
            },

            {
                offset: [10, 23],
                symbolSize: 40,
            },
            {
                offset: [90, 23],
                symbolSize: 70,
            },
            {
                offset: [60, 100],
                symbolSize: 40,
            },
            {
                offset: [50, 0],
                symbolSize: 40,
            },
        ];

        var datas = [];
        for (let i = 0; i < nameList.length; i++) {
            var item = nameList[i];
            var itemToStyle = dataList[i];
            datas.push({
                name: item.name,
                value: itemToStyle.offset,
                symbolSize: itemToStyle.symbolSize,
                label:{
                    fontSize:itemToStyle.symbolSize/3
                }
            })
        }
      option = {
            xAxis: {
                show: false,
                min: 0,
                max: 100
            },
            yAxis: {
                show: false,
                min: 0,
                max: 100
            },
            series: [{
                // symbolSize: 60,
                type: 'scatter',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter:"{b}",

                        color: '#6C60F4' // 100% 处的颜色
                            
                    }
                    
                },
                itemStyle: {
                    normal: {
                        color: 'rgba(0, 188, 255, 0.0001)',
                        borderWidth: 0,
                        borderColor: '#00D9FF'
                    },
               
                },
                data: datas,
            }]
        };

        myChart.setOption(option);

        function newArray(arr) {
            var t;
            for (var i = 0; i < arr.length; i++) {
                var rand = parseInt(Math.random() * arr.length);
                t = arr[rand];
                arr[rand] = arr[i];
                arr[i] = t;
            }
        }

        this.timer = setInterval(() => {
            newArray(nameList);
            datas = [];
            for (let i = 0; i < nameList.length; i++) {
                var item = nameList[i];
                var itemToStyle = dataList[i];
                datas.push({
                    name: item.name,
                    value: itemToStyle.offset,
                    symbolSize: itemToStyle.symbolSize,
                    label:{
                    fontSize:itemToStyle.symbolSize/3
                }
                })
            }
            myChart.setOption({
                series: [{
                    data: datas
                }]
            });
        }, 3000);