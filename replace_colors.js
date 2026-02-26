const fs = require('fs');
const path = require('path');

const replaceRules = [
    { regex: /\[#2D1B2D\]/g, replacement: 'foreground' },
    { regex: /\[#F3EFE9\]/g, replacement: 'background' },
    { regex: /\[#4A2B4A\]/g, replacement: 'primary' },
    { regex: /\[#D4B483\]/g, replacement: 'secondary' },
    { regex: /\[#E5E0D8\]/g, replacement: 'border' },
    { regex: /\[#F9F7F4\]/g, replacement: 'surface-alt' },
    { regex: /bg-\[#E6DCCF\]/g, replacement: 'bg-surface-alt' },
    { regex: /from-\[#E6DCCF\]/g, replacement: 'from-surface-alt' }
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
console.log("Done updating colors.");
