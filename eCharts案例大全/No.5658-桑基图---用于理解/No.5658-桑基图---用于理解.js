option = {
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove"
  },
  
  series: [{
    type: "sankey",
    focusNodeAdjacency: true,
    lineStyle: {
        color: "source",
        curveness: 0.5
    },
    data: [
    {
      name: "1"
    },{
      name: "2"
    },  {
      name: "3"
    }, {
      name: "4"
    }, {
      name: "5"
    },{
      name: "6"
    },{
      name: "7"
    }, {
      name: "8"
    }, {
      name: "9"
    }, {
      name: "10"
    }, {
      name: "11"
    }, 
    
    ],
    links: [
    {
      source: "1",
      target: "5",
      value: 100
    }, {
      source: "5",
      target: "6",
      value: 150
    }, {
      source: "6",
      target: "2",
      value: 50
    }, {
      source: "5",
      target: "9",
      value: 100
    },{
      source: "6",
      target: "10",
      value: 100
    }, {
      source: "6",
      target: "11",
      value: 50
    },{
      source: "6",
      target: "9",
      value: 80
    }, {
      source: "8",
      target: "10",
      value: 100
    },{
      source: "8",
      target: "11",
      value: 150
    }, {
      source: "3",
      target: "7",
      value: 200
    }, {
      source: "7 reserves",
      target: "7",
      value: 100
    }, {
      source: "7",
      target: "8",
      value: 200
    }, {
      source: "4",
      target: "6",
      value: 250
    }]
  }]
}