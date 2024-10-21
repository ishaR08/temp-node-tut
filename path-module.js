const path=require('path')

console.log(path.sep);
const filepath = path.join('/content','subfolder','text.txt')
// path.join() is used for concatenating paths and doesn't necessarily return an absolute path.
console.log(filepath);

const base = path.basename(filepath)
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
// path.resolve() will always return an absolute path by resolving relative segments from either the current working directory or an absolute path.
console.log(absolute);
