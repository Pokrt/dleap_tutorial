# Global Variables and Special Functions

## Available Global Variables

Here are the global variables that can be accessed within the sandbox:

### **element**

This is the root element of the sandbox. Sandboxed elements are restricted from accessing relational properties such
as `parentNode`, `firstSibling`, `nextSibling`, etc. However, DOM methods and string properties like `innerHTML` are
still usable. The style object is accessible and modifiable.

### **document**

This represents a sandboxed document object offering node creation and basic element searching capabilities. The
sandboxed document includes methods like `getElementById`, `createElement`, `createTextNode`, and `write`.

### Available DOM functions and constructors

The following standard JavaScript DOM functions or constructors, and their child functions when applicable, might be
called. They can be used only in call position. They cannot be accessed in any other way. They generally behave as the
standard JavaScript function, unless otherwise noted:
::: details List of functions and constructors

- `isNaN`
- `isFinite`
- `parseInt`
- `parseFloat`
- `escape`
- `unescape`
- `encodeURI`
- `encodeURIComponent`
- `decodeURI`
- `decodeURIComponent`
- `alert`
- `confirm`
- `prompt`
- `Date`
- `RegExp`
- `Error`
- `Number`
- `Math`
- `setTimeout` - This only accepts a function, not a string.
- `setInterval` - This only accepts a function, not a string.
- `clearTimeout`
- `clearInterval`
  :::

## Special functions

The following functions for DOM manipulation and extra language features are provided by the **Dojo library**. This
represents a safe subset of Dojo.

All Dojo library functions are provided as top-level functions. Namespacing is unnecessary because scripts do have
access to modify the global object and can't define global variables. Thus, you can call Dojo functions directly, for
example, `mixin(obj, mixinObj)`. You might also use the traditional syntax (`dojox.mixin(...)`).

::: details Available Functions:

- `mixin`
- `require`
- `isString`
- `isArray`
- `isFunction`
- `isObject`
- `isArrayLike`
- `isAlien`
- `hitch`
- `delegate`
- `partial`
- `trim`
- `connect`
- `disconnect`
- `subscribe`
- `unsubscribe`
- `Deferred`
- `toJson`
- `fromJson`
- `style`
- `attr`
- `query` - This only searches within the sandbox.
- `byId`
- `body` - This returns the root element of the sandbox

:::
