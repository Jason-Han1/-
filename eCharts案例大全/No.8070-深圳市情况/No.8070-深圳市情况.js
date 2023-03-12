    var category = ["南山区","龙岗区",  "福田区","宝安区",  "龙华区", "罗湖区", "光明新区", "坪山区", "盐田区", "大鹏新区"];
    var dottedBase = +new Date();
    var lineData = [3341, 4671,3085, 4962,  2934, 2447, 1057, 692, 328, 174];

   var lineData2 = [ 6103, 5036, 4546, 3854,2510, 2390, 1020,760, 656, 351];
    // option
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b0}<br />{a0}: {c0}项<br />{a1}: {c1}亿',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true,
                    backgroundColor: '#333'
                }
            }
        },
        legend: {
            data: ['自我声明标准数','GDP'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: [{
            name: "自我声明标准数",
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        }, {
            name: "GDP",
   
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        }],
        series: [{
            name: '自我声明标准数',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        },{
            name: 'GDP',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData2
        }]
    };