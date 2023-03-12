option = {
    backgroundColor: '#0A2E5D',
    color:[
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 1,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: "rgba(3,185,254,0.5)"
            },
            {
              offset: 0.5,
              color: "rgba(0,250,254,0.5)"
            },
            {
              offset: 1,
              color: "rgba(0,250,254,1)"
            }
          ],
          global: false
        }
    ],
    angleAxis: {
        max: 200,
        show: false,
        startAngle: 180,
    },
    radiusAxis: {
        type: "category",
        show: false
    },
    polar: {
        radius: 300,
        center: ["50%", "50%"]
    },
    series: [
        {
            type: "bar",
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
              color: "rgba(0,0,0,0)"
            },
            coordinateSystem: "polar",
            name: "库存周转率",
            data: [90]
        }
    ]
}