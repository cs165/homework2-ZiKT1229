const MATCH_LIST = {
  'there': 'their',
  'their': 'there',
  'they\'re': 'there',
  'There': 'Their',
  'Their': 'There',
  'They\'re': 'There',
  'THERE': 'THEIR',
  'THEIR': 'THERE',
  'THEY\'RE': 'THERE'
};

function transformTextNodes(node) {
  // TODO(you): Implement this function! See HW spec for details.
  const children = node.childNodes;
  Array.from(children).forEach((child) => {
    if (child.nodeName === "SCRIPT" || child.nodeName === "STYLE") return;
    if (child.nodeType === Node.TEXT_NODE) {
      const text = child.textContent;
      const textArray = text.split(" ");
      const newTextArray = textArray.map((text) => {
        let returnValue = text;
        if (MATCH_LIST.hasOwnProperty(text)) returnValue = MATCH_LIST[text];
        return returnValue;
      });
      child.textContent = newTextArray.join(" ");
    } else {
      transformTextNodes(child);
    }
  });
}

transformTextNodes(document.body);

// Log statement to test that the extension loaded properly.
console.log('Evil extension loaded!');
