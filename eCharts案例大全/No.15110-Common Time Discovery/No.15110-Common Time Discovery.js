var gridCount = 50;
var data = [
    1478729724, 1479311478,
    1478761660, 1479307021,
    1478729885, 1479232519,
    1478732238, 1479194757,
    1478711101, 1479311996,
    1478707230, 1479307195,
    1478730048, 1479306188,
    1478707206, 1479311128,
    1479085312, 1479311271,
    1478711635, 1479311998,
    1478728498, 1479311999,
    1478731526, 1479309311,
    1478730676, 1479307276,
    1478728717, 1479297930,
    1478767403, 1479311994,
    1478818927, 1479311998,
    1478724285, 1479310387,
    1478707205, 1479311390,
    1478731145, 1479229316,
    1478775204, 1479264482,
    1478707205, 1479311879,
    1478707205, 1479311994,
    1478707206, 1479310890,
    1479003360, 1479221106,
    1478727895, 1479235223,
    1478707203, 1479307996,
    1478707201, 1479310388,
    1478724694, 1479244875,
    1478709314, 1479305480,
    1478730502, 1479311506,
    1478747274, 1479296426,
    1478707264, 1479311999,
    1478727436, 1479306982,
    1478707204, 1479311994,
    1478707206, 1479309008,
    1478707762, 1479311957,
    1478731348, 1479226004,
    1478732983, 1479311296,
    1478758006, 1479297177,
    1478732624, 1479311995,
    1478707204, 1479310260,
    1478727295, 1479311997,
    1479009556, 1479304022,
    1478728047, 1479304756,
    1478731409, 1479311994,
    1478738554, 1479305618,
    1478838482, 1479311994,
    1478707624, 1479310732,
    1478707240, 1479308394,
    1478718520, 1479304536,
    1478734323, 1479288904,
    1478707202, 1479309501,
    1478713771, 1479311859,
    1478708635, 1479311478,
    1478707202, 1479289802,
    1478731092, 1479304848,
    1478731592, 1479303829,
    1478724961, 1479309346,
    1478731196, 1479309348,
    1478707206, 1479311560,
    1478707205, 1479288653,
    1478730962, 1479199476,
    1478707204, 1479303015,
    1478731994, 1479309152,
    1478728876, 1479287088,
    1478707266, 1479300729,
    1478708111, 1479130712,
    1478731061, 1479306130,
    1478733092, 1479311651,
    1478726863, 1479309931,
    1478818445, 1479308438,
    1478818176, 1479310822,
    1478732149, 1479266358,
    1478707206, 1479308779,
    1478730323, 1479303450,
    1478728318, 1479296128,
    1478708318, 1479287815,
    1478726086, 1479311998,
    1478733362, 1479306667,
    1478846528, 1479307204,
    1478707205, 1479311971,
    1478728060, 1479212106,
    1478731436, 1479307836,
    1478723527, 1479311991,
    1478732854, 1479307296,
    1478739740, 1479311998,
    1478727046, 1479311994,
    1478707573, 1479311652,
    1478707215, 1479311986,
    1478745396, 1479276767,
    1478751561, 1479311996,
    1478708392, 1479311994,
    1478725996, 1479288990,
    1478707201, 1479311991,
    1478732584, 1479302518,
    1478708190, 1479305596,
    1478708685, 1479307847,
    1478707204, 1479309067,
    1478707206, 1479310392,
    1478845900, 1479310515
];

var startTime = [];
var endTime = [];
var heatmapData = []
var durationLenData = []
var rawData = []
var maxCount = 0;
var maxCarCount = 0;
var maxDuration = 0;
var minDuration;
var durationMap = {}

function runMe() {
    var objs = []
    for (var i = 1; i < data.length; i += 2) {
        objs.push({
            start: data[i - 1],
            end: data[i]
        })
    }
    minCount = objs.length
    

    var start = _.min(data)
    var end = _.max(data)
    var dt = parseInt((end - start) / gridCount)
    minDuration = end-start
    console.log(start, end, dt)

    for (var x = 0; x < gridCount+1; x++) {
        var tx = start + x * dt
        startTime.push(moment(tx*1000).format('YYYY/MM/DD HH:mm'))
        for (var y = 0; y < gridCount+1; y++) {
        	var ty = start + y * dt
            if (x === 0) {
                endTime.push(moment(ty*1000).format('YYYY/MM/DD HH:mm'))
            }
            if (y <= x) {
                //heatmapData.push([x, y, '-'])
            } else {
                heatmapData.push([x, y, calc(objs, tx, ty)])
                durationLenData.push([x, y, ty-tx])
                var key = x+'-'+y
                durationMap[key]=ty-tx
                if(maxDuration<ty-tx) maxDuration = ty-tx
                if(minDuration>ty-tx) minDuration = ty-tx
            }
        }
    }

    calcRaw(objs, start, dt)
    console.log(maxDuration, minDuration)
    //console.log(JSON.stringify(rawData))
    //console.log(JSON.stringify(grids));
}


