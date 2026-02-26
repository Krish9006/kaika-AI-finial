const fs = require('fs');
const path = require('path');

const replaceRules = [
    { regex: /\[#c2a373\]/g, replacement: 'secondary/80' },
    { regex: /\[#DCD6CC\]/g, replacement: 'border' },
    { regex: /\[#d3dbcf\]/g, replacement: 'green-200' },
    { regex: /\[#FEF2F2\]/g, replacement: 'red-50' },
    { regex: /\[#FECACA\]/g, replacement: 'red-200' },
    { regex: /\[#991B1B\]/g, replacement: 'red-800' }
];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            for (const rule of replaceRules) {
                content = content.replace(rule.regex, rule.replacement);
            }

            if (content !== original) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated: ${fullPath}`);
            }
        }
    }
}

// target src/app and src/components
processDirectory(path.join(__dirname, 'frontend/src'));
console.log("Done updating remaining colors.");
