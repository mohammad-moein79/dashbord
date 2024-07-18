export function textPathEdit(text: string) {
  const copyText = text;
  copyText.substring(0, 2);
  copyText.replace("-", " ");

  if (copyText === "/") {
    return false;
  }
  return true;
}
