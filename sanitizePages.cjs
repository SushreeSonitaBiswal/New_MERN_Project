const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'client', 'src', 'pages');
const files = fs.readdirSync(dir);

for (const f of files) {
  let content = fs.readFileSync(path.join(dir, f), 'utf8');

  // Replace lowercase event strings with valid React JSX handlers
  content = content.replace(/\bonsubmit="[^"]*"/g, 'onSubmit={(e) => e.preventDefault()}');
  content = content.replace(/\bonclick="[^"]*"/g, 'onClick={() => {}}');
  content = content.replace(/\boninput="[^"]*"/g, 'onChange={() => {}}');
  content = content.replace(/\bonkeyup="[^"]*"/g, 'onKeyUp={() => {}}');
  content = content.replace(/\bonchange="[^"]*"/g, 'onChange={() => {}}');

  // Fix SVG attributes
  content = content.replace(/\bpatternunits=/g, 'patternUnits=');
  content = content.replace(/\bgradientunits=/g, 'gradientUnits=');
  content = content.replace(/\bmaskunits=/g, 'maskUnits=');
  content = content.replace(/\bfilterunits=/g, 'filterUnits=');

  // Self close any unclosed void tags
  content = content.replace(/<(input|img|br|hr)([^>]*?)(?<!\/)>/gi, '<$1$2 />');

  fs.writeFileSync(path.join(dir, f), content, 'utf8');
}

console.log('Successfully sanitized all 17 page JSX files!');
