         var nodes = [];
         var links = [];
         var constMaxDepth = 4;
         var constMaxChildren = 3;
         var constMinChildren = 2;
         var constMaxRadius = 10;
         var constMinRadius = 2;
         var mainDom = {
             clientWidth:500,
             clientHeight:700
         };

         function rangeRandom(min, max) {
             return Math.random() * (max - min) + min;
         }

         function createRandomNode(depth,data) {
             var x = mainDom.clientWidth / 2 + (.5 - Math.random()) * 200;
             var y = (mainDom.clientHeight - 20) * depth / (constMaxDepth + 1) + 20;
             var node = {
                 name : 'NODE_' + nodes.length,
                 value : rangeRandom(constMinRadius, constMaxRadius),
                 // Custom properties
                 id : nodes.length,
                 depth : depth,
                 x : y,
                 y: x,
                 category : depth === constMaxDepth ? 0 : 1
             };

             nodes.push(node);
             return node;
         }

         function forceMockThreeData() {
             var depth = 0;

             var rootNode = createRandomNode(0);
             rootNode.name = 'ROOT';
             rootNode.category = 2;

             function mock(parentNode, depth) {
                 var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));

                 for (var i = 0; i < nChildren; i++) {
                     var childNode = createRandomNode(depth);
                     console.log(parentNode.id,childNode.id,depth);
                     links.push({
                         source : parentNode.id,
                         target : childNode.id,
                         weight : 1
                     });
                     if (depth < constMaxDepth) {
                         mock(childNode, depth + 1);
                     }
                 }
             }

             mock(rootNode, 1);
         }

         forceMockThreeData();
        // createRandomNode(0,$scope.datalist);

option = {
             tooltip: {},
             animationDurationUpdate: 1500,
             animationEasingUpdate: 'quinticInOut',
             series : [
                 {
                     type: 'graph',
                     layout: 'none',
                     symbolSize: 6,
                     roam: true,
                     label: {
                         normal: {
                             show: false
                         }
                     },
                     edgeSymbol: ['circle'],
                     edgeSymbolSize: [4, 10],
                     edgeLabel: {
                         normal: {
                             textStyle: {
                                 fontSize: 20
                             }
                         }
                     },
                     data:nodes,
                     // links: [],
                     links: links,
                     lineStyle: {
                         normal: {
                             opacity: 0.9,
                             width: 2,
                             curveness: 0
                         }
                     }
                 }
             ]
         };
