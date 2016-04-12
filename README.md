# meta-constants

brings clojure/midjes meta-constants (https://github.com/marick/Midje/wiki/Metaconstants) to
javascript

a meta-constant replaces this testing pattern:

 ```
 expect(identity(42)).toBe(42);
 ```
 
with

 ```
 expect(identity(_$_`a-number`)).toBe(_$_`a-number`);
 ```

Although this is longer, it makes clear that the value is only threaded through
the function under test and any (number) will do.

meta-constants only provide identity. If your function under test requires more than
that from a value, you need a `real` value

## Why tagged template literals?

The template functionality isn't used used?!

Answer:
- syntactical difference
- template functionality may become useful later... 


