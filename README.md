# Large Password Thing

I thought the modal that pops up when you click "view with large text" in 1password was kinda neat, the way it colored numbers and special characters.
Also thought it would be neat to try and implement this myself as it didn't look like it would be too difficult.

Also took the opportunity to learn more about CSS animations, and turns out it's pretty trivial to get good looking animations in there with pretty low performance cost.

Each cell is a pure react component and return each cell component wrapped in the `React.memo()` HOC for memoization. Seems to actually make a difference in keeping things performant.

## How to run

This is a create-react-app so a pretty familiar procedure.

### Debug with Hot Reloading

```
yarn start
```

### Build a Production Version

```
yarn build
```

### Production Build with Profiling

```
yarn build --profile
```
