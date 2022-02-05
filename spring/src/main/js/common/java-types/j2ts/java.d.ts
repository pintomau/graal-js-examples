/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT DEFINITIONS
 *
 */

type int    = number;
type long   = number;
type float	= number;
type double = number;
type byte   = number;
type char   = string;

type chararray = [byte];
type bytearray = [char];

declare namespace java.lang {

	interface Class<T> {}
	interface AutoCloseable {}
	interface Cloneable {}

	type Object = any;
}

declare namespace java.util {

	interface RandomAccess {}
}

declare namespace java.io {

	interface Closeable {}
	interface Serializable {}
}

//
// Nashorn compatibility
//

declare function print( ...args: any[] ):void

declare function load( module:string ):void

declare namespace Java {

  export function type<T>( t:string):T;

  export function from<T>( list:java.util.List<T> ):Array<T> ;
  
}

//
// Generated declarations
//

declare namespace java.lang {

class String/* extends Object implements java.io.Serializable, Comparable<any>, CharSequence, java.lang.constant.Constable, java.lang.constant.ConstantDesc*/ {

	charAt( arg0:int ):any /*char*/;
	chars(  ):any /*java.util.stream.IntStream*/;
	codePointAt( arg0:int ):int;
	codePointBefore( arg0:int ):int;
	codePointCount( arg0:int, arg1:int ):int;
	codePoints(  ):any /*java.util.stream.IntStream*/;
	compareTo( arg0:string ):int;
	compareToIgnoreCase( arg0:string ):int;
	concat( arg0:string ):string;
	contains( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.CharSequence*/ ):boolean;
	contentEquals( arg0:any /*java.lang.StringBuffer*/ ):boolean;
	describeConstable(  ):java.util.Optional<string>;
	endsWith( arg0:string ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	equalsIgnoreCase( arg0:string ):boolean;
	formatted( ...arg0:any /*java.lang.Object*/[] ):string;
	getBytes(  ):bytearray;
	getBytes( arg0:any /*java.nio.charset.Charset*/ ):bytearray;
	getBytes( arg0:int, arg1:int, arg2:bytearray, arg3:int ):void;
	getBytes( arg0:string ):bytearray;
	getChars( arg0:int, arg1:int, arg2:chararray, arg3:int ):void;
	indent( arg0:int ):string;
	indexOf( arg0:int ):int;
	indexOf( arg0:int, arg1:int ):int;
	indexOf( arg0:string ):int;
	indexOf( arg0:string, arg1:int ):int;
	intern(  ):string;
	isBlank(  ):boolean;
	isEmpty(  ):boolean;
	lastIndexOf( arg0:int ):int;
	lastIndexOf( arg0:int, arg1:int ):int;
	lastIndexOf( arg0:string ):int;
	lastIndexOf( arg0:string, arg1:int ):int;
	length(  ):int;
	lines(  ):java.util.stream.Stream<string>;
	matches( arg0:string ):boolean;
	offsetByCodePoints( arg0:int, arg1:int ):int;
	regionMatches( arg0:boolean, arg1:int, arg2:string, arg3:int, arg4:int ):boolean;
	regionMatches( arg0:int, arg1:string, arg2:int, arg3:int ):boolean;
	repeat( arg0:int ):string;
	replace( arg0:any /*char*/, arg1:any /*char*/ ):string;
	replace( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/ ):string;
	replaceAll( arg0:string, arg1:string ):string;
	replaceFirst( arg0:string, arg1:string ):string;
	resolveConstantDesc( arg0:any /*java.lang.invoke.MethodHandles$Lookup*/ ):string;
	split( arg0:string ):[string];
	split( arg0:string, arg1:int ):[string];
	startsWith( arg0:string ):boolean;
	startsWith( arg0:string, arg1:int ):boolean;
	strip(  ):string;
	stripIndent(  ):string;
	stripLeading(  ):string;
	stripTrailing(  ):string;
	subSequence( arg0:int, arg1:int ):any /*java.lang.CharSequence*/;
	substring( arg0:int ):string;
	substring( arg0:int, arg1:int ):string;
	toCharArray(  ):chararray;
	toLowerCase(  ):string;
	toLowerCase( arg0:any /*java.util.Locale*/ ):string;
	toString(  ):string;
	toUpperCase(  ):string;
	toUpperCase( arg0:any /*java.util.Locale*/ ):string;
	transform<R>( arg0:Func<string, R> ):R;
	translateEscapes(  ):string;
	trim(  ):string;

} // end String

} // end namespace java.lang
declare namespace java.lang {

interface Comparable<T> {

