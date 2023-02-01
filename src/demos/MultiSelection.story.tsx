import React, { Fragment, useRef } from "react";
import {
  complexEdges,
  complexNodes,
  iconNodes,
  manyNodes,
  simpleEdges,
  simpleNodesColors,
} from "../assets/demo";
import {
  darkTheme,
  GraphCanvas,
  GraphCanvasRef,
  SphereWithIcon,
  useSelection,
} from "reagraph";

export default {
  title: "Demos/Selection/Multi",
  component: GraphCanvas,
};
const nodes = {
  start: {
    identity: 63,
    labels: ["Branch"],
    properties: {
      name: "Sciences",
    },
    elementId: "63",
  },
  end: {
    identity: 38,
    labels: ["Faculty"],
    properties: {
      web: "https://quimica.uniovi.es",
      name: "Faculty of Chemistry",
      foundation: 1848,
    },
    elementId: "38",
  },
  segments: [
    {
      start: {
        identity: 63,
        labels: ["Branch"],
        properties: {
          name: "Sciences",
        },
        elementId: "63",
      },
      relationship: {
        identity: 28,
        start: 80,
        end: 63,
        type: "TYPE",
        properties: {},
        elementId: "28",
        startNodeElementId: "80",
        endNodeElementId: "63",
      },
      end: {
        identity: 80,
        labels: ["Degree"],
        properties: {
          code: "GQUIMI01",
          credits: 240,
          name: "Degree in Chemistry.",
          students_first_year_2013: 95,
        },
        elementId: "80",
      },
    },
    {
      start: {
        identity: 80,
        labels: ["Degree"],
        properties: {
          code: "GQUIMI01",
          credits: 240,
          name: "Degree in Chemistry.",
          students_first_year_2013: 95,
        },
        elementId: "80",
      },
      relationship: {
        identity: 106,
        start: 38,
        end: 80,
        type: "TEACHES",
        properties: {},
        elementId: "106",
        startNodeElementId: "38",
        endNodeElementId: "80",
      },
      end: {
        identity: 38,
        labels: ["Faculty"],
        properties: {
          web: "https://quimica.uniovi.es",
          name: "Faculty of Chemistry",
          foundation: 1848,
        },
        elementId: "38",
      },
    },
  ],
  length: 2.0,
};

export const Defaults = () => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick,
    onNodePointerOver,
    onNodePointerOut,
  } = useSelection({
    ref: graphRef,
    nodes: simpleNodesColors,
    edges: simpleEdges,
    // type: "multi",
    // selections: [complexNodes[0].id, complexNodes[1].id],
    pathSelectionType: "all",
  });

  return (
    <GraphCanvas
      ref={graphRef}
      edgeArrowPosition="none"
      // theme={darkTheme}
      // edgeArrowPosition="mid"
      nodes={simpleNodesColors}
      edges={simpleEdges}
      layoutType="hierarchicalLr"
      draggable
      // cameraMode="rotate"
      // renderNode={({ node, ...rest }) => (
      //   <SphereWithIcon {...rest} node={node} image={node.icon || ""} />
      // )}
      actives={actives}
      selections={selections}
      onNodePointerOver={onNodePointerOver}
      onNodePointerOut={onNodePointerOut}
      onNodeClick={onNodeClick}
      onCanvasClick={onCanvasClick}
    />
  );
};

export const Dragging = () => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: "multi",
  });

  return (
    <GraphCanvas
      draggable
      ref={graphRef}
      nodes={complexNodes}
      edges={complexEdges}
      selections={selections}
      onNodeClick={onNodeClick}
      onCanvasClick={onCanvasClick}
    />
  );
};

export const ModifierKey = () => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    focusOnSelect: "singleOnly",
    type: "multiModifier",
  });

  return (
    <>
      <div
        style={{
          zIndex: 9,
          position: "absolute",
          top: 0,
          right: 0,
          background: "rgba(0, 0, 0, .5)",
          color: "white",
        }}
      >
        <h3 style={{ margin: 5 }}>
          Hold Command/CTRL and Click to Select Multiples
        </h3>
      </div>
      <GraphCanvas
        ref={graphRef}
        nodes={complexNodes}
        edges={complexEdges}
        selections={selections}
        onNodeClick={onNodeClick}
        onCanvasClick={onCanvasClick}
      />
    </>
  );
};

export const PathFinding = () => {
  const [from_, setFrom_] = React.useState(1);
  const [to_, setTo_] = React.useState(2);
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const { selections, actives, selectNodePaths, onNodeClick, onCanvasClick } =
    useSelection({
      ref: graphRef,
      nodes: complexNodes,
      edges: complexEdges,
      pathSelectionType: "direct",
      type: "multi",
    });

  const changePath = () => {
    const from = complexNodes[from_];
    const to = complexNodes[to_];
    console.log(from, to);
    selectNodePaths(from.id, to.id);
  };
  const changeFrom = (flag = false) => {
    if (flag) {
      setFrom_(from_ + 1);
    } else {
      setFrom_(from_ - 1);
    }
    changePath();
  };
  const changeTo = (flag = false) => {
    if (flag) {
      setTo_(to_ + 1);
      return;
    } else {
      setTo_(to_ - 1);
    }
    changePath();
  };
  return (
    <Fragment>
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
        <div>
          <button
            style={{ display: "block", width: "100%" }}
            onClick={() => changeFrom(true)}
          >
            from+{from_}
          </button>
          <button
            style={{ display: "block", width: "100%" }}
            onClick={() => changeFrom()}
          >
            from-{from_}
          </button>
        </div>

        <div>
          <button
            style={{ display: "block", width: "100%" }}
            onClick={() => changeTo(true)}
          >
            to+{to_}
          </button>
          <button
            style={{ display: "block", width: "100%" }}
            onClick={() => changeTo()}
          >
            to-{to_}
          </button>
        </div>
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
    </Fragment>
  );
};
