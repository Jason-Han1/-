var weatherIcons = {
    up: './data/asset/img/arrow-up.png',
    down: './data/asset/img/arrow-down.png'
};

function mapTooltipClick(name) {
    console.log(name)
}
option = {

    tooltip: {
        trigger: 'item',
    },

    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         saveAsImage: {}
    //     }
    // },
    tooltip: {

        padding: 0,
        enterable: true,
        transitionDuration: 1,
        textStyle: {
            color: '#000',
            decoration: 'none',
        },
        // position: function (point, params, dom, rect, size) {
        //   return [point[0], point[1]];
        // },
        formatter: function(params) {

            var tipHtml = '';
            tipHtml = '<div style="width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
                '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
                '        <span style="line-height:50px;margin-left:18px">' + params.name + '</span>' +
                '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
                '    </div>' +
                '    <div style="height:110px;width:100%;background:#fff">' +
                '        <div style="padding-left:18px;padding-top:22px">' +
                '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
                '            <span>上传表格数量</span>' +
                '            <span style="float:right;margin-right:18px">' + 'params.data.tipData[0]' + '万</span>' +
                '        </div>' +
                '        <div style="padding-left:18px;padding-top:14px">' +
                '            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
                '            <span>上传数据条数</span>' +
                '            <span style="float:right;margin-right:18px">' + 'params.data.tipData[1]' + '条</span>' +
                '        </div>' +
                '    </div>'
            '</div>';
            setTimeout(function() {
                // tooltipCharts(params.name);
            }, 10);
            return tipHtml;
        }
    },
    animation: true,
    animationDurationUpdate: 1000,
    animationEasingUpdate: 'cubicInOut',
    series: [{

        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
            normal: {
                show: true,
                formatter: function(params) {

                    if (params.data) {
                        var icon = params.data.value[1] ? 'up' : 'down';
                        var valueType = params.data.value[1] ? 'valueUp' : 'valueDown';
                        return params.name +
                            '：{' + valueType + '|' + params.value + '} {' + icon + '|}';

                    }
                },
                position: 'inside',
                backgroundColor: '#fff',
                padding: [4, 5],
                borderRadius: 3,
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,0.5)',
                color: '#777',
                rich: {
                    valueUp: {
                        color: '#019D2D',
                        fontSize: 14
                    },
                    valueDown: {
                        color: '#019D2D',
                        fontSize: 14
                    },
                    up: {
                        height: 14,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.up
                        }
                    },
                    down: {
                        height: 14,
                        align: 'center',
                        backgroundColor: {
                            image: weatherIcons.down
                        }
                    }
                }
            },
            emphasis: {
                show: true
            }
        },
        data: [{
                name: '北京',
                value: 10
            },
            {
                name: '天津',
                value: 10
            },
            {
                name: '上海',
                value: 10
            },
            {
                name: '重庆',
                value: 10
            },
            {
                name: '河北',
                value: 10
            },
            {
                name: '河南',
                value: 10
            },
            {
                name: '云南',
                value: 10
            },
            {
                name: '辽宁',
                value: 10
            },
            {
                name: '黑龙江',
                value: 10
            },
            {
                name: '湖南',
                value: 10
            },
            {
                name: '安徽',
                value: 10
            },
            {
                name: '山东',
                value: 10
            },
            {
                name: '新疆',
                value: 10
            },
            {
                name: '江苏',
                value: 10
            },
            {
                name: '浙江',
                value: 10
            },
            {
                name: '江西',
                value: 10
            },
            {
                name: '湖北',
                value: 10
            },
            {
                name: '广西',
                value: 10
            },
            {
                name: '甘肃',
                value: 10
            },
            {
                name: '山西',
                value: 10
            },
            {
                name: '内蒙古',
                value: 10
            },
            {
                name: '陕西',
                value: 10
            },
            {
                name: '吉林',
                value: 10
            },
            {
                name: '福建',
                value: 10
            },
            {
                name: '贵州',
                value: 10
            },
            {
                name: '广东',
                value: 10
            },
            {
                name: '青海',
                value: 10
            },
            {
                name: '西藏',
                value: 10
            },
            {
                name: '四川',
                value: 10
            },
            {
                name: '宁夏',
                value: 10
            },
            {
                name: '海南',
                value: 10
            },
            {
                name: '台湾',
                value: 10
            },
            {
                name: '香港',
                value: 10
            },
            {
                name: '澳门',
                value: 10
            }
        ],
        itemStyle: {
            normal: {
                borderColor: '#fefefe',
                areaColor: '#179125',
                borderWidth: 1,
                show: true,
            },
            emphasis: {
                areaColor: '#179125',
                color: '#179125',
                borderWidth: 2,
                show: true,
            }
        },
    }]
};




function randomData() {
    return [Math.round(Math.random() * 1000), Math.random() > 0.6];
}