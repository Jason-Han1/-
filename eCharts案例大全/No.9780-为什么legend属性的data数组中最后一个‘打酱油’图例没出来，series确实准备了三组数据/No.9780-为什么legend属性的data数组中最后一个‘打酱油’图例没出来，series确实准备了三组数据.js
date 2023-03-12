option = {
            grid: {
                top:'30',
                left: 5,
                // right: '30%',
                bottom: '5',
                // containLabel: true
            },
            // title: {text: '供应商产品质量'},
            tooltip:{show:true,trigger:'item'},
            legend: {
                right: 0,
                icon: 'circle',
                itemWidth: 12,
                data: ['不合格', '合格', '打酱油']
            },
            xAxis: {
                // data: [],
                // type: 'value',
                show: false
            },
            yAxis: {
                type: 'category',
                show: false,
                inverse:true,
                data:['出厂','抽检','安装','验收','运行'],
                axisTick: {
                    show: false
                }
            },
            series: [{
                type: 'bar',
                name: '不合格',
                data: [30, 45, 30, 45, 30],
                stack: '柱子',
                // barWidth: '20%',
                barMaxWidth: '30',
                color:'#f76f34',
                itemStyle:{
                    barBorderRadius:[8,0,0,8]
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(obj) {
                            return obj.value + '%';
                        }
                    }
                }
            }, {
                type: 'bar',
                name: '合格',
                data: [70, 55, 70, 55, 70],
                stack: '柱子',
                // barWidth: '20%',
                barMaxWidth: '30',
                color:'#3393e2',
                itemStyle:{
                    barBorderRadius:[0,8,8,0]
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: function(obj) {
                            return obj.value + '%';
                        }
                    }
                }
            },
                {
                name: '图标',
                type: 'scatter',
                hoverAnimation: false,
                symbolSize: 25,
                cursor: 'default',
                data: [{
                    value: -1,
                    //symbol: 'image://' + images_path +'/kpi/chart/chuchang.png'
                }, {
                    value: -1,
                    //symbol: 'image://' + images_path +'/kpi/chart/choujian.png',
                }, {
                    value: -1,
                    //symbol: 'image://' + images_path +'/kpi/chart/anzhuang.png'
                },{
                    value: -1,
                    //symbol: 'image://' + images_path +'/kpi/chart/yanshou.png'
                },{
                    value: -1,
                    //symbol: 'image://' + images_path +'/kpi/chart/yunxing.png'
                }],
                tooltip:{
                   formatter: function (params) {
                       return params.name;
                   }  
                },
                symbolOffset: [-20, 0],
            }
            ]
        };