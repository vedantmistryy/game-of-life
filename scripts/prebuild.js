const fs = require('fs-extra');
const path = require('path');
const { readDirectory } = require('./memfs');

const readPatterns = (directories) => {
  return directories.reduce((arr, obj) => {
    if (Array.isArray(obj.children)) {
      readPatterns(obj.children).forEach((v) => arr.push(v));
    } else {
      arr.push({
        name: `_${obj.name.replace(/\-/g, '_').replace('.json', '')}`,
        path: obj.path.replace(/\\/g, '/').replace('src', '.'),
      });
    }
    return arr;
  }, []);
};

const patterns = readPatterns(readDirectory(path.join('src', 'patterns')));

fs.writeFileSync(
  path.join('src', 'patterns.ts'),
  `${patterns.map(({ name, path }) => `import ${name} from '${path}';`).join('\n')}

export default [
${patterns.map(({ name }) => `  ${name}`).join(',\n')}
];
`
);
