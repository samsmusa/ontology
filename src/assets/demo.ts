import { range } from "d3-array";
import random from "lodash/random";
import demonSvg from "./demon.svg";
import computerSvg from "./computer.svg";
import generators from "ngraph.generators";
import { GraphEdge, GraphNode } from "reagraph";

export const simpleNodes: GraphNode[] = range(5).map((i) => ({
  id: `n-${i}`,
  label: `Node ${i}`,
  data: {
    priority: random(0, 10),
  },
}));

export const parentNodes: GraphNode[] = [
  ...range(5).map((i) => {
    if (i === 2) {
      return {
        id: `n-${i}`,
        label: `Node ${i} - 3 Children`,
        data: {
          priority: random(0, 10),
        },
      };
    }

    if (i === 3) {
      return {
        id: `n-${i}`,
        label: `Node ${i} - 1 Child`,
        data: {
          priority: random(0, 10),
        },
      };
    }

    return {
      id: `n-${i}`,
      label: `Node ${i}`,
      data: {
        priority: random(0, 10),
      },
    };
  }),
  ...range(3).map((i) => {
    if (i === 0) {
      return {
        id: `n-2-n-${i}`,
        label: `Node 2 > ${i} - 1 Child`,
        data: {
          priority: random(0, 10),
        },
      };
    }

    return {
      id: `n-2-n-${i}`,
      label: `Node 2 > ${i}`,
      data: {
        priority: random(0, 10),
      },
    };
  }),
  {
    id: `n-2-n-0-n-0`,
    label: `Node 2 > Node 0 > Node 0`,
    data: {
      priority: random(0, 10),
    },
  },
];

const types = ["IP", "URL", "Email", "MD5"];
const colors = ["blue", "green", "red", "orange"];

export const clusterNodes: GraphNode[] = range(25).map((i) => {
  const idx = random(0, types.length - 1);

  return {
    id: `n-${i}`,
    label: `Node ${i}`,
    fill: colors[idx],
    data: {
      type: types[idx],
    },
  };
});

export const clusterEdges: GraphEdge[] = range(random(5, 25)).map((i) => ({
  id: `e-${i}`,
  source: `n-${i}`,
  target: `n-${random(0, clusterNodes.length - 1)}`,
  label: "Edge 0-1",
}));

export const simpleNodesColors: GraphNode[] = range(8).map((i) => ({
  id: `n-${i}`,
  label: `Node ${i}`,
  size: 15,
  fill: `hsl(174, 100%, 50%, 1)`,
  data: {
    priority: random(0, 10),
  },
}));

export const iconNodes: GraphNode[] = range(11).map((i) => ({
  id: `n-${i}`,
  label: `Node ${i}`,
  icon: i % 2 === 0 ? computerSvg : demonSvg,
  data: {
    priority: random(0, 10),
  },
}));

export const manyNodes: GraphNode[] = range(100).map((i) => ({
  id: `n-${i}`,
  label: `Node ${i}`,
  data: {
    priority: Math.floor(Math.random() * 10) + 1,
  },
}));

