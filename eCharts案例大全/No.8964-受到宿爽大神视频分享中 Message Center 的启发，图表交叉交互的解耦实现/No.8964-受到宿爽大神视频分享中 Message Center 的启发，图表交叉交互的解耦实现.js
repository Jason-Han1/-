srcData = [
    //['纬度1', '纬度2', '纬度3', '度量'],
    ['a1', 'b1', 'c1', 1],
    ['a1', 'b1', 'c2', 1],
    ['a1', 'b1', 'c3', 1],
    ['a1', 'b2', 'c1', 1],
    ['a1', 'b2', 'c2', 1],
    ['a1', 'b2', 'c3', 1],
    ['a1', 'b3', 'c1', 1],
    ['a1', 'b3', 'c2', 1],
    ['a1', 'b3', 'c3', 1],

    ['a2', 'b1', 'c1', 2],
    ['a2', 'b1', 'c2', 2],
    ['a2', 'b1', 'c3', 2],
    ['a2', 'b2', 'c1', 2],
    ['a2', 'b2', 'c2', 2],
    ['a2', 'b2', 'c3', 2],
    ['a2', 'b3', 'c1', 2],
    ['a2', 'b3', 'c2', 2],
    ['a2', 'b3', 'c3', 2],

    ['a3', 'b1', 'c1', 3],
    ['a3', 'b1', 'c2', 3],
    ['a3', 'b1', 'c3', 3],
    ['a3', 'b2', 'c1', 3],
    ['a3', 'b2', 'c2', 3],
    ['a3', 'b2', 'c3', 3],
    ['a3', 'b3', 'c1', 3],
    ['a3', 'b3', 'c2', 3],
    ['a3', 'b3', 'c3', 3],
];



var ecCalc = new Object({});

/**聚合计算
*	@alias	module:ecCalc/groupCalc
*	@param	{Array}	source	输入,二维数组
*	@param	{boolean}	hasColumnName	第一行(source[0])是否是列名
*	@param	{Array}	dimensions	纬度,一维数组,传入列id列表,例如[0,2,3],列表长度至少为1
*	@param	{Object}	measures	度量,json数组,例如[{	"id":	2,	"method":	"count"	},{	"id":	3,	"method":	"count"	}],id用于
source[measures[id]],method用于聚合方法
*	@return	{Array}	输出,二维数组，新列与原列对应关系为dimensions.concat(measures)	
*/
ecCalc.groupCalc = function(source, hasColumnName, dimensions, measures) {
    var iBegin = hasColumnName ? 1 : 0;
    var res = [];
    var preRes = {};

    if (hasColumnName) {
        res[0] = [];
        for (let i in dimensions) {
            res[0].push(source[0][dimensions[i]]);
        }
        for (let i in measures) {
            res[0].push(source[0][measures[i].id]);
        }
    }
    for (let i = iBegin; i < source.length; i++) {
        var dimensionData = [];
        for (let k in dimensions) {
            dimensionData.push(source[i][dimensions[k]]);
        }
        var dimensionKey = JSON.stringify(dimensionData);
        if (preRes.hasOwnProperty(dimensionKey)) {
            for (let j in measures) {
                if (measures[j].method === 'sum' || measures[j].method === 'avg') {
                    preRes[dimensionKey][j] += source[i][measures[j].id];
                } else if (measures[j].method === 'count') {
                    preRes[dimensionKey][j] += 1;
                }
            }
            preRes[dimensionKey][measures.length] += 1;
        } else {
            preRes[dimensionKey] = [];
            for (let j in measures) {
                if (measures[j].method === 'sum' || measures[j].method === 'avg') {
                    preRes[dimensionKey][j] = source[i][measures[j].id];
                } else if (measures[j].method === 'count') {
                    preRes[dimensionKey][j] = 1;
                }
            }
            preRes[dimensionKey][measures.length] = 1;
        }
    }
    for (var key in preRes) {
        tmp = JSON.parse(key);
        for (let j in measures) {
            if (measures[j].method === 'sum' || measures[j].method === 'count') {
                tmp.push(preRes[key][j]);
            } else if (measures[j].method === 'avg') {
                tmp.push(preRes[key][j] / preRes[key][measures.length]);
            }
        }
        res.push(tmp);
    }
    return res;
};

