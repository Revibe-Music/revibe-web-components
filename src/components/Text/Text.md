### Text Syntax

Importing the text component.
```js static
import Text from 'revibe-component-library/Text'

import { Text } from 'revibe-component-library'
```

### Using the Component
```js padded
<Text />
<br />
<Text>Here's some text!</Text>
```

### Headers
```js padded
<Text tag="h1">h1 Header</Text>
<br/>
<Text tag="h2">h2 Header</Text>
<br/>
<Text tag="h3">h3 Header</Text>
<br/>
<Text tag="h4">h4 Header</Text>
<br/>
<Text tag="h5">h5 Header</Text>
<br/>
<Text tag="h6">h6 Header</Text>
```

### Display Headers
```js padded
<Text tag="h1" display={1}>Display 1</Text>
<br/>
<Text tag="h1" display={2}>Display 2</Text>
<br/>
<Text tag="h1" display={3}>Display 3</Text>
<br/>
<Text tag="h1" display={4}>Display 4</Text>
```

### Mute and Lead
```js padded
<Text>Here's some regular text!</Text>
<br />
<Text muted>Here's some muted text!</Text>
<br />
<Text lead>Here's text that uses lead!</Text>
<br />
<Text muted lead>Here's text that is muted and uses lead!</Text>
```

### Inline
```js padded
<Text inline>Inline Text 1</Text>
<Text inline>Inline Text 2</Text>
```

### Colors
```js padded
<Text inline tag="h4" color="primary">Primary</Text>
<Text inline tag="h4" color="secondary">Secondary</Text>
<Text inline tag="h4" color="info">Info</Text>
<Text inline tag="h4" color="neutral">Neutral</Text>
<Text inline tag="h4" color="success">Success</Text>
<Text inline tag="h4" color="warning">Warning</Text>
<Text inline tag="h4" color="danger">Danger</Text>
```