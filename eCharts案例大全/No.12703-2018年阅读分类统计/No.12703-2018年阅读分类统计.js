var uploadedDataURL = "/asset/get/s/data-1546085840618-3Ex36Qw8F.txt";


//var uploadedDataURL = "/asset/get/s/data-1544515750244-44gQqsMzG.txt";
var colors = [
    "#2ec7c9",
    "#b6a2de",
    "#5ab1ef",
    "#ffb980",
    "#d87a80",
    "#8d98b3",
    "#e5cf0d",
    "#97b552",
    "#95706d",
    "#dc69aa",
    "#07a2a4",
    "#9a7fd1",
    "#588dd5",
    "#f5994e",
    "#c05050",
    "#59678c",
    "#c9ab00",
    "#7eb00a",
    "#6f5553",
    "#c14089"
];
var bgColor = '#2E2733';
bgColor={
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.7,
          colorStops: [{
              offset: 0,
              color: '#b6a2de' // 0% 处的颜色
          }, {
              offset: .4,
              color: '#9a7fd1' // 100% 处的颜色
          }, {
              offset: 1,
              color: '#59678c' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      };
function obj2string(o) {
    var r = [];
    if (typeof o == "string") {
        return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    }
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o) {
                r.push(i + ":" + obj2string(o[i]));
            }
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}";
        } else {
            for (var i = 0; i < o.length; i++) {
                r.push(obj2string(o[i]))
            }
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString();
};
var dd = [];

