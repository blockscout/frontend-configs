import fs from 'fs'
import path from 'path'

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function (err, filenames) {
    if (err) {
      onError(err)
      return
    }
    filenames.forEach(function (filename) {
      const filePath = path.resolve(dirname, filename)
      const stat = fs.statSync(filePath)

      // Skip directories - only process files
      if (!stat.isFile()) {
        return
      }

      fs.readFile(filePath, 'utf-8', function (err, content) {
        if (err) {
          onError(err)
          return
        }
        onFileContent(filename, content)
      })
    })
  })
}

export default readFiles
