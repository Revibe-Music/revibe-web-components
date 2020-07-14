### Input Syntax

Importing the button.
```js static
import Input from 'revibe-component-library/Input'

import { Input } from 'revibe-component-library'
```

### Input with Placeholders
```js
<Input placeholder="This is a placeholder!" />
```

### Input Prepend/Append with Text
```js padded
<Input prepend="Prepend!" />
<br/>
<Input append="Append!" />
<br/>
<Input prepend="Prepend!" placeholder="and..." append="Append!" />
```

### Input Prepend/Append with an Icon
```js
<Input prepend={<i className="fab fa-accessible-icon" />} placeholder="Use an icon as well!" />
```

### Input Field Size
```js padded
<Input size="sm" prepend="Small" />
<br/>
<Input prepend="Normal" />
<br/>
<Input size="lg" prepend="Large" />
```

### Input Function Changes
```js
import React from 'react';

var [text, setText] = React.useState("");

<>
  <Input placeholder="Type something!" onChange={e => setText(e.target.value)} />
  <p className="w-100 text-center mt-2 mb-0">{text}</p>
</>
```

### Input Examples
```js
import Button from "../Button";

<Input prepend={<i className="far fa-envelope" />} placeholder="Email" append={<Button>Submit</Button>} />
```