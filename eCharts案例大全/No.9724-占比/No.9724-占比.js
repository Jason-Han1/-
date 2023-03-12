
var legendData = ['常住人口', '户籍人口', '农村人口','城镇居民'];
var y_data = ['成都市', '绵阳市', '自贡市', '攀枝花市', '泸州市', '德阳市'];
var  total = [100,100,100,100,100,100],
    _data2 = [19,5,40,33,15,90]

var realyData01= [232,3453,235,223,234,333]

var _label = {
    normal: {
        show: true,
        position: 'inside',
       
        textStyle: {
            color: '#fff',
            fontSize: 16
        }
    }
};
option = {
    color:["#f65","#0b8"],
    legend: {
        data: legendData,
        textStyle: {
            color: '#ccc'
        },
        top:0,
        left:"center"
    },
    grid: {
        containLabel: true,
        left: 0,

        right: 15,
        bottom: 30
    },
    tooltip: {
        show: true,
    
    },
    xAxis: {

        splitLine: {
            show: false
        },
        axisLabel:{
            show:false
        }

    },
    yAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 12,
            color: '#000'
        }
    }],
    series: [{
        type: 'bar',
        name: '失败次数',
    
        zlevel:1,
        barMinHeight:20,
        legendHoverLink: false,
        barWidth: 20,
        label:{
            normal:{
                show:true,
                position:"insideRight",
                // formatter:function(){
                //     return ""
                // }
            }
        },
        data: _data2
    }, {
        type: 'bar',
        name: '总任务数',
        barGap: '-100%',
        // barMinHeight:10000,
        legendHoverLink: false,
        barWidth: 20,
        label: {
            normal: {
                show: true,
                textStyle: {
                    color: '#fff', //百分比颜色

                },
                // position: 'inside',
                position:"insideRight",
                //百分比格式
                formatter: function(data) {
                    console.log("data==>",data)
                    return realyData01[data.dataIndex];
                },
            }
        },
        data: total
    }]
};