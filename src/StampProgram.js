const TreeProgram = require("treeprogram")

// todo: file permissions
// todo: diff/patch
// todo: compile to bash, js, go, et cetera
// todo: export folder to stamp file
// not meant to be used in browser.

class StampProgram extends TreeProgram {
  async executeSeries(context) {
    const length = this.length
    for (let index = 0; index < length; index++) {
      const node = this.nodeAt(index)
      await node.execute(context)
    }
    return context
  }

  async execute(context) {
    await this.executeSeries(context)
  }
}

module.exports = StampProgram
