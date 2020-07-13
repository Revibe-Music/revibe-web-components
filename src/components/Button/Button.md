### Button Syntax

Importing the button.
```js static
import Button from 'revibe-component-library/Button'

import { Button } from 'revibe-component-library'
```

### Button Text Examples
```js padded
<Button />
<Button>🍕</Button>
```

### Button Color Examples
```js padded
<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>
<Button color="success">Success</Button>
<Button color="warning">Warning</Button>
<Button color="danger">Danger</Button>
<Button color="info">Info</Button>
```

### Button Size Examples
```js padded
<Button size="sm">Small</Button>
<Button>Normal</Button>
<Button size="lg">Large</Button>
```

### Button Active or Disabled
```js padded
<Button>Normal</Button>
<Button active>Active</Button>
<Button disabled>Disabled</Button>
```

### Button Runs Function
```js
<Button onClick={() => alert('Button pressed!')}>Click for Alert!</Button>
```