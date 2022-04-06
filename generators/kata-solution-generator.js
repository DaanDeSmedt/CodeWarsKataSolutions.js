const fs = require('fs')
const argv = require('yargs').argv
const fetch = require('node-fetch');
const removeMd = require('remove-markdown');
var sanitize = require("sanitize-filename");
const { exec } = require("child_process");


const generateSolutionTemplate = ({ name, url, description }) => {
    return `/*
    Title: ${name}

    Description:
    ${description}

    Link to Kata : ${url}
*/
`
}

const generate = async (id) => {
    fetchRawKata(id).then(data => {

        const dir = data.rank
        const filepath = `${dir}/${sanitize(data.name)}.js`

        console.log(`Writing Kata solution (${id}) file to ${filepath}`)

        fs.promises
            .mkdir(dir, { recursive: true })
            .then(() => {
                fs.promises.writeFile(`${filepath}`, generateSolutionTemplate({ ...data }), 'utf8')
            })
            .then(() => {
                exec(`code -r "${filepath}"`)
                console.log(`Kata solution created ${filepath}`)
            })
            .catch((error) => console.log(error))
    })
}


const fetchRawKata = async (id) => {
    
    const url = `https://www.codewars.com/api/v1/code-challenges/${id}`
    let kata;

    console.log(`Fetching Kata definition (${id}) from ${url} `)

    await fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            kata = data
        })
        .catch(err => {
            console.log(err);
        });

    return {
        id: kata.id,
        name: kata.name,
        url: kata.url,
        rank: kata.rank.name,
        description: removeMd(kata.description).split('\n').map((line, _) => line.padStart( (_ > 0) ? line.length + 4 : line.length)).join('\n')
    }
}

if (!argv.id) {
    console.log('Error - Missing Codewars Kata ID')
} else {
    generate(argv.id)
}