	compareTo( arg0:T ):int;

} // end Comparable

} // end namespace java.lang
declare namespace java.lang {

interface Iterable<T> {

	(  ):java.util.Iterator<T>;
	forEach?( arg0:Consumer<T> ):void;
	spliterator?(  ):any /*java.util.Spliterator*/;

} // end Iterable

} // end namespace java.lang
declare namespace java.lang {

interface Runnable {

	(  ):void;

} // end Runnable

} // end namespace java.lang
declare namespace java.util {

class Collections/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collections

} // end namespace java.util
declare namespace java.util {

class Optional<T>/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	filter( arg0:Predicate<T> ):Optional<T>;
	flatMap<U>( arg0:Func<T, Optional<U>> ):Optional<U>;
	get(  ):T;
	ifPresent( arg0:Consumer<T> ):void;
	ifPresentOrElse( arg0:Consumer<T>, arg1:java.lang.Runnable ):void;
	isEmpty(  ):boolean;
	isPresent(  ):boolean;
	map<U>( arg0:Func<T, U> ):Optional<U>;
	or( arg0:Supplier<Optional<T>> ):Optional<T>;
	orElse( arg0:T ):T;
	orElseGet( arg0:Supplier<T> ):T;
	orElseThrow(  ):T;
	orElseThrow<X>( arg0:Supplier<X> ):T;
	stream(  ):java.util.stream.Stream<T>;
	toString(  ):string;

} // end Optional

} // end namespace java.util
declare namespace java.util {

interface Collection<E>/* extends java.lang.Iterable<E>*/ {

	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end Collection

} // end namespace java.util
declare namespace java.util {

interface Iterator<E> {

	forEachRemaining( arg0:Consumer<E> ):void;
	hasNext(  ):boolean;
	next(  ):E;
	remove(  ):void;

} // end Iterator

} // end namespace java.util
declare namespace java.util {

interface List<E>/* extends Collection<E>*/ {

	// static copyOf<E>( arg0:Collection<E> ):List<E>;
	// static of<E>(  ):List<E>;
	// static of<E>( ...arg0:E[] ):List<E>;
	// static of<E>( arg0:E ):List<E>;
	// static of<E>( arg0:E, arg1:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):List<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):List<E>;
	add( arg0:E ):boolean;
	add( arg0:int, arg1:E ):void;
	addAll( arg0:Collection<E> ):boolean;
	addAll( arg0:int, arg1:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	get( arg0:int ):E;
	indexOf( arg0:any /*java.lang.Object*/ ):int;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	lastIndexOf( arg0:any /*java.lang.Object*/ ):int;
	listIterator(  ):any /*java.util.ListIterator*/;
	listIterator( arg0:int ):any /*java.util.ListIterator*/;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	remove( arg0:int ):E;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	replaceAll( arg0:UnaryOperator<E> ):void;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	set( arg0:int, arg1:E ):E;
	size(  ):int;
	sort( arg0:any /*java.util.Comparator*/ ):void;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	subList( arg0:int, arg1:int ):List<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end List

} // end namespace java.util
declare namespace java.util {

interface Map<K, V> {

	// static copyOf<K,V>( arg0:Map<K, V> ):Map<K, V>;
	// static entry<K,V>( arg0:K, arg1:V ):any /*java.util.Map$Entry*/;
	// static of<K,V>(  ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V ):Map<K, V>;
	// static of<K,V>( arg0:K, arg1:V, arg2:K, arg3:V, arg4:K, arg5:V, arg6:K, arg7:V, arg8:K, arg9:V, arg10:K, arg11:V, arg12:K, arg13:V, arg14:K, arg15:V, arg16:K, arg17:V, arg18:K, arg19:V ):Map<K, V>;
	// static ofEntries<K,V>( ...arg0:any /*java.util.Map$Entry*/[] ):Map<K, V>;
	clear(  ):void;
	compute( arg0:K, arg1:BiFunction<K, V, V> ):V;
	computeIfAbsent( arg0:K, arg1:Func<K, V> ):V;
	computeIfPresent( arg0:K, arg1:BiFunction<K, V, V> ):V;
	containsKey( arg0:any /*java.lang.Object*/ ):boolean;
	containsValue( arg0:any /*java.lang.Object*/ ):boolean;
	entrySet(  ):Set<any /*java.util.Map$Entry*/>;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach( arg0:BiConsumer<K, V> ):void;
	get( arg0:any /*java.lang.Object*/ ):V;
	getOrDefault( arg0:any /*java.lang.Object*/, arg1:V ):V;
	isEmpty(  ):boolean;
	keySet(  ):Set<K>;
	merge( arg0:K, arg1:V, arg2:BiFunction<V, V, V> ):V;
	put( arg0:K, arg1:V ):V;
	putAll( arg0:Map<K, V> ):void;
	putIfAbsent( arg0:K, arg1:V ):V;
	remove( arg0:any /*java.lang.Object*/ ):V;
	remove( arg0:any /*java.lang.Object*/, arg1:any /*java.lang.Object*/ ):boolean;
	replace( arg0:K, arg1:V ):V;
	replace( arg0:K, arg1:V, arg2:V ):boolean;
	replaceAll( arg0:BiFunction<K, V, V> ):void;
	size(  ):int;
	values(  ):Collection<V>;

} // end Map

} // end namespace java.util
declare namespace java.util {

interface Set<E>/* extends Collection<E>*/ {

