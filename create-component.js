import fs from 'node:fs'

/* для запуска прописать в консоли " node create-component.js "
  и добавить скрипт для быстрого запуска "create-component": "node create-component.js" */

export default function createComponent(name) {
  /* путь - где будет создан файл */
  const dirPath = `./src/components/${name}`

  const componentPath = `${dirPath}/${name}.tsx`
  const componentContent = `import React from 'react'`

  const stylesPath = `${dirPath}/${name}.module.scss`
  const stylesContent = `stylesContent`

  const storybookPath = `${dirPath}/${name}.stories.tsx`
  const storybookContent = `storybookContent`

  const indexPath = `${dirPath}/index.js`
  const indexContent = `export * from './${name}.tsx'`

  /* создание несуществующей папки */
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  fs.writeFileSync(componentPath, componentContent)
  fs.writeFileSync(stylesPath, stylesContent)
  fs.writeFileSync(storybookPath, storybookContent)
  fs.writeFileSync(indexPath, indexContent)
}

createComponent('card')
