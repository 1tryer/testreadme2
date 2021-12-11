exports.modules = {
    name: '{({ name })}',
    github: {
        repoName: '{({ github.repoName })}',
        name: '{({ github.name})}'
    },
    assets: [
        'src/package.json',
        'README*',
        'LICENSE*'
    ],
    cdns: [
        {
            name: 'jsdelivr',
            href: 'https://www.jsdelivr.com/package/npm/#error#'
        },
        {
            name: 'unpkg',
            href: 'https://unpkg.com/#error#'
        }
    ],
    badges: [
        {
            alt: 'CI status',
            href: 'https://circleci.com/gh/#error#/workflows/#error#/tree/main',
            src: 'https://img.shields.io/circleci/build/github/#error#/[object Object]/main.svg?logo=circleci&logoColor=fff&label=CircleCI'
        },
        {
            alt: 'npm',
            href: 'https://www.npmjs.com/#error#',
            src: 'https://img.shields.io/npm/v/#error#.svg?logo=npm&logoColor=fff&label=NPM&color=limegreen'
        },
        {
            alt: 'license',
            href: 'https://circleci.com/gh/#error#/workflows/#error#/tree/main',
            src: 'https://img.shields.io/github/license/#error#/[object Object]'
        }
    ]
}