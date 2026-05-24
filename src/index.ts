/**
 * @scoova/webhooks-react-native
 *
 * Thin re-export of `@scoova/webhooks`. The core client is platform-neutral —
 * it uses `fetch` (built into React Native) and `crypto.subtle` for HMAC.
 *
 * RN runtimes that ship Web Crypto (Hermes 0.74+ / JSC on iOS 17+ / RN 0.74+
 * via react-native-quick-crypto-shim, etc.) get `verifyWebhookSignature` for
 * free. For older RN you can pass an explicit `SubtleCrypto` as the fourth
 * argument — e.g. from react-native-quick-crypto.
 */
export * from '@scoova/webhooks';
export {
  WebhooksClient,
  ScoovaWebhooksError,
  verifyWebhookSignature,
  DEFAULT_BASE_URL,
} from '@scoova/webhooks';
export type {
  Webhook,
  WebhookCreated,
  WebhookCreateInput,
  WebhookEvent,
  WebhooksClientOptions,
} from '@scoova/webhooks';
