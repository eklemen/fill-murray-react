## Fill Murray React Component

**Quick filler images featuring none other than Bill Murray.**


### Example:
```sh
npm install --save fill-murray-react
# or
yarn add fill-murray-react
```
```jsx
import FillMurray from 'fill-murray'

class App extends Component {
    render() {
      return (
        <div>
            <FillMurray
              w={400}
              h={200}
            />
        </div>
      );
    }
}
```

| Prop  | Default  | Definition  | 
|:-:|:-:|:-:|
| `w`  | `300`  | Width |
| `h`  | `300`  | Height |
| `grayscale` | `false` | Uses grayscale image  |

All props are optional. You can pass any aditional props, they simply get applied to component.

Credit to http://www.fillmurray.com/ for hosting the images.