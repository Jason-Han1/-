const MAX = [17, 17, 17, 17, 17]
var VALUE = [7,8,8,7,8]
const text = [7, 1, 2, 1, 8]
var colorList = ['#A3B1CE', '#F8B834', '#00C2A8', '#F8B834', '#A3B1CE']
VALUE = VALUE.map(function (item, index) {
    return {
        value: item,
        itemStyle: {
            color: colorList[index]
        }
    };
});
option = {
    xAxis: {
        type: 'category',
        data: ['沪A0731', '沪A0732', '沪A0733', '沪A0734', '沪A0735'],
        axisLine: {
            show: true,
            lineStyle: {
                color:'#586473'
            }
        },
        offset: 10,
        axisTick: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle:{
              color:'#586473'
            }
        },
        axisTick: {
            show: false
        },
    },
    series: [{
        type: 'bar',
        barWidth:20,
        itemStyle: {
            color: 'rgba(226, 248, 245,1)',
            borderRadius:8
        },
        data: MAX,
        silent: true,
        z:1
    },
    {
        type: 'custom',
        renderItem: function renderItem1(params, api) {
            var pos = api.coord([api.value(0), api.value(1)]);
            var size = api.size([1, text[params.dataIndex]]);
            var r = 8;
            var style = api.style();
            return {
                type: 'group',
                children: [{
                    type: 'rect',
                    x: pos[0],
                    y: pos[1],
                    shape: {
                        x: -10,
                        width: 20,
                        height: size[1],
                        r: r
                    },
                    style: style,
                    textContent: {
                        style: {
                            text: text[params.dataIndex],
                            fontSize: 12
                        }
                    },
                    textConfig: {
                        position: 'top'
                    },
                    silent: true,
                    z:10
                }]
            };
        },
        data: VALUE
    }]
};


