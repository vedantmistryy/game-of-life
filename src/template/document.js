module.exports = ({
  title,
  bodyHTML,
  relativePath,
}) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Conway's Game of Life${title ? ` - ${title}` : ''}</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=5.0">
        <link rel="shortcut icon" href="${relativePath}${require('./favicon.gif').default}">
        <link rel="stylesheet" href="${relativePath}${require('./style.css').default}">
      </head>
      <body>
        ${bodyHTML}
      </body>
    </html>
  `;
};
