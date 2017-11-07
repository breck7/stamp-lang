const readline = require("readline")
const otree = require("otree")

class PromptNode extends otree.TerminalNode {
  execute() {
    return new Promise((res, rej) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      })

      rl.question(this.getWords(3).join(" ") + " ", answer => {
        rl.close()
        // todo: typecheck the response
        const varName = this.getWord(1)
        this.getYoungerSiblings().forEach(node =>
          node.replaceNode(str => str.replace(new RegExp(varName, "g"), answer))
        )
        res()
      })
    })
  }
}

module.exports = PromptNode
