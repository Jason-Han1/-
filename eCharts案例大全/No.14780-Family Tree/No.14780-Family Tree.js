var male_image = 'M321.778,95.024l30-0.049l-0.154-94.821L256.802,0l-0.049,30l43.741,0.071l-58.583,58.583  c-26.385-21.595-59.13-33.339-93.68-33.339c-39.594,0-76.817,15.419-104.814,43.417C15.419,126.729,0,163.953,0,203.547  s15.419,76.818,43.416,104.815s65.221,43.416,104.814,43.416s76.818-15.419,104.815-43.416  c54.215-54.215,57.572-140.324,10.073-198.49l58.588-58.588L321.778,95.024z M231.833,287.149  c-22.331,22.331-52.021,34.629-83.603,34.629S86.96,309.48,64.629,287.149C42.298,264.818,30,235.128,30,203.547  s12.298-61.271,34.629-83.602s52.021-34.629,83.602-34.629c31.581,0,61.271,12.298,83.603,34.629  C277.931,166.044,277.931,241.051,231.833,287.149z';
var female_image = 'M355.578,148.231C355.578,66.496,289.082,0,207.347,0S59.115,66.496,59.115,148.231  c0,76.672,58.514,139.933,133.231,147.476v47.601h-41.568v30h41.568v41.385h30v-41.385h41.568v-30h-41.568v-47.601  C297.064,288.164,355.578,224.903,355.578,148.231z M89.115,148.231C89.115,83.038,142.153,30,207.347,30  s118.231,53.038,118.231,118.231S272.54,266.462,207.347,266.462S89.115,213.424,89.115,148.231z';
var nodes = [];
var links = [];
var legend_data = [];

// root node self
var mouse_gender = "M";
var image_path = "";
var image_mate_path = "";
if (mouse_gender == "F") {
    image_path = 'path://' + female_image + '';
    image_mate_path = 'path://' + male_image + '';
} else {
    image_path = 'path://' + male_image + '';
    image_mate_path = 'path://' + female_image + '';
}
var root_x = 15;
var root_y = 30;
nodes.push({
    x: root_x,
    y: root_y,
    symbol: image_path,
    label: {
        normal: {
            position: 'bottom',
            color: 'red',
            fontweight: 'bold'
        }
    },
    itemStyle: {
        normal: {
            color: 'blue', //圆点的颜色
            label: {
                position: 'bottom',
                textStyle: {
                    color: 'blue'
                }
            }
        }
    },
    name: "self",
    value: "self"
});
legend_data.push("self");

nodes.push({
    x: root_x - 10,
    y: root_y - 10,
    symbol: 'path://' + male_image + '',
    label: {
        normal: {
            position: 'bottom',
            color: 'black',
        }
    },
    itemStyle: {
        normal: {
            color: 'blue'
        }
    },
    name: "father",
    value: "father"
});

nodes.push({
    x: root_x + 10,
    y: root_y - 10,
    symbol: 'path://' + female_image + '',
    label: {
        normal: {
            position: 'bottom',
            color: 'black',
        }
    },
    itemStyle: {
        normal: {
            color: 'red'
        }
    },
    name: "mother",
    value: "mother"
});

//generate the nodes between father and mother
nodes.push({
    x: root_x,
    y: root_y - 10,
    itemStyle: {
        normal: {
            opacity: 0
        }
    },
    name: "parent_node"
});
//generate the node that between parent_node and self
nodes.push({
    x: root_x,
    y: root_y - 5,
    itemStyle: {
        normal: {
            opacity: 0
        }
    },
    name: "parent_brage"
});
//generate the mate node
nodes.push({
    x: root_x + 15,
    y: root_y,
    symbol: image_mate_path,
    label: {
        normal: {
            position: 'bottom',
            color: 'red',
            fontweight: 'bold'
        }
    },
    name: "wife",
    value: "wife",
    type: "wife"
});
legend_data.push("wife");
//generate the node between self and mate node
nodes.push({
    x: root_x + 7.5,
    y: root_y,
    itemStyle: {
        normal: {
            opacity: 0
        }
    },
    name: "mate_node"
});

