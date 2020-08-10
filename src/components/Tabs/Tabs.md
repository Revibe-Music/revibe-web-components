### Tabs Syntax

Importing the tabs.
```js static
import Tabs from 'revibe-component-library/Tabs'

import { Tabs } from 'revibe-component-library'
```

### Tabs Example
```js
<Tabs />
```

### Tabs Pills Color Examples
```js
<Tabs pills />
<br /><br />
<Tabs pills pillColor="info" />
```

### Vertical Tabs Example
```js
<Tabs vertical />
```

### Horizontal Tabs & Text Placement Examples
```js
<Tabs />
<br /><br />
<Tabs tabPlacement="center" textPlacement="center"  />
<br /><br />
<Tabs tabPlacement="end" textPlacement="right" />
```

### Tabs Large Example
```js
import Text from '../Text';

<Tabs
  pills
  tabPlacement="center"
  textPlacement="center"
  labels={[ "Hosting", "Analytics", "Relink" ]}
  content={[
    <Text muted lead>Upload unlimited tracks to be streamed on Revibe Music for free. Give credit to everyone who contributed and reach new fans through our proprietary tagging mechanism. Let your fans stream your free music and distributed tracks through one app, only on Revibe Music.</Text>,
    <Text muted lead>View integrated analytics to get a wholistic view of your music career. Revibe is the only platform that can combine data from your streams, link clicks, merchandise and collaboration sales, and marketing efforts.</Text>,
    <Text muted lead>Customize your own landing page with unlimited links. These links can be dispalyed on your Revibe Artist Profile, or at a custom URL you can share anywhere, like your Instagram bio!</Text>
  ]}
/>
```