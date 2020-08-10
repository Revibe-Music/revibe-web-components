### Tooltip Syntax

Importing the tooltip.
```js static
import ToolTip from 'revibe-component-library/ToolTip'

import { ToolTip } from 'revibe-component-library'
```

### Tooltip examples
```js padded
import Button from "../Button";

<>
  <Button id="top" simple>Top</Button>
  <ToolTip target="top" label="Tooltip on Top" />
  <Button id="bottom" simple>Bottom</Button>
  <ToolTip placement="bottom" target="bottom" label="Tooltip on Bottom" />
  <Button id="left" simple>Left</Button>
  <ToolTip placement="left" target="left" label="Tooltip on Left" />
  <Button id="right" simple>Right</Button>
  <ToolTip placement="right" target="right" label="Tooltip on Right" />
</>
```