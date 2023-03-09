<!-- markdownlint-disable -->
<div align="center">
    <br />
    <h3>@p-0001/discord-rpc</h3>
    <br />
    <p>
        <a href="https://www.npmjs.com/package/@p-0001/discord-rpc" target="_blank"><img src="https://img.shields.io/npm/v/@p-0001/discord-rpc.svg" alt="npm version"/></a>
    </p>
</div>
<!-- markdownlint-enable -->

## About

`@p-0001/discord-rpc` is a fork of [xhayper/discord-rpc](https://github.com/xhayper/discord-rpc) but I removed ws and somes errors with the purpose of not crashing the app if discord isn't open.

## Example

```ts
import { Client } from "@xhayper/discord-rpc";

const client = new Client({
    clientId: "123456789012345678"
});

client.on("ready", () => {
    client.user?.setActivity({
        state: "Hello, world!"
    });
});

client.login();
```

## Compatibility

| OS      | Normal | snap | flatpak |
| ------- | ------ | ---- | ------- |
| Windows | Y      | -    | -       |
| macOS   | Y      | -    | -       |
| Linux   | Y      | Y    | Y       |

-   Linux is tested on Kubuntu 22.04
