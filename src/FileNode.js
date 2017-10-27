const fs = require("fs")
const TreeProgram = require("treeprogram")

class FileNode extends TreeProgram.NonTerminalNode {
  compileToBash(parentDir) {
    const filePath = this.getAbsolutePath()
    return `touch ${filePath}
echo -e "${this.childrenToString()}" >> ${filePath}`
  }

  getAbsolutePath() {
    return process.cwd() + "/" + this.getWord(1)
  }

  execute() {
    const path = this.getAbsolutePath()
    console.log(`Creating file ${path}`)
    const data = this.getNode("data")
    const content = data ? data.childrenToString() : ""
    fs.writeFileSync(path, content, "utf8")
  }
}

module.exports = FileNode