function calc(objs, ts, te) {
    var coverCount = 0;
    for (var i in objs) {
        var traj = objs[i]
        if (traj.start <= ts && te <= traj.end) {
            coverCount++
        }
    }
    if(coverCount>maxCount) maxCount=coverCount;
    if(coverCount<minCount) minCount=coverCount;
    return coverCount
}

var pointMap = {}

function calcRaw(objs, start, dt){
	var m = {}
	for(var j in objs){
    	var o = objs[j]
    	var x = parseInt((o.start-start)/dt)
    	var y = parseInt((o.end - start)/dt)
    	var key = x+'-'+y
    	if(!(key in m)){
    		m[key] = [o.end - o.start, 1]
    	}else{
    		if(o.end-o.start<m[key][0]){
    			m[key][0] = o.end-o.start
    		}
    		m[key][1] = m[key][1]+1
    	}
    }
    for(var i in m){
    	var arr = i.split('-')
    	var t = moment.duration(m[i][0], 'seconds')
    	pointMap[i] = {
    	    duration:t.days()+' days '+t.hours()+' hours',
    	    carCount:m[i][1]
    	}
    	rawData.push([
    		parseInt(arr[0]),
    		parseInt(arr[1]),
    		t.days()+' days '+t.hours()+' hours'
    	])
    	if(m[i][1]>maxCarCount){
    		maxCarCount = m[i][1]
    	}
    }
}


runMe();


option = {
    legend: {
        right: 10,
        data: ['Coverage', 'Duration length','Raw']
    },
    animation: false,
    grid: {
        height: '80%',
        y: '10%',
        x: '12%'
    },
    xAxis: {
        type: 'category',
        data: startTime,
        splitArea: {
            show: true
        }
    },
    yAxis: {
        type: 'category',
        data: endTime,
        splitArea: {
            show: true
        }
    },
    tooltip: {
        position: 'right',
        formatter: function (params) {
            //console.log(params)
            var key = params.value[0]+'-'+params.value[1]
            if(params.seriesType=='heatmap'){
                if(params.seriesName=='Coverage'){
                    var du = moment.duration(durationMap[key]*1000)
                    return params.value[2] + ' cars cover '+du.days()+' days '+du.hours()+' hours ('+startTime[params.value[0]]+' - '+endTime[params.value[1]]+')';
                }else{
                    var t = moment.duration(params.value[2]*1000)
                    return t.days()+' days '+t.hours()+' hours';
                }
            }else{
                var key = params.value[0]+'-'+params.value[1]
                var p = pointMap[key]
            	return p.duration + ' ('+p.carCount+' cars. timeline ('+startTime[params.value[0]]+' - '+endTime[params.value[1]]+')';
            }
        }
    },
    visualMap: [{
        seriesIndex:0,
        min: 0,
        max: maxCount,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '25%',
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },{
        seriesIndex:1,
        min: minDuration,
        max: maxDuration,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '10%',
        inRange: {
            opacity: [0,0.3],
            color:['#000','#333']
            // color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        formatter: function (value) {
            var t = moment.duration(value*1000)
            return t.days()+' days '+t.hours()+' hours'; // 范围标签显示内容。
        }
    }],
    series: [{
        name: 'Coverage',
        type: 'heatmap',
        data: heatmapData,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        animation: false
    },
    {
        name: 'Duration length',
        type: 'heatmap',
        data: durationLenData,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
            normal:{
                color:'#BCF'
            }
        }
    },
    {
        name: 'Raw',
        type: 'scatter',
        data: rawData,
        label: {
            normal: {
                show: false
            }
        },
        itemStyle: {
        	normal:{
        		color: 'rgb(0,180,20)'
        	},
            emphasis: {
                shadowBlur: 16,
                shadowColor: 'rgba(0, 0, 200, 0.5)'
            }
        },
        animation: false
    }]
}