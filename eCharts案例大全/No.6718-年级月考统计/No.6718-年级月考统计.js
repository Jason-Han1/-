 var cellSize = [80, 80];
var pieRadius = 30;
var scatterData, lineData;
var category = ['进步学生数','高分段人数'];

var hours = ['2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07',
        '2019-08', '2019-09', '2019-10','2019-11','2019-12',
        '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06',
        '2020-07', '2020-08','2020-09'];
var days = ['','','班级A', '班级B', '班级C',
        '班级D', '班级E', '班级F', '班级G'];

var data = [[0,0,[2,3]],[0,1,[0,1]],[0,2,[0,0]],[0,3,[0,0]],[0,4,[0,0]],[0,5,[0,0]],[0,6,[0,0]],[0,7,[0,0]],[0,8,[0,0]],[0,9,[0,0]],[0,10,[0,0]],[0,11,[0,2]],[0,12,[1,3]],[0,13,[1,0]],[0,14,[0,1]],[0,15,[1,1]],[0,16,[2,2]],[0,17,[2,4]],[0,18,[2,2]],[0,19,[1,3]],[1,0,[3,4]],[1,1,[0,0]],[1,2,[0,0]],[1,3,[0,0]],[1,4,[0,0]],[1,5,[0,0]],[1,6,[0,0]],[1,7,[0,0]],[1,8,[0,0]],[1,9,[0,0]],[1,10,[3,2]],[1,11,[0,2]],[1,12,[1,1]],[1,13,[2,4]],[1,14,[4,5]],[1,15,[5,6]],[1,16,[3,3]],[1,17,[2,5]],[1,18,[3,5]],[1,19,[2,10]],[2,0,[1,0]],[2,1,[0,1]],[2,2,[0,0]],[2,3,[0,0]],[2,4,[0,0]],[2,5,[0,0]],[2,6,[0,0]],[2,7,[0,0]],[2,8,[0,0]],[2,9,[0,0]],[2,10,[1,2]],[2,11,[1,1]],[2,12,[0,1]],[2,13,[4,5]],[2,14,[4,4]],[2,15,[3,7]],[2,16,[3,3]],[2,17,[2,3]],[2,18,[2,3]],[2,19,[1,4]],[3,0,[4,3]],[3,1,[2,1]],[3,2,[0,0]],[3,3,[0,0]],[3,4,[0,0]],[3,5,[0,0]],[3,6,[0,0]],[3,7,[0,0]],[3,8,[0,1]],[3,9,[0,0]],[3,10,[2,3]],[3,11,[2,2]],[3,12,[3,4]],[3,13,[6,8]],[3,14,[6,7]],[3,15,[3,9]],[3,16,[4,5]],[3,17,[2,3]],[3,18,[2,3]],[3,19,[3,7]],[4,0,[0,1]],[4,1,[1,2]],
[4,2,[0,0]],[4,3,[0,0]],[4,4,[0,0]],[4,5,[1,0]],[4,6,[0,0]],[4,7,[0,0]],[4,8,[0,0]],[4,9,[1,1]],[4,10,[2,2]],[4,11,[1,3]],[4,12,[2,0]],[4,13,[3,1]],[4,14,[2,2]],[4,15,[9,5]],[4,16,[6,5]],[4,17,[1,0]],[4,18,[5,4]],[4,19,[4,1]],[5,0,[1,1]],[5,1,[1,0]],[5,2,[0,0]],[5,3,[2,1]],[5,4,[0,0]],[5,5,[0,0]],[5,6,[0,0]],[5,7,[0,0]],[5,8,[1,2]],[5,9,[0,0]],[5,10,[1,3]],[5,11,[0,1]],[5,12,[2,3]],[5,13,[5,5]],[5,14,[2,3]],[5,15,[2,4]],[5,16,[4,7]],[5,17,[3,3]],[5,18,[0,0]],[5,19,[2,3]],[6,0,[0,1]],
[6,1,[0,0]],[6,2,[0,0]],[6,3,[0,0]],[6,4,[0,0]],[6,5,[0,0]],[6,6,[0,0]],[6,7,[0,0]],[6,8,[0,0]],[6,9,[0,0]],[6,10,[1,0]],[6,11,[0,0]],[6,12,[1,1]],[6,13,[0,1]],[6,14,[2,1]],[6,15,[2,2]],[6,16,[0,0]],[6,17,[0,0]],[6,18,[0,0]],[6,19,[0,0]],];

data.forEach(function (item,index) {
    item[0] += 2;
})

var voidData = new Array(21).fill(0);
var emer = new Array(21).fill(0);
var reg = new Array(21).fill(0);
for(var i = 0;i < 20;i++){
    for(var j = 0; j < 7;j++){
         emer[i] += data[7*i+j][2][0];
         reg[i] += data[7*i+j][2][1];
    }
}

var total = emer.map(function(vi ,i){
    return vi + reg[i];
})

var max_num = Math.ceil(Math.max(...total) /10)*10;

data = data.map(function (item,index) {
    return [item[1], item[0], item[2]];
});



// 第一个序列
var series_1 = [{
        id:'pie',
        type: 'scatter',
        name:'pie1',
        animationDelay: function (idx) {
            return idx * 5;
        },
        data:[],
    },
    {
        name: '高分段总人数',
        xAxisIndex: 1,
        yAxisIndex: 1,
        type: 'line',
        stack: 'one',
        areaStyle: { color:'grey',},
        data: reg,
        tooltip:{
           position: 'top',
           formatter: function (params) {
              return '高分段: ' + params.value;
        }
        },
    },{
        name: '超高分段总人数',
        xAxisIndex: 1,
        yAxisIndex: 1,
            type: 'line',
            stack: 'one',
            areaStyle: {
                 color:'lightblue'
            },
            data: emer,
            tooltip:{
           position: 'top',
           formatter: function (params) {
              return '超高分段: ' + params.value;
        }
        },
    }]

