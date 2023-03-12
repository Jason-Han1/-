let geoNameCode = {"昆明市": '530100',
"曲靖市": '530300',
"玉溪市": '530400',
"保山市": '530500',
"昭通市": '530600',
"丽江市": '530700',
"普洱市": '530800',
"临沧市": '530900',
"楚雄彝族自治州": '532300',
"红河哈尼族彝族自治州": '532500',
"文山壮族苗族自治州": '532600',
"西双版纳傣族自治州": '532800',
"大理白族自治州": '532900',
"德宏傣族景颇族自治州": '533100',
"怒江傈僳族自治州": '533300',
"迪庆藏族自治州": '533400'};
function showProvince1(region,regionCode) {
    var name = 'bj';
    $.get(`https://geo.datav.aliyun.com/areas_v2/bound/${regionCode}_full.json`, function(geoJson) {
        echarts.registerMap(name, geoJson);

        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: `${region}`,
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 0,
                max: 0.5,
                dimension: 0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#7AC6F9', '#C9E0F0']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                animation: false
            }]
        });
        myChart.on('click',function(params){
            console.log(params.name);
            console.log(geoNameCode[params.name]);
            if(geoNameCode[params.name]==undefined){
                console.log('无法加载区县以下的数据,返回云南省');
                showProvince2('云南省','530000');
                return false;
            }
            showProvince2(params.name,geoNameCode[params.name]);
            return false;
        });
    });
}

function showProvince2(region,regionCode) {
    var name = 'bj';
    $.get(`https://geo.datav.aliyun.com/areas_v2/bound/${regionCode}_full.json`, function(geoJson) {
        echarts.registerMap(name, geoJson);
        myChart.setOption(option = {
            backgroundColor: '#ffffff',
            title: {
                text: `${region}`,
                left: 'center',
                textStyle: {
                    color: '#000'
                }
            },
            visualMap: {
                min: 0,
                max: 0.5,
                dimension: 0,
                left: 'left',
                top: 'bottom',
                text: ['HIGH', 'LOW'], // 文本，默认为数值文本
                calculable: true,
                inRange: {
                    color: ['#7AC6F9', '#C9E0F0']
                }
            },
            series: [{
                type: 'map',
                mapType: name,
                label: {
                    normal: {
                        show: true,
                    },
                    emphasis: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.8)'
                        }
                    }
                },
                animation: false
            }]
        });
    });
}

// var currentIdx = 0;

showProvince1('云南省','530000');
