import React, { useRef } from "react";
import { GraphCanvas, GraphCanvasRef, useSelection } from "reagraph";
import { complexEdges, complexNodes } from "./assets/demo";
const nodes = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((e: number) => {
  return {
    id: String(e),
    label: String(e),
  };
});
//     [
//   {
//     id: "1",
//     label: "1",
//   },
//   {
//     id: "2",
//     label: "2",
//   },
// ];

const edges = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map((e: number) => {
  // const random = Math.floor(Math.random() * 10);
  const random = e + 1;
  const id = `${e}-${e}`;
  return {
    source: String(e),
    target: String(random),
    id: id,
    label: id,
  };
});
//     [
//   {
//     source: "1",
//     target: "2",
//     id: "1-2",
//     label: "1-2",
//   },
//   {
//     source: "2",
//     target: "1",
//     id: "2-1",
//     label: "2-1",
//   },
// ];

const Complex = () => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, actives, selectNodePaths, onNodeClick, onCanvasClick } =
    useSelection({
      ref: graphRef,
      nodes: complexNodes,
      edges: complexEdges,
      pathSelectionType: "direct",
      type: "multi",
    });

  const from = complexNodes[0].id;
  const to = complexEdges[8].id;

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <>
      <div
        style={{
          zIndex: 9,
          position: "absolute",
          top: 15,
          right: 15,
          background: "rgba(0, 0, 0, .5)",
          padding: 1,
          color: "white",
        }}
      >
        <button
          style={{ display: "block", width: "100%" }}
          onClick={() => selectNodePaths(from, to)}
        >
          Select {from} to {to} Paths
        </button>
      </div>
      <GraphCanvas
        ref={graphRef}
        actives={actives}
        nodes={complexNodes}
        edges={complexEdges}
        selections={selections}
        onCanvasClick={onCanvasClick}
        onNodeClick={onNodeClick}
      />
    </>
  );
};

export const MyDiagram = () => (
  <>
    {" "}
    {/*<GraphCanvas nodes={nodes} edges={edges} />*/}
    <Complex />
  </>
);
