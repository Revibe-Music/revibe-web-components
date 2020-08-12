### Info Area Syntax

Importing the info area.
```js static
import { InfoArea } from 'revibe-component-library'
```

### Simple Examples
```js
import Button from '../Button';

<>
  <InfoArea
    title="Social Conversations"
    description="Gain access to the demographics, psychographics, and location of unique people."
    icon={<i className="tim-icons icon-user-run" />}
    iconColor="primary"
    color="primary"
  />
  <br /><br />
  <InfoArea
    title="For Developers"
    description="The moment you use Black Kit, you know you’ve never felt anything like it. With a single use, this powerfull UI Kit lets you do more than ever before."
    icon={<i className="tim-icons icon-html5" />}
    iconColor="success"
    color="success"
    hover={false}
    append={<Button link color="success">Explore now <i className="tim-icons icon-minimal-right" /></Button>}
  />
</>
```