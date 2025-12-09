> [!WARNING]
    > Archived on GitHub and moved to https://git.sr.ht/~gary_moore/large-password-thing

    # Large Password Thing

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=alert_status)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=code_smells)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=bugs)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=doggodoge_large-password-thing&metric=sqale_index)](https://sonarcloud.io/dashboard?id=doggodoge_large-password-thing)

![image](https://user-images.githubusercontent.com/8438991/136312523-0f21271a-ca51-4613-8dfb-e359d7297308.png)

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
