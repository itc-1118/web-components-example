export const renderTemplate = (template, data) => {
  const regex = /\{\{(.+?)\}\}/g;
  return template.replace(regex, (match, expression) => {
    return eval(`data.${expression}`);
  });
};
