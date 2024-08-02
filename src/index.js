import grapesjs from "grapesjs";

export default grapesjs.plugins.add("gjs-blocks-basic", (editor, opts = {}) => {
  const config = {
    blocks: ["column1", "column2", "column3", "column3-7", "column7-3"],
    flexGrid: 0,
    stylePrefix: "gjs-",
    addBasicStyle: true,
    category: "Basic",
    labelColumn1: "1 Column",
    labelColumn2: "2 Columns",
    labelColumn3: "3 Columns",
    labelColumn4: "4 Columns",
    labelColumn5: "5 Columns",
    labelColumn6: "6 Columns",
    labelColumn37: "2 Columns 3/7",
    labelColumn73: "2 Columns 7/3",
    ...opts,
  };

  // Add blocks
  const loadBlocks = require("./blocks");
  loadBlocks.default(editor, config);
});
