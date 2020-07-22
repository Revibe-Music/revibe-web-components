### Input Syntax

Importing the button.
```js static
import TextInput from 'revibe-component-library/Input'

import { TextInput } from 'revibe-component-library'
```

### Input with Placeholders
```js
<TextInput placeholder="This is a placeholder!" />
```

### Input Prepend/Append with Text
```js padded
<TextInput prepend="Prepend!" />
<br/>
<TextInput append="Append!" />
<br/>
<TextInput prepend="Prepend!" placeholder="and..." append="Append!" />
```

### Input Prepend/Append with an Icon
```js
<TextInput prepend={<i className="fab fa-accessible-icon" />} placeholder="Use an icon as well!" />
```

### Input Field Size
```js padded
<TextInput size="sm" prepend="Small" />
<br/>
<TextInput prepend="Normal" />
<br/>
<TextInput size="lg" prepend="Large" />
```

### Input Function Changes
```js
import React from 'react';

var [text, setText] = React.useState("");

<>
  <TextInput placeholder="Type something!" onChange={e => setText(e.target.value)} />
  <p className="w-100 text-center mt-2 mb-0">{text}</p>
</>
```

### Input Examples
```js
import Button from "../Button";

<TextInput prepend={<i className="far fa-envelope" />} placeholder="Email" append={<Button>Submit</Button>} />
```

### Form Inputs
```js
<TextInput form />
<TextInput form formLabel="Email Address" />
```