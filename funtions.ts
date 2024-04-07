import { Options } from "./quartz/components/ExplorerNode"
export const mapFn: Options["mapFn"] = (node) => {
  // implement your function here
    // dont change name of root node
    if (node.depth > 0) {
        // set emoji for file/folder
        if (node.file) {
            node.displayName = "📄 " + node.displayName
        } else {
            node.displayName = "📁 " + node.displayName
        }
    }
}
export const filterFn: Options["filterFn"] = (node) => {
  // implement your function here
}
export const sortFn: Options["sortFn"] = (a, b) => {
  // implement your function here
}