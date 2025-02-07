# Adara Responsive UI

Responsive components for your interface 📦

## Installation

Install @adara-cs/responsive-ui with

**npm:**

```bash
  npm i @adara-cs/responsive-ui
```

**yarn:**

```bash
  yarn add @adara-cs/responsive-ui
```

## Start

Connect the styles first. You can do this using a js file, however, we recommend that you connect using ``@import`` and defining layers so that there are no conflicts with specificity.

```css
  @import url('@adara-cs/ui-kit-web/style') layer(library);
  @import url('@adara-cs/responsive-ui/style') layer(library);

  @layer reset, library, components, overrides;
```

Setup fonts

**Next:**

```typescript jsx
    import { Montserrat } from 'next/font/google';

    const montserratSans = Montserrat({
      subsets: ['latin', 'cyrillic'],
      display: 'swap',
      weight: ['400', '500', '700', '900']
    });
```

**Google Fonts:**

```html
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
```

Start using

```tsx
  import { ResponsiveSelect, ResponsiveSelectOption } from '@adara-cs/responsive-ui';

  ...

  <ResponsiveSelect>
    <ResponsiveSelectOption value='a'>A</ResponsiveSelectOption>
    <ResponsiveSelectOption value='b'>B</ResponsiveSelectOption>
  </ResponsiveSelect>
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