var option1 = {
    backgroundColor: bgColor,
    color: colors,

    title: {
        text: '2018年阅读分类统计',
        subtext: '每本书都自带光芒，\n许多光组合在一起，\n变成思想的太阳',
        textStyle: {
            fontSize: 30,
            align: 'center',
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
        subtextStyle: {
            align: 'center',
            color:'#DDD',
            fontSize:18,
            textShadowColor: 'rgba(0,0,0,0.3)',
            textShadowBlur: 5,
        },
        //sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
    },
    tooltip: {},

    series: {
        type: 'sunburst',
        highlightPolicy: 'descendant',
        data: [],
        radius: [0, 500],
        sort: null,
        center:['50%','55%'],
        levels: [{}, {
            //年份
            r0: '0%',
            r: '10%',
            itemStyle: {
                borderWidth: 2,
                
            },
            label: {
                rotate: 'tangential',
                fontSize:14
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }, {
            //分类
            r0: '10%',
            r: '25%',
            itemStyle: {
                borderWidth: 2,
                opacity:1
                
            },
            label: {
                align: 'right',
                fontSize: 12
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }, {
            //国家
            r0: '25%',
            r: '40%',
            label: {
                //position: 'outside',
                //padding: 3,
                //silent: false
                align: 'left',
                fontSize: 12
            },
            itemStyle: {
                //borderWidth: 3
                opacity:0.8
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }, {
            //作者
            r0: '40%',
            r: '65%',
            label: {
                //position: 'outside',
                padding: 0,
                align: 'right',
                fontSize: 10
            },
            itemStyle: {
                borderWidth: 1,
                opacity: 0.1,
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }, {
            //名字
            r0: '65%',
            r: '66%',

            itemStyle: {
                //shadowBlur: 5,
                //shadowColor: colors[0]
            },
            label: {
                //position: 'outside',
                align:'left',
                textShadowBlur: 5,
                textShadowColor: '#333',
                fontSize: 14
            },
            downplay: {
                label: {
                    opacity: 0
                }
            },
            highlight: {
                itemStyle: {
                    color: 'orange',

                },
                label: {

                    color: '#FFF',
                    fontSize: 13
                }

            }
        }, {
            //day
            r0: '120%',
            r: '121%',
            show: false,
            label: {
                position: 'outside',
                //padding: 3,
                //silent: false
                fontSize: 9,
                opacity: 0
            },
            itemStyle: {
                //borderWidth: 3
                opacity: 0
            },
            highlight: {
                itemStyle: {
                    color: 'orange'
                }
            },
            downplay: {
                itemStyle: {
                    color: '#ccc'
                }
            }
        }]
    }
};
option = option1;
$.getJSON(uploadedDataURL, function(readrecords) {
    myChart.hideLoading();
    var lastyearnode = { //新建年份节点
        name: readrecords[0].yyyy,
        value: 1,
        itemStyle: {
            color: colors[0]
        },
        children: [{
            name: readrecords[0].type,
            value: 1,
            itemStyle: {
                color: colors[1]
            },
            children: [{
                name: readrecords[0].country,
                value: 1,
                itemStyle: {
                    color: colors[2]
                },
                children: [{
                    name: readrecords[0].writer,
                    value: 1,
                    itemStyle: {
                        color: colors[3]
                    },
                    children: [{
                        name: readrecords[0].name,
                        value: 1,
                        itemStyle: {
                            color: colors[4]
                        },
                        children: [{
                            name: readrecords[0].days + 'd',
                            value: 1,
                            itemStyle: {
                                color: colors[4]
                            },
                        }]
                    }]
                }]
            }]
        }]
    };
    var lasttypenode = lastyearnode.children[0];
    var lastcountrynode = lasttypenode.children[0];
    var lastwriternode = lastcountrynode.children[0];

    //alert(obj2string(lasttypenode));
    for (var i = 1; i < readrecords.length; i++) { //年份层级
        //for (var i = 1; i < 10; i++) { //年份层级
        //每行先构建叶子节点
        ci = (i + 5) % colors.length;
        //alert(ci);
        co = colors[ci];

        var node = {
            name: '《'+readrecords[i].name+'》',
            value: 1,
            itemStyle: {
                color: colors[ci]
            },
            children: [{
                name: readrecords[i].days + 'd',
                value: 1,
                itemStyle: {
                    color: colors[ci]
                },
            }]
        };

        if (lastyearnode.name !== readrecords[i].yyyy) { //新年份的第一行
            // dd.push(lastyearnode); //将上一个年份的加入数据
            if (lastyearnode.name === 2018) {
                //alert(lastyearnode.name+'---'+(lastyearnode.name===2018));
                dd.push(lastyearnode); //将上一个年份的加入数据
            }
            lastyearnode = { //新建年份节点
                name: readrecords[i].yyyy,
                value: 1,
                itemStyle: {
                    color: colors[ci + 1]
                },
                children: [{
                    name: readrecords[i].type,
                    value: 1,
                    itemStyle: {
                        color: colors[ci + 2]
                    },
                    children: [{
                        name: readrecords[i].country,
                        value: 1,
                        itemStyle: {
                            color: colors[ci + 3]
                        },
                        children: [{
                            name: readrecords[i].writer,
                            value: 1,
                            itemStyle: {
                                color: colors[ci + 4]
                            },
                            children: [node]
                        }]
                    }]
                }]
            };
            lasttypenode = lastyearnode.children[0];
            lastcountrynode = lasttypenode.children[0];
            lastwriternode = lastcountrynode.children[0];

        } else {
            //alert(lasttypenode.name+'-----'+readrecords[i].type+'-----'+(lasttypenode.name !== readrecords[i].type))
            if (lasttypenode.name !== readrecords[i].type) { //新分类
                //alert(obj2string(lastyearnode));

                lasttypenode = {
                    name: readrecords[i].type,
                    value: 1,
                    itemStyle: {
                        color: colors[ci + 1]
                    },
                    children: [{
                        name: readrecords[i].country,
                        value: 1,
                        itemStyle: {
                            color: colors[ci + 2]
                        },
                        children: [{
                            name: readrecords[i].writer,
                            value: 1,
                            itemStyle: {
                                color: colors[ci + 3]
                            },
                            children: [node]
                        }]
                    }]
                }; //新建分类
                lastyearnode.children.push(lasttypenode); //上一分类插入年份节点
                lastyearnode.value++;
                lastcountrynode = lasttypenode.children[0];
                lastwriternode = lastcountrynode.children[0];
                //alert(obj2string(lasttypenode));
                //alert(lasttypenode.name+'-----'+readrecords[i].type+'-----'+(lasttypenode.name !== readrecords[i].type))

            } else {
                if (lastcountrynode.name !== readrecords[i].country) { //新国家
                    lastcountrynode = {
                        name: readrecords[i].country,
                        value: 1,
                        itemStyle: {
                            color: colors[ci + 1]
                        },
                        children: [{
                            name: readrecords[i].writer,
                            value: 1,
                            itemStyle: {
                                color: colors[ci + 2]
                            },
                            children: [node]
                        }]
                    }; //新建分类
                    lasttypenode.children.push(lastcountrynode);
                    lasttypenode.value++;
                    lastyearnode.value++;
                    lastwriternode = lastcountrynode.children[0];
                } else {
                    if (lastwriternode.name !== readrecords[i].writer) { //新作者
                        lastwriternode = {
                            name: readrecords[i].writer,
                            value: 1,
                            itemStyle: {
                                color: colors[ci + 1]
                            },
                            children: [node]
                        }; //新建分类
                        lastcountrynode.children.push(lastwriternode);
                        lastcountrynode.value++;
                        lasttypenode.value++;
                        lastyearnode.value++;
                    } else {
                        lastwriternode.children.push(node);
                        lastcountrynode.value++;
                        lasttypenode.value++;
                        lastyearnode.value++;
                        lastwriternode.value++;
                    }
                }
            }
        }

        //alert(obj2string(dd));break;
    }

    if (lastyearnode.name === 2018) {
        //alert(lastyearnode.name + '---' + (lastyearnode.name === 2018));
        dd.push(lastyearnode); //将上一个年份的加入数据
    }
    //alert(obj2string(dd));
    option1.series.data = dd;
    //alert(obj2string(option1.series.data));

    myChart.setOption(option, true);
    //alert('111');
});