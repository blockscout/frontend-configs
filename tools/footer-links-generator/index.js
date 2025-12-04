import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const footerLinksDir = path.resolve(__dirname, '../../configs/footer-links')

// Find all .js files in the directory (excluding subdirectories)
function findJsFiles(dir) {
  const files = fs.readdirSync(dir)
  const jsFiles = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    // Only process files (not directories) that end with .js
    if (stat.isFile() && file.endsWith('.js')) {
      jsFiles.push(filePath)
    }
  }

  return jsFiles
}

// Convert a .js file to .json
async function convertJsToJson(jsFilePath) {
  try {
    // Convert to file:// URL for dynamic import
    const fileUrl = `file://${jsFilePath}`
    const module = await import(fileUrl)

    // Get the default export
    const data = module.default

    // Convert to JSON with pretty formatting
    const json = JSON.stringify(data, null, 2)

    // Generate output path (replace .js with .json)
    const jsonFilePath = jsFilePath.replace(/\.js$/, '.json')

    // Write the JSON file
    fs.writeFileSync(jsonFilePath, json)

    const relativePath = path.relative(footerLinksDir, jsonFilePath)
    console.log(
      `✓ Converted ${path.relative(
        footerLinksDir,
        jsFilePath
      )} → ${relativePath}`
    )
  } catch (error) {
    console.error(
      `✗ Error converting ${path.relative(footerLinksDir, jsFilePath)}:`,
      error.message
    )
  }
}

// Main execution
async function main() {
  const jsFiles = findJsFiles(footerLinksDir)

  if (jsFiles.length === 0) {
    console.log('No .js files found in configs/footer-links')
    return
  }

  console.log(`Found ${jsFiles.length} .js file(s) to convert:\n`)

  for (const jsFile of jsFiles) {
    await convertJsToJson(jsFile)
  }

  console.log(`\n✓ Conversion complete!`)
}

main().catch(console.error)
