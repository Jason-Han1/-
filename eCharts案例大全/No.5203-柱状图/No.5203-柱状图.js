let dataconfig = [ { "val": 180, "col": "#c1232b" },
                   { "val": 220, "col": "#27727b" },
                   { "val": 260, "col": "#fcce10" },
                   { "val": 300, "col": "#e87c25" },
                   { "val": 340, "col": "#b5c334" },
                   { "val": 99999, "col": "#fe8463" }]

let barData = [160, 182, 223, 270, 170, 340, 352];

option = {
    backgroundColor: '#fff',
    title: {
        text: 'Awesome Chart'
    },
     grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        barWidth: '40%',
        data: barData,
        itemStyle: {
            normal: {
                color: function(params) {
                    // console.log(params)
                    // params.data // 220
                    // params.dataIndex // 0
                    for(let key in dataconfig){
                        if (dataconfig[key].val >= params.data) {
                            // console.log(params.dataIndex,params.data,dataconfig[key].val, dataconfig[key].col)
                            return  dataconfig[key].col
                        }
                    }

                }
            }
        },
        markPoint: { data: [{ type: 'max', name: '最大值' }, { type: 'min', name: '最小值' }] },
        markLine: { data: [{ type: 'average', name: '平均值' }] }
    }]
};