### Dropdown Syntax

Importing the dropdown.
```js static
import Dropdown from 'revibe-component-library/Text'

import { Dropdown } from 'revibe-component-library'
```

### Dropdown Example
```js padded
<Dropdown inline />
<Dropdown inline caret />
<Dropdown inline caret label="Different Label" />
```

### Dropdown Option Examples
```js padded
<Dropdown
  label="Examples"
  caret
  options={[
    { header: true, label: "Header" },
    { divider: true },
    { disabled: true, label: "Select One" },
    { label: "Revibe", href: "https://revibe.tech", target: "_blank" },
    { label: "Console Log", onClick: () => console.log("clicked!") }
  ]}
/>
```

### Dropdown Colors
```js padded
<Dropdown inline caret label="None" />
<Dropdown inline caret color="primary" label="Primary" />
<Dropdown inline caret color="secondary" label="Secondary" />
<Dropdown inline caret color="info" label="Info" />
<Dropdown inline caret color="success" label="Success" />
<Dropdown inline caret color="warning" label="Warning" />
<Dropdown inline caret color="danger" label="Danger" />
```

### Dropdown Directions
```js padded
<Dropdown caret label="Down" />
<Dropdown caret label="Up" direction="up" />
```