//关于这个图表我做的视频简介：https://www.bilibili.com/video/BV1pD4y127tW
//各位观众老爷们一键三连，下次一定！

myChart.setOption(option = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "backgroundColor": "#ffffff",
    "color": [
        "#000000",
        "#61a0a8",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#1d953f"
    ],
    "series": [{
        "type": "sankey",
        "name": "sankey",
        "data": [{
                "name": "Photovoltaic manufacturers",
                "depth": 0,
                "itemStyle": {color: '#9cbbc9'}

            },
            {
                "name": "Photovoltaic wholesalers (36.12%)",
                "depth": 1,
                "itemStyle": {color: '#dc9f68'}

            },
            {
                "name": "Photovoltaic-specific installers (6.86%)",
                "depth": 1,
                "itemStyle": {color: '#efac58'}
            },


            {
                "name": "Photovoltaic retailers (2.46%)",
                "depth": 1,
                "itemStyle": {color: '#fab76f'}
            },
            {
                "name": "Decoration companies- Installers (2.24%)",
                "depth": 1,
                 "itemStyle": {color: '#fbcf7a'}
            },


            {
                "name": "Photovoltaic leasers (1.33%)",
                "depth": 1,
                "itemStyle": {color: '#f8d08b'}
            },

            {
                "name": "Housekeeping companies- Installers (0.90%)",
                "depth": 1,
                "itemStyle": {color: '#ffebbb'}
            },

            {
                "name": "C1 (45.35%)",
                "depth": 2,
                "itemStyle": {color: '#739c92'}
            },
            {
                "name": "C2 (3.74%)",
                "depth": 2,
                "itemStyle": {color: '#aacbc1'}
            },
            {
                "name": "C3 (0.44%)",
                "depth": 2,
                "itemStyle": {color: '#4e9d8b'}
            },
            {
                "name": "C4 (0.27%)",
                "depth": 2,
                "itemStyle": {color: '#52aaaa'}
            },
            {
                "name": "C5 (0.11%)",
                "depth": 2,
                "itemStyle": {color: '#658e77'}
            },
            {
                "name": "C6 (0.01%)",
                "depth": 2,
                "itemStyle": {color: '#658e77'}
            },
            {
                "name": "D1 (19.70%)",
                "depth": 2,
                "itemStyle": {color: '#da505f'}
            },
            {
                "name": "D2 (5.62%)",
                "depth": 2,
                "itemStyle": {color: '#d12135'}
            },
            {
                "name": "D3 (4.21%)",
                "depth": 2,
                "itemStyle": {color: '#ff958e'}
            },
            {
                "name": "D4 (3.90%)",
                "depth": 2,
                "itemStyle": {color: '#ff8078'}
            },
            {
                "name": "D5 (2.52%)",
                "depth": 2,
                "itemStyle": {color: '#ec1a33'}
            },
            {
                "name": "D6 (1.56%)",
                "depth": 2,
                "itemStyle": {color: '#f15f6a'}
            },

            {
                "name": "D7 (1.44%)",
                "depth": 2,
                "itemStyle": {color: '#ef3f49'}
            },
            {
                "name": "D8 (1.28%)",
                "depth": 2,
                "itemStyle": {color: '#f36e67'}
            },
            {
                "name": "D9 (1.26%)",
                "depth": 2,
                "itemStyle": {color: '#ee3f2c'}
            },

            {
                "name": "D10 (1.22%)",
                "depth": 2,
                "itemStyle": {color: '#f15522'}
            },
            {
                "name": "D11 (1.16%)",
                "depth": 2,
                "itemStyle": {color: '#f79f8b'}
            },
            {
                "name": "D12 (0.06%)",
                "depth": 2,
                "itemStyle": {color: '#fbc6b3'}
            },
            {
                "name": "D13 (0.05%)",
                "depth": 2,
                "itemStyle": {color: '#fbd9d4'}
            },
            {
                "name": "D14 (0.05%)",
                "depth": 2,
                "itemStyle": {color: '#ffe5d8'}
            },
            {
                "name": "D15 (4.49%)",
                "depth": 2,
                "itemStyle": {color: '#ffeee7'}
            }
        ],
        "links": [{
                "source": "Photovoltaic manufacturers",
                "target": "Photovoltaic wholesalers (36.12%)",
                "value": 0.3612310386793445
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "Photovoltaic-specific installers (6.86%)",
                "value": 0.06855964848185843

            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D1 (19.70%)",
                "value": 0.19702362459259984
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D2 (5.62%)",
                "value": 0.056232076872985835
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D15 (4.49%)",
                "value": 0.044933953501024713
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D3 (4.21%)",
                "value": 0.04211453583212623
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "Decoration companies- Installers (2.24%)",
                "value": 0.02236104441173587
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D5 (2.52%)",
                "value": 0.025176017614742103
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "Photovoltaic retailers (2.46%)",
                "value": 0.024626587221591972
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D4 (3.90%)",
                "value": 0.03895689117372692
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D6 (1.56%)",
                "value": 0.015577357066376344
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D7 (1.44%)",
                "value": 0.01443852237800907
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "Photovoltaic leasers (1.33%)",
                "value": 0.01334759612884145
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D8 (1.28%)",
                "value": 0.0128327977470964
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D9 (1.26%)",
                "value": 0.012594197378383595
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D10 (1.22%)",
                "value": 0.012248391750089042
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D11 (1.16%)",
                "value": 0.011624275878064444
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "Housekeeping companies- Installers (0.90%)",
                "value": 0.00895750374826849
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D12 (0.06%)",
                "value": 0.006224985173337915
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D13 (0.05%)",
                "value": 0.005827852575848467
            },
            {
                "source": "Photovoltaic manufacturers",
                "target": "D14 (0.05%)",
                "value": 0.005111101793949024
            },
            {
                "source": "Photovoltaic retailers (2.46%)",
                "target": "C1 (45.35%)",
                "value": 0.017508181604781094
            },
            {
                "source": "Housekeeping companies- Installers (0.90%)",
                "target": "C1 (45.35%)",
                "value": 0.00895750374826849
            },
            {
                "source": "Photovoltaic wholesalers (36.12%)",
                "target": "C1 (45.35%)",
                "value": 0.32298685655663933
            },
            {
                "source": "Photovoltaic leasers (1.33%)",
                "target": "C1 (45.35%)",
                "value": 0.01334759612884145
            },
            {
                "source": "Decoration companies- Installers (2.24%)",
                "target": "C1 (45.35%)",
                "value": 0.02236104441173587
            },
            {
                "source": "Photovoltaic-specific installers (6.86%)",
                "target": "C1 (45.35%)",
                "value": 0.06834941462572422
            },
            {
                "source": "Photovoltaic-specific installers (6.86%)",
                "target": "C6 (0.01%)",
                "value": 1.1207959843229821e-05
            },
            {
                "source": "Photovoltaic wholesalers (36.12%)",
                "target": "C2 (3.74%)",
                "value": 0.037171146657819745
            },
            {
                "source": "Photovoltaic-specific installers (6.86%)",
                "target": "C2 (3.74%)",
                "value": 0.00019902589629097557
            },
            {
                "source": "Photovoltaic wholesalers (36.12%)",
                "target": "C5 (0.11%)",
                "value": 0.0010730354648854075
            },
            {
                "source": "Photovoltaic retailers (2.46%)",
                "target": "C3 (0.44%)",
                "value": 0.004407072778829749
            },
            {
                "source": "Photovoltaic retailers (2.46%)",
                "target": "C4 (0.27%)",
                "value": 0.0027113328379811297
            }
        ],
        "left": "5%",
        "top": "5%",
        "right": "10%",
        "bottom": "5%",
        "nodeWidth":20 ,
        "nodeGap": 10,
        "nodeAlign": "justify",
        "layoutIterations": 0,
        "orient": "horizontal",
        "draggable":true,
        "focusNodeAdjacency": false,
        "label": {
            "show": true,
            "position": "right",
            "fontWeight": "bolder",
            "fontFamily": "Arial",
            "margin": 8
        },
        "itemStyle": {
            "borderWidth": 0,
            "borderColor": '#fff'
        },
        
        "lineStyle": {
            "show": true,
            "width": 1,
            "opacity": 0.2,
            "curveness": 0.6,
            "type": "solid",
            "color": "source",
            

        }
    }],
    "legend": [{
        "data": [
            "sankey"
        ],
        "selected": {
            "sankey": true
        },
        "show": false,
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 12
    }],
    "tooltip": {
        "show": true,
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "borderWidth": 0,
        formatter: function(params) {
            return params.name;
        }
    },
    "title": [{
        "text": "C1-Households\nC2-Retailers(to Households)\nC3-Small power companies\nC4-Food and feed manufacturers\nC5-Leasers(to Households)\nC6-Real estate\nD1-Households\nD2-Electrical machinery manufacturers\nD3-General machinery manufacturers\nD4-Metal product manufacturers\nD5-Chemical factories\nD6-Transportation machinery manufacturers\nD7-Petroleum coal product manufacturers\nD8-Store product manufacturers",
        "padding": 20,
        "itemGap": 10,
        textStyle: {
            fontSize: 12
        },
        top: 'bottom',
        left: 'left'
    },
    {
        "text": "D9-Ferrous and non-ferrous metals product manufacturers\nD10-Miscellaneous good manufacturers\nD11-Advertising companies\nD12-Natural gas companies\nD13-Wood product manufacturers\nD14-Precision and medical machine manufacturers\nD15-Others",
        "padding": 20,
        "itemGap": 10,
        textStyle: {
            fontSize: 12
        },
        top: 'bottom',
        left: '280px'
    }]
});