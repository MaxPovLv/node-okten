const fs = require('fs')
const path = require('path')

const sortFolder = (read, write, gender) => {
    fs.readdir(path.join(__dirname, read), (err, files) => {
        if (err) return console.log(err)

        files.forEach((file) => {
            const readFolderPath = path.join(__dirname, read, file)
            fs.readFile(readFolderPath, (err, data) => {
                if (err) return console.log(err)

                const user = JSON.parse(data.toString())
                if (user.gender === gender) {
                    fs.rename(readFolderPath, path.join(__dirname, write, file), (err) => {
                        if (err) return console.log(err)
                    })
                }
            })
        })
    })
}

sortFolder('boys','girls','male')
sortFolder('girls','boys','female')
