# Chess [![CI](https://github.com/DeltaZen/chess/actions/workflows/ci.yml/badge.svg)](https://github.com/DeltaZen/chess/actions/workflows/ci.yml) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

A WebXDC chess game for two human players and many observers.

<img width=200 src=https://user-images.githubusercontent.com/9800740/170771375-74f8b87d-e47d-4339-bbf3-3bdbfd5a7cd8.png>

## Contributing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Checking code format

```
pnpm check
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm start
# Alternatively to test in a more advanced WebXDC emulator:
pnpm emulator
```

### Building

To package the WebXDC file:

```
pnpm build
```

To package the WebXDC with developer tools inside to debug in Delta Chat, set the `NODE_ENV`
environment variable to "debug":

```
NODE_ENV=debug pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```

## Credits

The chess pieces images are from [Cburnett](https://en.wikipedia.org/wiki/User:Cburnett) licensed under the [CC-BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.en) license and can be downloaded from:
https://en.wikipedia.org/wiki/User:Cburnett/GFDL_images/Chess