export const simpleEdges: GraphEdge[] = [
  {
    id: "0->1",
    source: "n-0",
    target: "n-1",
    label: "Edge 0-4",
  },
  {
    id: "1->2",
    source: "n-1",
    target: "n-2",
    label: "Edge 0-5",
  },
  {
    id: "2->3",
    source: "n-2",
    target: "n-3",
    label: "Edge 0-6",
  },
  {
    id: "3->4",
    source: "n-3",
    target: "n-4",
    label: "Edge 0-7",
  },
  {
    id: "4->5",
    source: "n-4",
    target: "n-5",
    label: "Edge 0-8",
  },
  {
    id: "5->6",
    source: "n-5",
    target: "n-6",
    label: "Edge 0-9",
  },
  {
    id: "6->7",
    source: "n-6",
    target: "n-7",
    label: "Edge 0-10",
  },
  // {
  //   id: "0->1",
  //   source: "n-0",
  //   target: "n-1",
  //   label: "Edge 0-1",
  // },
  // {
  //   id: "1->2",
  //   source: "n-1",
  //   target: "n-2",
  //   label: "Edge 0-2",
  // },
  // {
  //   id: "2->3",
  //   source: "n-2",
  //   target: "n-3",
  //   label: "Edge 0-3",
  // },
  // {
  //   id: "3->4",
  //   source: "n-3",
  //   target: "n-4",
  //   label: "Edge 0-4",
  // },
  // {
  //   id: "4->5",
  //   source: "n-4",
  //   target: "n-5",
  //   label: "Edge 0-5",
  // },
  // {
  //   id: "5->6",
  //   source: "n-5",
  //   target: "n-6",
  //   label: "Edge 0-6",
  // },
  // {
  //   id: "6->7",
  //   source: "n-6",
  //   target: "n-7",
  //   label: "Edge 0-7",
  // },
  // {
  //   id: "7->8",
  //   source: "n-7",
  //   target: "n-8",
  //   label: "Edge 0-8",
  // },
  // {
  //   id: "8->9",
  //   source: "n-8",
  //   target: "n-9",
  //   label: "Edge 0-9",
  // },
  // {
  //   id: "9->10",
  //   source: "n-9",
  //   target: "n-10",
  //   label: "Edge 0-10",
  // },
  // {
  //   id: "0->11",
  //   source: "n-0",
  //   target: "n-11",
  //   label: "Edge 0-11",
  // },
  // {
  //   id: "11->12",
  //   source: "n-11",
  //   target: "n-12",
  //   label: "Edge 0-11",
  // },
  // {
  //   id: "11->13",
  //   source: "n-11",
  //   target: "n-13",
  //   label: "Edge 0-11",
  // },
  // {
  //   id: "1->12",
  //   source: "n-1",
  //   target: "n-12",
  //   label: "Edge 0-11",
  // },
  // {
  //   id: "3->12",
  //   source: "n-3",
  //   target: "n-12",
  //   label: "Edge 0-11",
  // },
];

export const parentEdges: GraphEdge[] = [
  ...simpleEdges,
  {
    id: "2->2-0",
    source: "n-2",
    target: "n-2-n-0",
    label: "Edge 2-2-0",
  },
  {
    id: "2->2-1",
    source: "n-2",
    target: "n-2-n-1",
    label: "Edge 2-2-1",
  },
  {
    id: "2->2-2",
    source: "n-2",
    target: "n-2-n-2",
    label: "Edge 2-2-2",
  },
  {
    id: "2->2-0->2-0-0",
    source: "n-2-n-0",
    target: "n-2-n-0-n-0",
    label: "Edge 2-2-0",
  },
  {
    id: "3->2-0->2-0-0",
    source: "n-3",
    target: "n-2-n-0-n-0",
    label: "Edge 3-2-0",
  },
];

export const treeEdges: GraphEdge[] = [
  {
    id: "0->1",
    source: "n-0",
    target: "n-1",
    label: "Edge 0-1",
  },
  {
    id: "0->2",
    source: "n-0",
    target: "n-2",
    label: "Edge 0-2",
  },
  {
    id: "2->3",
    source: "n-2",
    target: "n-3",
    label: "Edge 2-3",
  },
  {
    id: "3->4",
    source: "n-3",
    target: "n-4",
    label: "Edge 2-3",
  },
];

export const [complexNodes, complexEdges] = transformGenerator(
  generators.balancedBinTree(2)
);

export function transformGenerator(g: any) {
  const nodes: any[] = [];
  const edges: any[] = [];

  g.forEachNode((node: any) => {
    nodes.push({
      id: `${node.id}`,
      label: `Node ${node.id}`,
    });

    node.links.forEach((link: any) => {
      edges.push({
        id: `${node.id}->${link.toId}`,
        source: `${link.fromId}`,
        target: `${link.toId}`,
        label: `${link.fromId} -> ${link.toId}`,
      });
    });
  });

  return [nodes, edges];
}
