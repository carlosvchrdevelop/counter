#### PROPS & METHODS

| Prop name  |       Type       |   Default   |                              Description                               |
| :--------: | :--------------: | :---------: | :--------------------------------------------------------------------: |
| `centered` |    `boolean`     |   `false`   |          If true, center the component relative to its parent          |
|    `fn`    | `(number): void` | `undefined` | Allow you to use the current counter value through a callback function |
|   `gtz`    |    `boolean`     |   `false`   |              If true, only allow values greater than zero              |
|  `width`   |     `string`     |   `200px`   |                       The width of the component                       |

### Example of the default Counter

```tsx
<Counter />
```

---

### Example using callback function

#### Try to get to five

```tsx
import { useState } from "react";

const [msg, setMsg] = useState("");

<>
  <Counter
    fn={(counter) => {
      counter === 5 && setMsg("You've reached five");
    }}
  />
  <h2>{msg}</h2>
</>;
```

---

### Example of centered gtz Counter with 300px of width

#### Try to set a value less than zero, you won't be able to!

```tsx
<Counter width="300px" centered gtz />
```

---

### Example of full width Counter

```tsx
<Counter width="100%" />
```
