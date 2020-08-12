### Card Syntax

Importing the card.
```js static
import { Card } from 'revibe-component-library'
```

### Example Cards
```js padded
<Card>Simple Card</Card>
<br />
<Card
  header={"Simple header"}
  footer={"Simple footer"}
>Simple Card</Card>
```

### Colored Cards
```js padded
<Card>None/Secondary</Card>
<Card color="primary">Primary</Card>
<Card color="info">Info</Card>
<Card color="warning">Warning</Card>
<Card color="success">Success</Card>
<Card color="danger">Danger</Card>
```

### Complex Example Card
```js
import Text from '../Text';

<Card
  color="info"
  header={
    <Text tag="h1">Example Card</Text>
  }
  footer={
    <Text muted lead className="ml-3">Sample Footer Text</Text>
  }
>
  <Text lead>How cool is this? A card?</Text>
</Card>
```