	// static copyOf<E>( arg0:Collection<E> ):Set<E>;
	// static of<E>(  ):Set<E>;
	// static of<E>( ...arg0:E[] ):Set<E>;
	// static of<E>( arg0:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E ):Set<E>;
	// static of<E>( arg0:E, arg1:E, arg2:E, arg3:E, arg4:E, arg5:E, arg6:E, arg7:E, arg8:E, arg9:E ):Set<E>;
	add( arg0:E ):boolean;
	addAll( arg0:Collection<E> ):boolean;
	clear(  ):void;
	contains( arg0:any /*java.lang.Object*/ ):boolean;
	containsAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	equals( arg0:any /*java.lang.Object*/ ):boolean;
	forEach<T>( arg0:Consumer<T> ):void;
	isEmpty(  ):boolean;
	iterator(  ):Iterator<E>;
	parallelStream(  ):java.util.stream.Stream<E>;
	remove( arg0:any /*java.lang.Object*/ ):boolean;
	removeAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	removeIf( arg0:Predicate<E> ):boolean;
	retainAll( arg0:Collection<any /*java.lang.Object*/> ):boolean;
	size(  ):int;
	spliterator(  ):any /*java.util.Spliterator*/;
	stream(  ):java.util.stream.Stream<E>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<T>( arg0:[T] ):[T];
	toArray<T>( arg0:any /*java.util.function.IntFunction*/ ):[T];

} // end Set

} // end namespace java.util
declare namespace java.util.stream {

class Collectors/* extends java.lang.Object*/ {

	equals( arg0:any /*java.lang.Object*/ ):boolean;
	toString(  ):string;

} // end Collectors

} // end namespace java.util.stream
declare namespace java.util.stream {

interface Stream<T>/* extends BaseStream<T, any>*/ {

	allMatch( arg0:Predicate<T> ):boolean;
	anyMatch( arg0:Predicate<T> ):boolean;
	close(  ):void;
	collect<R>( arg0:Supplier<R>, arg1:BiConsumer<R, T>, arg2:BiConsumer<R, R> ):R;
	collect<R>( arg0:any /*java.util.stream.Collector*/ ):R;
	count(  ):long;
	distinct(  ):Stream<T>;
	dropWhile( arg0:Predicate<T> ):Stream<T>;
	filter( arg0:Predicate<T> ):Stream<T>;
	findAny(  ):java.util.Optional<T>;
	findFirst(  ):java.util.Optional<T>;
	flatMap<R>( arg0:Func<T, Stream<R>> ):Stream<R>;
	flatMapToDouble( arg0:Func<T, any /*java.util.stream.DoubleStream*/> ):any /*java.util.stream.DoubleStream*/;
	flatMapToInt( arg0:Func<T, any /*java.util.stream.IntStream*/> ):any /*java.util.stream.IntStream*/;
	flatMapToLong( arg0:Func<T, any /*java.util.stream.LongStream*/> ):any /*java.util.stream.LongStream*/;
	forEach( arg0:Consumer<T> ):void;
	forEachOrdered( arg0:Consumer<T> ):void;
	isParallel(  ):boolean;
	iterator(  ):java.util.Iterator<T>;
	limit( arg0:long ):Stream<T>;
	map<R>( arg0:Func<T, R> ):Stream<R>;
	mapMulti<R>( arg0:BiConsumer<T, Consumer<R>> ):Stream<R>;
	mapMultiToDouble( arg0:BiConsumer<T, any /*java.util.function.DoubleConsumer*/> ):any /*java.util.stream.DoubleStream*/;
	mapMultiToInt( arg0:BiConsumer<T, any /*java.util.function.IntConsumer*/> ):any /*java.util.stream.IntStream*/;
	mapMultiToLong( arg0:BiConsumer<T, any /*java.util.function.LongConsumer*/> ):any /*java.util.stream.LongStream*/;
	mapToDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.DoubleStream*/;
	mapToInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.IntStream*/;
	mapToLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.LongStream*/;
	max( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	min( arg0:any /*java.util.Comparator*/ ):java.util.Optional<T>;
	noneMatch( arg0:Predicate<T> ):boolean;
	onClose<S>( arg0:java.lang.Runnable ):S;
	parallel<S>(  ):S;
	peek( arg0:Consumer<T> ):Stream<T>;
	reduce( arg0:BinaryOperator<T> ):java.util.Optional<T>;
	reduce( arg0:T, arg1:BinaryOperator<T> ):T;
	reduce<U>( arg0:U, arg1:BiFunction<U, T, U>, arg2:BinaryOperator<U> ):U;
	sequential<S>(  ):S;
	skip( arg0:long ):Stream<T>;
	sorted(  ):Stream<T>;
	sorted( arg0:any /*java.util.Comparator*/ ):Stream<T>;
	spliterator(  ):any /*java.util.Spliterator*/;
	takeWhile( arg0:Predicate<T> ):Stream<T>;
	toArray(  ):[any /*java.lang.Object*/];
	toArray<A>( arg0:any /*java.util.function.IntFunction*/ ):[A];
	toList(  ):java.util.List<T>;
	unordered<S>(  ):S;

} // end Stream

} // end namespace java.util.stream
declare namespace pintomau.graal_article.spring.greeter {

class GreetCommand/* extends java.lang.Record*/ {

