
var hours = ['', '事务层', '数据链路层', '物理层', '电源管理', '中断', '错误检测',
        '同步','锁定事务','复位','热插拔','I/O虚拟化','ATS服务','测试','扩展兼容'];
var days = ['',
 '确保安全',
 '扩展带宽',
 '提高效率',
 '传输质量',
 '节省功耗',
 '方便兼容'
 ];

var data =[
 //[0, 0, 10],
 //第一位表示纵轴-Y从1开始录入
 //[1, 0, 5],
 [1, 1, 11],
 [1, 2, 9],
 [1, 3, 36],
 [1, 4,4],
 [1, 5, 41],
 [1, 6, 30],
 [1, 7, 1],
 [1, 8, 9],
 [1, 9, 12],
 [1, 10,9],
 [1, 11, 3],
 [1, 12, 3],
 [1, 13, 10],
 [1, 14, 1],
 //[2, 0, 0.0],
 [2, 1, 7],
 [2, 2, 2],
 [2, 3, 7],
 [2, 4, 0],
 [2, 5, 1],
 [2, 6, 2],
 [2, 7,0],
 [2, 8,3],
 [2, 9, 1],
 [2, 10,1],
 [2, 11, 0],
 [2, 12, 5],
 [2, 13, 0],
 [2, 14,0],
 //[3, 0, 0.0],
 [3, 1, 213],
 [3, 2,29],
 [3, 3, 261],
 [3, 4, 18],
 [3, 5, 16],
 [3, 6, 8],
 [3, 7, 17],
 [3, 8, 40],
 [3, 9, 2],
 [3, 10,18],
 [3, 11, 41],
 [3, 12, 24],
 [3, 13, 2],
 [3, 14,0],
 
 [4, 1, 83],
 [4, 2,55],
 [4, 3, 84],
 [4, 4,2],
 [4, 5, 4],
 [4, 6, 55],
 [4, 7,8],
 [4, 8, 6],
 [4, 9, 0],
 [4, 10,2],
 [4, 11, 0],
 [4, 12, 3],
 [4, 13, 6],
 [4, 14,0],
 
 [5, 1,4],
 [5, 2,3],
 [5, 3,14],
 [5, 4, 188],
 [5, 5, 2],
 [5, 6,2],
 [5, 7, 0],
 [5, 8, 2],
 [5, 9, 0],
 [5, 10, 2],
 [5, 11,0],
 [5, 12, 2],
 [5, 13, 0],
 [5, 14, 1],
 
 [6, 1,20],
 [6, 2,7],
 [6, 3,15],
 [6, 4, 1],
 [6, 5, 2],
 [6, 6,1],
 [6, 7, 1],
 [6, 8, 86],
 [6, 9, 15],
 [6, 10, 2],
 [6, 11,65],
 [6, 12, 32],
 [6, 13, 0],
 [6, 14, 33],
 ];
data = data.map(function (item) {
    return [item[1], item[0], item[2]];
});

option = {
    draggable:true,
     backgroundColor: '#fff',
        toolbox: {
            show: false,
            feature: {
                dataView: {
                    readOnly: false
                },
                restore: {},
                saveAsImage: {}
            }
        },
    title: {
        text: '',
        x:"center"
    },
    //legend: {
        //data: ['patents'],
        //left: 'left'
   // },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
        }
    },
    grid: {
        top:80,
        left: 10,
        bottom: 0,
        right: 50,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: hours,
        boundaryGap: false,
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dash'
            }
        },
        "axisLabel": {
            "interval": 0,
             rotate:30,
            textStyle:{
                fontSize:25,
                fontWeight:'bold',
                color:'#000'
            },},
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type: 'category',
        boundaryGap:false,
        data: days,
         "axisLabel": {
            "interval": 0,
             rotate:0,
            textStyle:{
                fontSize:25,
                 fontWeight:'bold',
                color:'#000'
            },},
        splitLine: {
            show: true,
            lineStyle: {
                color: '#999',
                type: 'dash'
            }
        },
        axisLine: {
            show: false
        }
    },
    series: [{
        name: 'patents',
        type: 'scatter',
         label: {
                normal: {
                    show: true,
                    formatter: function(params) {
                        str = params.data[2]
                        return str
                    },
                    position: 'top',
                    fontSize:20,
                    fontWeight:'bold',
                    color: '#5F3611'
                }
            },
        itemStyle:
        {
            color:"#27727B"
        },
        symbolSize: function (val) {
            return Math.sqrt(val[2])*10//val[2]*2;
        },
        data: data,
        animationDelay: function (idx) {
            return idx * 5;
        }
    }]
};

