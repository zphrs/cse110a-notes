export type Tree = {
  text: string
  slug: string
  depth: number
  blurb: string
  children: Tree[]
}

export function headersToTree(
  headings: { text: string; slug: string; depth: number }[],
  title: string,
  blurbs: string[]
): Tree {
  const stack: Tree[] = [
    {
      text: title,
      slug: "",
      depth: 0,
      blurb: "",
      children: [],
    },
  ]
  const top = () => stack[stack.length - 1]
  for (let i = 0; i < headings.length; i++) {
    const node = {
      ...headings[i],
      blurb: blurbs[i],
      children: [],
    }
    if (node.depth > top().depth) {
      top().children.push(node)
      stack.push(node)
    } else if (node.depth - 1 === top().depth) {
      top().children.push(node)
    } else {
      while (node.depth - 1 < top().depth && stack.length) {
        stack.pop()
      }
      top().children.push(node)
      stack.push(node)
    }
  }
  return stack[0]
}
