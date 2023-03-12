/************************************************
 * 机器出现故障的时间段,Y轴代表小时数,X代表异常机器
 ************************************************/
var xAxis = ['机器A','机器B','机器C','机器D'];
var minHour = 0;
var maxHour = 24;
//模拟数据,一个开始时间,对应一个结束时间.
var hourData = [
        [[3,10]],//机器A 3点钟开始异常,10点维修完成
        [[6,8],[11,13],[20,24]],
        [[10,15]],
        [[5,10]]
    ];

//補缺空擋數據
var maxColumn = 0;//最大列
for (var i in hourData) {
    var array = hourData[i];
    var addCount = 0;//新增計數器,因每次新增后,數組長度都會實時變化
    for (var j in array) {
        if (j == 0 && array[j][0] > minHour) {
            array.unshift([0,(array[j][0]-minHour),-1]);
            addCount++;
        } else if(j > 0){
            var newJ = parseInt(j)+addCount;
            var currentStart = array[newJ][0];
            var currentEnd = array[newJ][1];
            var beforeEnd  = array[newJ-1][1];
            if (beforeEnd!=currentStart) {
                array.splice(newJ,0,[beforeEnd,currentStart,-1]);
                addCount++;
            }
        }
    }
    if (maxColumn < array.length) {
        maxColumn = array.length;
    }
}

//初始化每层的数据,默认空
var seriesArray = [];
var seriesBlank = [];//保存需要透明的下標
for (var i = 0;i<maxColumn;i++) {
    var arrayTemp = [];
    var arrayBlankTemp = [];
    for (var j in hourData) {
        var array = hourData[j][i];
        if (!!array) {
            var s = hourData[j][i][0];
            var e = hourData[j][i][1];
            arrayTemp.push(e-s);
            if (!!hourData[j][i][2] && hourData[j][i][2] == -1) {
                arrayBlankTemp.push('透明');
            } else {
                arrayBlankTemp.push('非透明');
            }
        } else {
            arrayTemp.push(0);
            arrayBlankTemp.push('透明');
        }
    }
    seriesArray.push(arrayTemp);
    seriesBlank.push(arrayBlankTemp);
}


//生成圖表
var series = [];
for (var i in seriesArray) {
    series.push({
        name:'DownTime',
        type:'bar',
        stack:'DownTime',
        data:seriesArray[i],
        barWidth:5,
        color:function(param){
            var blankValue = seriesBlank[param.seriesIndex][param.dataIndex];
            if (!!blankValue && blankValue == '透明') {
                return 'rgba(128, 128, 128, 0)';
            }
            return '#EB4742';
        }
    });
}

option = {
    title: {
        text: 'DownTime',
        textStyle: {
            color: '#707070',
            fontSize:'12',
            fontWeight:'normal'
        }
    },
    grid: {
        top:'30',
        left: '0',
        right: '0',
        bottom: '0',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : xAxis
        }
    ],
    yAxis : [
        {
            type : 'value',
            min:minHour,
            max:maxHour
        }
    ],
    series : series
};
