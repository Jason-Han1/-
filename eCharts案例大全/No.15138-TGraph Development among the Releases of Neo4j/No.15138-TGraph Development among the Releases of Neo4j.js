var uploadedDataURL = "/asset/get/s/data-1522024906757-SymAbpBqz.json";

//2017.6 var uploadedDataURL = "/asset/get/s/data-1498660933156-SkaSxrb4Z.json";


app.title = '笛卡尔坐标系上的热力图';


var time=[];

for(var year=2012;year<=2018;year++){
    for(var month=1;month<=12;month++){
        time.push(year+'.'+month);
    }
}

var branches = [];

var repoData = [];

var tagData = [];

var whereWeAre = [];

function getReleases(){
    $.get( uploadedDataURL, function(data){
        // console.log(typeof data)
        data = JSON.parse(data)
        // console.log(typeof data)
        // console.log(data)
        var branchMap = {}
        data.map(function(item){
            var r = releaseInfo(item)
            if(r===false) return;
            if(!branchMap.hasOwnProperty(r.branch)){
                branchMap[r.branch]={}
            }
            if(!branchMap[r.branch].hasOwnProperty(r.time)){
                branchMap[r.branch][r.time] = []
            }
            branchMap[r.branch][r.time].push(r)
        })
        branches = _.keys(branchMap).sort()
        console.log(branches)
        console.log(time)
        for(var j in time){
            var t = time[j]
            for(var b in branches){
                var bb = branches[b]
                if(bb<'1.9') continue;
                if(branchMap[bb].hasOwnProperty(t)){
                    var len = branchMap[bb][t].length
                    if(len==1){
                        var item = branchMap[bb][t][0]
                        if(item.isTag){
                            if(item.name=='2.2.3'){
                                whereWeAre.push([ parseInt(j), parseInt(b), 1, item.name])
                            }else{
                                tagData.push([ parseInt(j), parseInt(b), 1, item.name])
                            }
                        }else{
                            if(item.name=='2.3.12'){
                                whereWeAre.push([ parseInt(j), parseInt(b), 1, item.name])
                            }else{
                                repoData.push([ parseInt(j), parseInt(b), 1, item.name])
                            }
                        }
                    }else{
                        repoData.push([ parseInt(j), parseInt(b), branchMap[bb][t].length, ''])
                    }
                }
                // else{
                //     repoData.push([ parseInt(j), parseInt(b), 0, ''])
                // }
            }
        }
        
        console.log(JSON.stringify(repoData))
        myChart.setOption(option);
    })
}

getReleases()
// var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
// data = data.map(function (item) {
//     return [item[1], item[0], item[2] || '-'];
// });


function releaseInfo(release){
    var b = release[1].match(/^(\d+\.\d+)\./)
    var t = new Date(Date.parse(release[0]))
    if(b){
        return {
            branch:b[1],
            name: release[1],
            date: release[0],
            time: t.getFullYear()+'.'+(t.getMonth()+1),
            isTag: release[2]=='tag'
        }
    }else{
        return false
    }
}

var now = new Date()

option = {
    title: {
        text: 'TGraph Development among the Releases of Neo4j',
        subtext: 'Data from Github '+now.getFullYear()+'.'+(now.getMonth()+1),
        link: 'https://github.com/neo4j/neo4j/releases'
    },
    // backgroundColor: '#404a59',
    color: [
        '#40c1BE', '#fec42c', '#dd4444'
    ],
    legend: {
        data: ['Release','Tag', 'We Are Here'],
        left: 'right'
    },
    tooltip: {
        position: 'top',
        formatter: function (params) {
            if(params.value[2]==1){
                return 'Releases: ' + params.value[3] + ' at ' + time[params.value[0]];
            }else{
                return params.value[2] + ' releases in ' + branches[params.value[1]] + ' on ' + time[params.value[0]];
            }
        }
    },
    grid: {
        left: 2,
        bottom: 10,
        right: 10,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: time,
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
    },
    yAxis: {
        type: 'category',
        data: branches,
        axisLine: {
            show: true
        }
    },
    series: [{
        name: 'Release',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2]?(val[2]*4+8):0;
        },
        showEffectOn: 'click',
        rippleEffect: {
            brushType: 'stroke'
        },
        data: repoData
    },{
        name: 'Tag',
        type: 'scatter',
        symbolSize: function (val) {
            return val[2]?(val[2]*4+8):0;
        },
        rippleEffect: {
            brushType: 'stroke'
        },
        showEffectOn: 'click',
        data: tagData
    },{
        name: 'We Are Here',
        type: 'effectScatter',
        symbolSize: function (val) {
            return val[2]?(val[2]*4+8):0;
        },
        // rippleEffect: {
        //     brushType: 'stroke'
        // },
        showEffectOn: 'click',
        itemStyle: {
            normal: {
                shadowBlur: 6,
                shadowColor: '#333'
            }
        },
        zlevel: 1,
        data: whereWeAre
    }]
};