## 4.0.1 (2026-09-25)

### 🩹 Fixes

- **payments:** align runtime behavior with the 4.x typings ([bd47a8c](https://github.com/NativeScript/payments/commit/bd47a8c))

### ❤️ Thank You

- Nathan Walker

# 4.0.0 (2026-09-24)

### 🚀 Features

- **payments:** StoreKit v2 + Google Billing v8 ([#44](https://github.com/NativeScript/payments/pull/44))

### ❤️ Thank You

- Nathan Walker

## 3.1.0 (2025-08-18)

### 🚀 Features

- **payments:** google play billing 8.0 ([#42](https://github.com/NativeScript/payments/pull/42))

### ⚠️ Breaking Changes

`finalizeOrder` takes a 2nd argument now.

**before**:

```
finalizeOrder(order: Order);
```

**after**:

```
finalizeOrder(order: Order, consume: boolean)
```

### ❤️ Thank You

- Eduardo Speroni @edusperoni
