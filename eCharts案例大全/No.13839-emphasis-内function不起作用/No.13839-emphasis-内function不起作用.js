option = {
                    legend: {
                        orient: 'vertical',
                        left: 'right',
                        selectedMode: false,
                        data: ['统筹区全部上报', '统筹区部分上报', '无统筹区上报']
                    },
                    color: ['#4FA8F9', '#F5A623', '#96D38D'],
                    series: [
                        {
                            name: '',
                            type: 'map',
                            mapType: 'china',
                            showLegendSymbol: false,
                            label: { normal: { show: false }, emphasis: { color: '#006edd', show: true } },
                            data: [
                                 { name: '新疆', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '北京', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '天津', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '上海', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '重庆', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '浙江', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '江西', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '湖北', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '广西', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '甘肃', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '宁夏', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '海南', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '台湾', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '香港', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '澳门', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 1 },
                                { name: '河北', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '河南', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '云南', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '辽宁', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '黑龙江', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '湖南', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '安徽', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '山东', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                               
                                { name: '江苏', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 2 },
                                { name: '山西', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '内蒙古', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '陕西', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '吉林', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '福建', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '贵州', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '广东', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '青海', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '西藏', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                                { name: '四川', rate: Math.random().toFixed(2), value: Math.round(Math.random() * 1000), categories: 3 },
                            ],
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                    color: function (obj) {
                                        // console.log(obj)
                                        var color = "";
                                        switch (obj.data.categories) {
                                            case 1:
                                                color = '#DAE9F7'//"#4FA8F9";
                                                break;
                                            case 2:
                                                color = '#F9EEDB'//"#F5A623";
                                                break;
                                            case 3:
                                                color = '#E2F0E0'//"#96D38D";
                                                break;
                                        }
                                        return color;
                                    }
                                },
                                emphasis:{
                                    borderColor: '#000',
                                    color:'#4FA8F9',
                                    //  areaColor: function (obj) {
                                    //       console.log(obj);
                                    //  },
                                    // formatter:function(v){
                                    //     console.log(v)
                                    // }
                                }
                            },
                            // emphasis: {
                            //     itemStyle:{
                            //          borderColor: '#000',
                            //          areaColor: function (obj) {
                            //             console.log(obj)
                            //             var color = "";
                            //             switch (obj.data.categories) {
                            //                 case 1:
                            //                     color = "#4FA8F9";
                            //                     break;
                            //                 case 2:
                            //                     color = "#F5A623";
                            //                     break;
                            //                 case 3:
                            //                     color = "#96D38D";
                            //                     break;
                            //             }
                            //             return color;
                            //         }
                            //     }
                            // }
                        },
                        {
                            name: '统筹区全部上报',
                            type: 'map',
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                }
                            },
                            label: { normal: { color: '#006edd', show: false }, emphasis: { show: false } },
                        },
                        {
                            name: '统筹区部分上报',
                            type: 'map',
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                }
                            },
                            label: { normal: { color: '#006edd', show: false }, emphasis: { show: false } },
                        },
                        {
                            name: '无统筹区上报',
                            type: 'map',
                            itemStyle: {
                                normal: {
                                    borderColor: '#fff',
                                }
                            },
                            label: { normal: { color: '#006edd', show: false }, emphasis: { show: false } },
                        }
                    ]
                };
                
                myChart.on('mouseover', function(params) {
                    var seriesData = option.series[0].data;
                    var categories = params.data.categories;
                    var item = {};
                    if(categories==1){
                        item = {normal:{color:'#4FA8F9'}}
                    }else if(categories==2){
                        item = {normal:{color:'#F5A623'}}
                    }else{
                        item = {normal:{color:'#96D38D'}}
                    }
                    seriesData[params.dataIndex].itemStyle = item;
                    option.series[0].data=seriesData
                    myChart.setOption(option,true);
                });
                myChart.on('mouseout', function(params) {
                    var seriesData = option.series[0].data;
                    var item = {normal:{color:'#ff0000'}}
                    seriesData[params.dataIndex].itemStyle = {};
                    option.series[0].data=seriesData
                    myChart.setOption(option,true);
                });