export function getHtmlToText(txt) {
  txt = txt.replace(/&lt;/gi, "<");
  txt = txt.replace(/&gt;/gi, ">");
  txt = txt.replace(/&nbsp;&nbsp;&nbsp;&nbsp;/gi, "\t");
  txt = txt.replace(/&nbsp;/gi, " ");
  txt = txt.replace(/<br>/gi, "\n");
  txt = txt.replace(/<br\/>/gi, "\n");
  txt = txt.replace(/(<([^>]+)>)/gi, "");
  return txt;
}
