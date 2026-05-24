# @scoova/webhooks-react-native

React Native build of `@scoova/webhooks`. Re-exports the standalone web
client — no native modules, ships source directly via the `react-native`
package field.

```sh
npm install @scoova/webhooks-react-native @scoova/webhooks
```

```ts
import {
  WebhooksClient,
  verifyWebhookSignature,
} from '@scoova/webhooks-react-native';

const webhooks = new WebhooksClient({ apiKey: 'sk_live_...' });
const all = await webhooks.list();
```

## Web Crypto on React Native

The core client uses `crypto.subtle` for the HMAC verifier. Modern RN runtimes
(Hermes on RN 0.74+, JSC on iOS 17+) expose it out of the box. On older
runtimes pass an explicit `SubtleCrypto` as the fourth argument to
`verifyWebhookSignature`, e.g. from
[react-native-quick-crypto](https://github.com/margelo/react-native-quick-crypto):

```ts
import { subtle } from 'react-native-quick-crypto';

const ok = await verifyWebhookSignature(raw, header, secret, subtle);
```

Signature verification is normally a server-side concern — you typically only
need the client surface (`list`/`create`/`delete`) on the device.

## License

Apache-2.0