/**条件筛选
* @alias module:ecCalc/filter
* @param {Array} source 输入,二维数组
* @param {boolean} hasColumnName 第一行(source[0])是否是列名
* @param {function} filterCondition
  (@param {Array} source[i]作为输入;
  @return {boolean}) 筛选(判断)函数 
  {string} filterCondition 条件表达式，用item代表source[i]，
  传入例如"(item[0] - item[1] > 0) && (item[0] + item[1] > 0)"的,
  结果为boolean的表达式 
* @return {Array} 输出,二维数组*/
ecCalc.filter = function(source, hasColumnName, filterCondition) {
    var iBegin = hasColumnName ? 1 : 0;
    var res = hasColumnName ? [source[0]] : [];
    if (typeof(filterCondition) === 'function') {
        for (let i = iBegin; i < source.length; i++) {
            if (filterCondition(source[i])) {
                res.push(source[i]);
            }
        }
    } else if (typeof(filterCondition) === 'string') {
        for (let i = iBegin; i < source.length; i++) {
            var item = source[i];
            if (eval(filterCondition)) {
                res.push(source[i]);
            }
        }
    }
    return res;
};

convertConfig = [
    {
        dimensions: [0],
        methods: [{id: 3, method: "sum"}],
        filter: 'true',
    },
    {
        dimensions: [1],
        methods: [{id: 3, method: "sum"}],
        filter: 'true',
    },
    {
        dimensions: [2],
        methods: [{id: 3, method: "sum"}],
        filter: 'true',
    },
];

function dataConvert(config){
    let res = [];
    
    for (let obj of convertConfig){
        let tmp = ecCalc.filter(srcData, false, obj.filter);
        
        res.push(ecCalc.groupCalc(tmp, false, obj.dimensions, obj.methods));
        
    }
    return res;
};

convertedData = dataConvert(convertConfig);


option = {
    title: {
        text: '受到宿爽大神视频分享中 Message Center 的启发，图表联动的交叉实现'
    },
    tooltip:{},
    grid: [{
        bottom: '55%'
    }, {
        top: '55%',
        right: '55%'
    }],
    xAxis: [{
        type: 'category'
    }, {
        type: 'category',
        gridIndex: 1
    }],
    yAxis: [{}, {
        gridIndex: 1
    }],
    series: [{
        id: 'line',
        type: 'line',
        label: {
            show: true,
            formatter: '{a}\n{b}:{@1}'
        },
        name: convertConfig[0].filter,
        data: convertedData[0]
    }, {
        id: 'bar',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            show: true,
            formatter: '{a}\n{b}:{@1}'
        },
        name: convertConfig[1].filter,
        data: convertedData[1]
    }, {
        id: 'pie',
        type: 'pie',
        center: ['75%', '75%'],
        radius: '25%',
        label: {
            show: true,
            formatter: '{a}\n{b}:{c}'
        },
        name: convertConfig[2].filter,
        data: convertedData[2].map(function(item){
            return {name:item[0],value:item[1]};
        })
    }]
};

actionConfig = [{
    //from: 0,
    to: [1, 2]
},{
    to: [0, 2]
},{
    to: [0, 1]
}];

myChart.on('click', function(params){
    
    let actionSeries = actionConfig[params.seriesIndex].to;
    
    for (let i of actionSeries){
        
        convertConfig[i].filter = convertConfig[params.seriesIndex].filter + ' && item[' + params.seriesIndex + '] == "' + params.name + '"';
        
    }

    convertedData = dataConvert(convertConfig);
    
    myChart.setOption({
        series:[{
            id: 'line',
            name: convertConfig[0].filter,
            data: convertedData[0]
        },{
            id: 'bar',
            name: convertConfig[1].filter,
            data: convertedData[1]
        },{
            id: 'pie',
            name: convertConfig[2].filter,
            data: convertedData[2].map(function(item){
                return {name:item[0],value:item[1]};
            })
        }]
    });
    
    
})