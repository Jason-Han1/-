  option = {
            title:{
                text:'双折线图',
                x:'center'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['归档',"",'下单'], //图例换行
                y:'bottom',
                x:'left',
                containLabel: true
            },
            grid: {
                left: '3%',
                right: '4%',
                //bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['5-31','6-1','6-2','6-3','6-4','6-5','6-6','6-7','6-8','6-9','6-10','6-11','6-12','6-13','6-14','6-15','6-16','6-17','6-18','6-19','6-20','6-21','6-22','6-23','6-24','6-25','6-26','6-27','6-28','6-29','6-30'],
                splitLine: {
                        show: false,
                    },
                axisTick:{
                    show:true, //显示刻度线
                },
                axisLabel:{
                    show:true,
                    interval: 0 //显示所有x轴刻度
                }
                  
            },
            yAxis: {
                type: 'value',
                
                axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#000'
                        }
                    },
                min:0,
                splitNumber:10,

            },
            series: [
                {
                    name:'归档',
                    type:'line',
                    data:[720,700,781,844,799,884,2135,589,805,733,492,631,770,774,916,944,878,874,943,960,942,977,991,936,512,945,859,1082,1064,1137,1132],
                    symbol:'rect', //节点图案
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#c0504d',
                        }
                    }
                },
                {
                    name:'下单',
                    type:'line',
                    data:[1162,1288,1203,1489,1534,1470,2705,965,947,1079,1280,1294,1312,1346,1322,1338,1043,1535,1505,1653,1683,1510,1092,1173,1451,1515,1837,1647,1745,1526,1603],
                    symbol:'diamond',
                    symbolSize:10,
                    itemStyle: {
                        normal: {
                            color: '#4f81bd',
                        }
                    }
                },
            ]
        };