var series_2 =[{
        id:'pie',
        name:'pie2',
        type: 'scatter',
        data:generateScatterData(),
        symbolSize: function (val) {
            return val[2] * 2;
        },
        animationDelay: function (idx) {
            return idx * 5;
        },
        tooltip:{
           position: 'top',
           formatter: function (params) {
              return ' 进步学生数: ' + params.value[2] ;
        }
        },
    },{
        data: voidData,
        type: 'line',
        stack: '第二个量',
        xAxisIndex: 1,
        yAxisIndex: 1,
          tooltip:{
        position: 'top',
        },
    },{
        // id :'scrap',
        name: '总进步学生数',
        data: generateLineData(),
        xAxisIndex: 1,
        yAxisIndex: 1,
        tooltip:{
          position: 'top',
          formatter: function (params) {
            return ' 总进步: ' + params.value ;
        }
        },
        type: 'line',
        stack: '第二个量',
        areaStyle: {
             color:'green'
        },
    }
     ];

function generateScatterData(){
    scatterData = [];
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 20; j++){
            scatterData.push([
                j, i+2, Math.ceil(Math.random()*20)
                ])
        }
    }
    return scatterData;
}

function generateLineData(){
    lineData = [];
    for(var j = 0; j < 20; j++){
        lineData.push(
             Math.ceil(Math.random()*50)
        )
    }
    return lineData;
}

function fetchMax(arrayData){
    return Math.ceil(Math.max(...arrayData) /10)*10;
}

option = {
    baseOption: {
        title: {
            text: '年级月考统计'
        },
        legend: {
            data: ['超高分段总人数','高分段总人数','总进步学生数'],
            left: 'center'
        },
        tooltip: {
        },
        grid: [{
            id:"grid",
            left: 0,
            top:20,
            bottom: 45,
            right: 0,
            containLabel: true
        },{
            id:"grid2",
            left: 17,
            top:600,
            bottom: 65,
            right: 0,
            containLabel: true
        }],
        xAxis: [{
            type: 'category',
            data: hours,
            boundaryGap: false,
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#999',
                    type: 'dashed'
                }
            },
            axisLine: {
                show: false
            }
        },{
            type: 'category',
            data: [],
            boundaryGap: false,
            gridIndex:1,
            splitLine: {
                show: false,
            },
            axisLine: {
                show: false
            }
        }],
        
         timeline: {
                data: category,
                axisType: 'category',
                autoPlay: true,
                playInterval: 3000,
                left: '35%',
                right: '35%',
                bottom: 0,
                width: '30%',
                label: {
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                symbolSize: 10,
                lineStyle: {
                    color: '#555'
                },
                checkpointStyle: {
                    borderColor: '#87CEEB',
                    borderWidth: 2
                },
                controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                        color: '#666',
                        borderColor: '#666'
                    },
                    emphasis: {
                        color: '#aaa',
                        borderColor: '#aaa'
                    }
                },

            },
    },
    options: [{
        yAxis: [{
            type: 'category',
            data: days,
            axisLine: {
                show: false
            },
            axisTick: { show: false }
        },
            { 
            name:'总和',
            nameLocation: "middle",
            type: 'value',
            position: 'left',
            max:max_num,
            interval:max_num,
            splitLine: { show: false },
            axisLine: { show: false },
            gridIndex:1,
            axisLabel: {
                formatter: function(value, index) {
                    return parseInt(value);
                },
                textStyle: { fontSize: 14 }
            },
            axisTick: { show: false }
        }],
        legend:{
            data:['超高分段总人数','高分段总人数'],
            selected:[{'总进步学生数':false}],
        },
        series: series_1,
    tooltip:{}
    },{
        
   legend:{
        data:['总进步学生数'],
        selected:[{'超高分段总人数':false},{'高分段总人数':false}],
    },
    series: series_2,
        yAxis: [{
            type: 'category',
            data: days,
            axisLine: {
                show: false
            }
        },
            { 
            name:'总和',
            nameLocation: "middle",
            type: 'value',
            position: 'left',
            max:fetchMax(lineData),
            interval:fetchMax(lineData),
            splitLine: { show: false},
            axisLine: { show: false },
            gridIndex:1,
            axisLabel: {
                formatter: function(value, index) {
                    return parseInt(value);
                },
                textStyle: { fontSize: 14 }
            },
            axisTick: { show: false }
        }],
    }]
};


setTimeout(function () {
    for(var i = 0;i< data.length;i++){
    var center = myChart.convertToPixel({seriesId: 'pie'}, data[i]);
       series_1.push( {
            id: i+ 'pie',
            name:'workload',
            type: 'pie',
            center: center,
            tooltip:{
                position: 'top',
                formatter: ' 超高分段: ' + data[i][2][0] + "<br>"+
                       '高分段: ' + data[i][2][1]
            },
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside',
                    show: data[i][2][0]+data[i][2][1] > 5
                },
            },
            radius: (data[i][2][0]+data[i][2][1])*2,
            data: [
                {name: '超高分段', value: data[i][2][0]},
                {name: '高分段', value: data[i][2][1]}
            ]
        });


        series_2.push( {
            id: i+ 'pie',
            name:'workload',
            type: 'pie',
            center: center,
            label: {
                normal: {
                    formatter: '{c}',
                    position: 'inside',
                    show: false
                },
            },
            radius: 0,
            data: [
                {name: '超高分段', value: 0},
                {name: '高分段', value: 0}
            ]
        });
 }
}, 10);


setTimeout(function () {
    myChart.setOption(option);
},100)