	equals( o:any /*java.lang.Object*/ ):boolean;
	name(  ):string;
	toString(  ):string;

} // end GreetCommand

} // end namespace pintomau.graal_article.spring.greeter
declare namespace pintomau.graal_article.spring.greeter {

class Greeting/* extends java.lang.Record*/ {

	equals( o:any /*java.lang.Object*/ ):boolean;
	greet(  ):string;
	greeting(  ):string;
	name(  ):string;
	toString(  ):string;

} // end Greeting

} // end namespace pintomau.graal_article.spring.greeter
interface BiConsumer<T, U>/*java.util.function.BiConsumer*/ {

	( arg0:T, arg1:U ):void;
	andThen?( arg0:BiConsumer<T, U> ):BiConsumer<T, U>;

} // end BiConsumer
interface BiFunction<T, U, R>/*java.util.function.BiFunction*/ {

	( arg0:T, arg1:U ):R;
	andThen?<V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BiFunction
interface BiPredicate<T, U>/*java.util.function.BiPredicate*/ {

	( arg0:T, arg1:U ):boolean;
	and?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;
	negate?(  ):BiPredicate<T, U>;
	or?( arg0:BiPredicate<T, U> ):BiPredicate<T, U>;

} // end BiPredicate
interface BinaryOperator<T>/*java.util.function.BinaryOperator extends BiFunction<T, any, any>*/ {

	<R,U>( arg0:T, arg1:U ):R;
	// static maxBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	// static minBy<T>( arg0:any /*java.util.Comparator*/ ):BinaryOperator<T>;
	andThen?<R,U,V>( arg0:Func<R, V> ):BiFunction<T, U, V>;

} // end BinaryOperator
interface Consumer<T>/*java.util.function.Consumer*/ {

	( arg0:T ):void;
	andThen?( arg0:Consumer<T> ):Consumer<T>;

} // end Consumer
interface Func<T, R>/*java.util.function.Function*/ {

	( arg0:T ):R;
	// static identity<T>(  ):Func<T, T>;
	andThen?<V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<V>( arg0:Func<V, T> ):Func<V, R>;

} // end Func
interface Predicate<T>/*java.util.function.Predicate*/ {

	( arg0:T ):boolean;
	// static isEqual<T>( arg0:any /*java.lang.Object*/ ):Predicate<T>;
	// static not<T>( arg0:Predicate<T> ):Predicate<T>;
	and?( arg0:Predicate<T> ):Predicate<T>;
	negate?(  ):Predicate<T>;
	or?( arg0:Predicate<T> ):Predicate<T>;

} // end Predicate
interface Supplier<T>/*java.util.function.Supplier*/ {

	(  ):T;

} // end Supplier
interface UnaryOperator<T>/*java.util.function.UnaryOperator extends Function<T, any>*/ {

	<R>( arg0:T ):R;
	// static identity<T>(  ):UnaryOperator<T>;
	andThen?<R,V>( arg0:Func<R, V> ):Func<T, V>;
	compose?<R,V>( arg0:Func<V, T> ):Func<V, R>;

} // end UnaryOperator
