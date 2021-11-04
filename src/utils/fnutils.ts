const isDefined = x => x !== undefined;
const isUndefined = x => x === undefined;
const isNotUndefined = x => not(isUndefined(x));
const isNull = x => x === null;
const isNullOrUndefined = x => isNull(x) || isUndefined(x);
const isNotNull = x => x !== null;
const isNotNullOrUndefined = x => not(isNullOrUndefined(x));

const self = x => x;
const curry = <T> (v: T) => () => v;
const bind = <T extends Function> (f: T) => thisArg => f.bind(thisArg);
const partial1 = <T extends Function> (f: T) => a1 => args => f(a1, ...args);
const lazyApply1 = <T extends Function> (f: T) => a1 => f(a1);
const is = <T> (a: T) => b => a === b;
const isGreaterThan = (a: number) => (b: number) => b > a;
const isLessThan = (a: number) => (b: number) => b < a;
const isGreaterOrEqualTo = (a: number) => (b: number) => b >= a;
const isLessOrEqualTo = (a: number) => (b: number) => b <= a;
const not = (a: boolean) => !a;

type Consumer<T> =
	(x: T) => void;

type Predicate<T> =
	(x: T) => boolean;

type CoalesceMonadFound<T> =
	(prop: keyof T) => CoalesceMonadFound<T> & { valueOf: () => T };
type CoalesceMonadNotFound<T, K> =
	(orValue: K) => CoalesceMonadNotFound<T, K>;
type CoalesceMonad<T, K> =
	CoalesceMonadNotFound<T, T | K> & CoalesceMonadFound<T>;

const coalesce = <T, K> (obj: T, orValue: K): CoalesceMonad<T, K> =>
	(v => (v.valueOf = () => isDefined(obj) ? obj : orValue, v))
	((prop) => coalesce((obj || {})[prop], orValue)) as any;

type GivenMonad<T, K> =
	{ when: (condition: Predicate<T>, newValue: K) => GivenMonad<T, K>
	, otherwise: (elseValue: K) => Pick<GivenMonad<T, K>, 'valueOf'>
	, valueOf: () => K };

const givenMap = (
	{ [<any>true]: () => givenFound
	, [<any>false]: () => givenNotFound });
const givenFound = (x, newVal) => (
	{ when: () => givenFound(x, newVal)
	, otherwise: () => givenFound(x, newVal)
	, valueOf: curry(newVal) });
const givenNotFound = (x, newVal) => (
	{ when: (condition, newVal) => givenMap[condition(x)]()(x, newVal)
	, otherwise: val => givenNotFound(x, val)
	, valueOf: curry(newVal) });
const given = <T, K>(x: T): GivenMonad<T, K> => (
	{ when: (condition: Predicate<T>, newVal) =>
		givenMap[<any>condition(x)]()(x, newVal)
	, otherwise: curry
	, valueOf: curry(x) }) as any;

const ftor = x => ({ map: f => ftor(f(x)), valueOf: curry(x) });

const protoOf = x => given<any, () => Object>(x)
	.when(isNull, curry(null))
	.when(isUndefined, curry(undefined))
	.otherwise(() => Object.getPrototypeOf(x))
	.valueOf()();

const constructorOf = x => protoOf(x).constructor;
const annotationsOf = x => constructorOf(x)['__annotations__'];
const constructorNameOf = x => constructorOf(x).name;

export {
	curry, bind, partial1, lazyApply1, is, coalesce, not, given,
	protoOf, constructorOf, annotationsOf, self, Predicate, Consumer,
	isGreaterThan, isLessThan, isGreaterOrEqualTo, isLessOrEqualTo,
	isNull, isDefined, isUndefined, isNullOrUndefined, isNotNull,
	isNotNullOrUndefined, ftor, isNotUndefined, constructorNameOf };
