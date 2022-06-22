import * as pkg from '../package.json';
import * as lock from '../package-lock.json';
for (const property in lock) {
    Object.getOwnPropertyDescriptor(lock, property);
}
pkg.main;
pkg.type;
export { pkg, lock, };
//# sourceMappingURL=jsonReferencer.js.map