// var base = +new Date(2018, 9, 3);
    // var oneDay = 24 * 3600 * 1000;//毫米,分钟,小时,天
 
    // var data2 = [];
    // var data = [];
    // var data12 = [];
    // var data22 = [];
    // var now = new Date(base);
    // var now2 = new Date(base);
 
    var color1='#f34';
    var    color2 = '#23f';
    // function addData(shift) {
 
    //     now = new Date(+new Date(now) + Math.random() * 10 * 1000 * 60);
    //     now2 = new Date(+new Date(now2) + oneDay);
    //     data12 = new Array();
    //     data22 = new Array();
    //     data12.push(now);
    //     data12.push((Math.random() - 0.4) * 10 + 15);
    //     data22.push(now);
    //     data22.push((Math.random() - 0.4) * 40 + 15);
    //     data.push(data12);
    //     data2.push(data22);
 
    //     if (shift) {
    //         data.shift();
    //         data2.shift();
    //     }
    //     //alert(now);
    //     now = new Date(+new Date(now) + Math.random() * 10 * 1000 * 60 );
    //     now2 = new Date(+new Date(now2) + oneDay);
    //     //alert(now);
    // }
    // for (var i = 1; i < 50; i++) {
    //     addData();
    // }
var data3 = [[1584086222000,"573"],[1584086342000,"57"],[1584086462000,"56"],[1584086582000,"554"],[1584086702000,"54"],[1584086822000,"536"],[1584086942000,"53"],[1584087062000,"53"],[1584087182000,"53"],[1584087302000,"55"],[1584087422000,"574"],[1584087542000,"55"],[1584087662000,"545"],[1584087782000,"55"],[1584087902000,"545"],[1584088022000,"544"],[1584088142000,"53"],[1584088262000,"54"],[1584088382000,"54"],[1584088502000,"52"],[1584088622000,"51"],[1584088742000,"514"],[1584088862000,"53"],[1584088982000,"556"],[1584089102000,"55"],[1584089222000,"55"],[1584089342000,"55"],[1584089462000,"57"],[1584089582000,"58"],[1584089702000,"57"],[1584089822000,"55"]]
var data4 = [[1584086222000,"473"],[1584086342000,"47"],[1584086462000,"46"],[1584086582000,"454"],[1584086702000,"44"],[1584086822000,"436"],[1584086942000,"43"],[1584087062000,"43"],[1584087182000,"43"],[1584087302000,"45"],[1584087422000,"474"],[1584087542000,"45"],[1584087662000,"445"],[1584087782000,"45"],[1584087902000,"445"],[1584088022000,"444"],[1584088142000,"43"],[1584088262000,"44"],[1584088382000,"44"],[1584088502000,"42"],[1584088622000,"41"],[1584088742000,"414"],[1584088862000,"43"],[1584088982000,"456"],[1584089102000,"45"],[1584089222000,"45"],[1584089342000,"45"],[1584089462000,"47"],[1584089582000,"48"],[1584089702000,"47"],[1584089822000,"45"]]     
    option = {
        title: {
            text: '双Y轴测试 x轴type=time'
        },
        legend: {
            //selectedMode: 'single',
            data: ['成交', '成交2']
            //orient:'vertical'    //默认水平方向,这里设置为垂直
        },
        tooltip: {
        },
        grid: {
            bottom: '80px'
        },
        xAxis: {
            type: 'time',
            axisPointer: {//y轴上显示指针对应的值
                show: true,
            },
        },
        yAxis: [
            {
                name: '销量1',
                type: 'value',
            },
            {
                name: '销量2',
                type: 'value',
            }
            
        ],
        
        // dataZoom: [
        //     {   // 这个dataZoom组件，默认控制x轴。
        //         type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        //         start: 10,      // 左边在 10% 的位置。
        //         end: 60         // 右边在 60% 的位置。
        //     },
        //     {   // 这个dataZoom组件，默认控制x轴。鼠标滚动变化
        //         type: 'inside', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        //         start: 10,      // 左边在 10% 的位置。
        //         end: 60         // 右边在 60% 的位置。
        //     },
        // ],
        
        series: [
            {
                name: '成交',
                type: 'line',
                smooth: true,
                symbol: 'none',
                ///stack: 'a',
                color: color2,
                data: data3,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: function (params) {
                            return parseInt(params.value[1]);
                        }
                    }
                }
            },
            {
                name: '成交2',
                type: 'line',
                smooth: true,
                symbol: 'none',           
                //stack: 'a',
                color: color1,
                yAxisIndex:1,
                data: data4,
                showSymbol: false,
                hoverAnimation:false,
            }
        ]
    };
