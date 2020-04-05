const document = require('./document');

module.exports = (params) => {
  const entry = params.entry;
  const title = require(`../life/${entry}`).title;
  return document({
    title,
    bodyHTML: `<h1>${title}</h1>`,
    relativePath: '../'.repeat(entry.match(new RegExp('/', 'g')).length)
  });
};
