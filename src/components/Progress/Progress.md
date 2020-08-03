### Progress Bar Syntax

Importing the progress bar.
```js static
import Progress from 'revibe-component-library/Progress'

import { Progress } from 'revibe-component-library'
```

### Progress Simple Example
```js
<Progress value={25} />
```

### Progress Color Examples
```js
<Progress value={25} />
<Progress value={30} color="primary" label="Primary" />
<Progress value={35} color="secondary" label="Secondary" />
<Progress value={40} color="info" label="Info" />
<Progress value={45} color="success" label="Success" />
<Progress value={50} color="warning" label="Warning" />
<Progress value={55} color="danger" label="Danger" />
```

### Progress Max Examples
```js
<Progress value={25} max={75} color="primary" label="25/75" />
```

### Multi-Progress Bar
```js
<Progress multi max={100} values={[{ value: 10, color: "primary" }, { value: 35 }, { value: 15, color: "info", striped: true }]} />
```

### Striped Progress Bars
```js
<Progress value={30} color="primary" label="Primary" striped />
<Progress multi max={100} values={[{ value: 10, color: "primary", striped: true }, { value: 15, color: "info", striped: true }]} />
```