var litter_temp_left = -10;
var litter_with_mate_right = 25;
//var litter_temp_right=10;
for (var i = 0; i < 4; i++) {
    // && has_mate
    if (i % 2 === 0) {
        nodes.push({
            x: root_x + litter_temp_left,
            y: root_y,
            symbol: "M" == "M" ? 'path://' + male_image + '' : 'path://' + female_image + '',
            label: {
                normal: {
                    position: 'bottom',
                    color: 'black',
                }
            },
            itemStyle: {
                normal: {
                    color: 'blue'
                }
            },
            name: "brother" + i.toString(),
            value: "brother" + i.toString()
        });
        nodes.push({
            x: root_x + litter_temp_left,
            y: root_y - 5,
            //symbol: data.mouse_litter_info[i].gender == "M" ? 'image://'+male_image+'' : 'image://'+female_image+'',
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            name: "litter" + i.toString()
        });
        links.push({
            source: "litter" + i.toString(),
            target: 'parent_brage'
        });
        links.push({
            source: "litter" + i.toString(),
            target: "brother" + i.toString()
        });
        litter_temp_left -= 10;
    }
    if (i % 2 !== 0) {
        nodes.push({
            x: root_x + litter_with_mate_right,
            y: root_y,
            symbol: "F" == "M" ? 'path://' + male_image + '' : 'path://' + female_image + '',
            label: {
                normal: {
                    position: 'bottom',
                    color: 'black',
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            name: "sister" + i.toString(),
            value: "sister" + i.toString()
        });
        nodes.push({
            x: root_x + litter_with_mate_right,
            y: root_y - 5,
            itemStyle: {
                normal: {
                    opacity: 0
                }
            },
            name: "litter" + i.toString()
        });
        links.push({
            source: "litter" + i.toString(),
            target: 'parent_brage'
        });
        links.push({
            source: "litter" + i.toString(),
            target: "sister" + i.toString()
        });

        litter_with_mate_right += 10;
    }
}

var temp_left = -5;
var temp_right = 15;
for (var i = 0; i < 5; i++) {
    if (i === 0) {
        nodes.push({
            x: root_x + 7.5,
            y: root_y + 10,
            symbol: "M" == "M" ? 'path://' + male_image + '' : 'path://' + female_image + '',
            label: {
                normal: {
                    position: 'bottom',
                    color: 'black',
                }
            },
            itemStyle: {
                normal: {
                    color: 'blue'
                }
            },
            name: "children" + i.toString(),
            value: "children" + i.toString()
        });
    } else {
        nodes.push({
            x: i % 2 === 0 ? root_x + temp_right : root_x + temp_left,
            y: root_y + 10,
            symbol: "F" == "M" ? 'path://' + male_image + '' : 'path://' + female_image + '',
            label: {
                normal: {
                    position: 'bottom',
                    color: 'black',
                }
            },
            itemStyle: {
                normal: {
                    color: 'red'
                }
            },
            name: "children" + i.toString(),
            value: "children" + i.toString()
        });
        temp_left -= 5;
        temp_right += 5;
    }
}

//generate the linkers
links.push({
    source: "self",
    target: 'parent_node'
});
links.push({
    source: "father",
    target: 'parent_node'
});
links.push({
    source: "mother",
    target: 'parent_node'
});

links.push({
    source: "self",
    target: "wife"
});

for (var i = 0; i < 5; i++) {
    if (i === 0) {
        links.push({
            source: "mate_node",
            target: "children0"
        });
    } else {
        links.push({
            source: "children0",
            target: "children" + i.toString()
        });
    }
}

option = {
    title: {
        text: 'Family Tree'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b}"
    },
    legend: {
        orient: 'vertical',
        data: legend_data
    },
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 24,
        label: {
            normal: {
                show: true
            }
        },
        data: nodes,
        links: links,
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 1
            }
        }
    }]
};