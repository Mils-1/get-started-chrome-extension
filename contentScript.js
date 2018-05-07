function walk(node) {
  // Credit for this function is here: http://is.gd/mwZp7E
  var child, next;
  console.log(`node.nodeType: `, node.nodeType);
  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;

    default:
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;
  // Here you can change the source and target texts
  v = v.replace(/\bKevin Durant\b/gi, '🐍');
  v = v.replace(/\bKD\b/g, '🐍');
  textNode.nodeValue = v;
}

walk(document.body);
