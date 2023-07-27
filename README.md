# ESLint Config

## Configurations

We export four ESLint configurations for your usage:

1. [Default](#default-config)
2. [React](#react-config)

### Default Config

Install package with peer dependencies:

```sh
npx install-peerdeps --dev @heyllog/eslint-config \
  && npm install --save-dev eslint-config-airbnb-base
```

In your `.eslintrc`:

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "@heyllog/eslint-config"
  ]
}
```

> **NOTE:** Make sure to [specify your environment](#specifying-environments) based on your project

### React Config

React-specific rules with

- [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react)
- [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y)

```sh
npx install-peerdeps --dev @heyllog/eslint-config \
  && npm install --save-dev eslint-config-airbnb eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
```

**In your `.eslintrc`:**

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "@heyllog/eslint-config/react"
  ]
}
```

## Add prettier

Prettier is an opinionated code formatter.

Install dependencies:

```shell
npm i -D prettier eslint-config-prettier eslint-plugin-prettier
```

Add `.prettierrc.js` in root:

```js
module.exports = require('@heyllog/eslint-config/prettier')
```

To compare our prettier config with eslint config modify `.eslintrc`

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["prettier"],
  "extends": [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "@heyllog/eslint-config/react",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## Specifying Environments

The only environment we do specify by default is `es6`. [View all available environments](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments)

Therefore, you should specify your project's environment yourself in your ESLint config. For example:

```json
{
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "extends": [
    "airbnb-base",
    "airbnb-typescript/base",
    "@heyllog/eslint-config"
  ]
}
```

## Code examples

Default:

```typescript
function getZero(): number {
  return 0
}

const foregroundColor = 'transparent'
const font = 'Arial'
const myLink = { img: 'btn.gif' }

const foo = {
  numbers: ['one', 'two', 'three', 'four', 'five', 'six'],
  data: {
    a: {
      id: 123,
      type: 'String',
      isAvailable: true,
    },
    b: { id: 456, type: 'Int' },
  },
}

const toString = (value: number): string => value.toString()

class TestClass {
  public history: History
  protected value: boolean

  protected static isLong(amount: string, maxLength: number): boolean {
    const parts = amount.trim().replace(',', '.').split('.')

    return parts[1] ? parts[1].length > maxLength : false
  }
}

export default TestClass

```

React:

```typescript jsx
import React, { FC, useEffect, useState } from 'react'

import { getPopularCoins } from '@/clients/ChangeNowContentApiClient'
import { BasicCurrencyInfoToShow } from '@/clients/ChangeNowContentApiClient/types'
import Container from '@/components/ui/container'
import capitalize from '@/utils/capitalize'

const AssetsList: FC = () => {
  const [coins, setCoins] = useState<BasicCurrencyInfoToShow[]>([])

  useEffect(() => {
    getPopularCoins()
      .then(setCoins)
      .catch(() => setCoins([]))
  }, [])

  if (!coins.length) {
    return null
  }

  return (
    <Container element='section' className='flex items-center justify-between my-12'>
      <div className='flex mb-8 items-center overflow-x-scroll h-28'>
        {coins.map((coin) => (
          <div
            key={coin.icon}
            className='flex px-5 py-2 items-center min-w-[17rem] max-w-[17rem] rounded-2xl shadow-md ml-4'
          >
            <img width='35' height='35' className='max-w-screen-sm mr-3' src={coin.icon} alt={coin.name} />

            <div>
              <p className='mb-1'>{coin.ticker.toUpperCase()}</p>
              <p className='mb-1'>{capitalize(coin.name)}</p>
              <p className='mb-1'>$ {coin.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default AssetsList

```
