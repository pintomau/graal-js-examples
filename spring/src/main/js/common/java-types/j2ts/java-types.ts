/*
 * Project: java2typescript - https://github.com/bsorrentino/java2typescript
 *
 * Author: bsorrentino 
 *
 * TYPESCRIPT EXPORTED DECLARATIONS
 *
 */
/// <reference path="java.d.ts"/>

interface CollectionsStatic {

	readonly class:any;
	checkedCollection<E>( arg0:java.util.Collection<E>, arg1:java.lang.Class<E> ):java.util.Collection<E>;
	checkedList<E>( arg0:java.util.List<E>, arg1:java.lang.Class<E> ):java.util.List<E>;
	checkedNavigableSet<E>( arg0:any /*java.util.NavigableSet*/, arg1:java.lang.Class<E> ):any /*java.util.NavigableSet*/;
	emptyNavigableSet(  ):any /*java.util.NavigableSet*/;
	checkedQueue<E>( arg0:any /*java.util.Queue*/, arg1:java.lang.Class<E> ):any /*java.util.Queue*/;
	checkedSet<E>( arg0:java.util.Set<E>, arg1:java.lang.Class<E> ):java.util.Set<E>;
	newSetFromMap<E>( arg0:java.util.Map<E, boolean|null> ):java.util.Set<E>;
	checkedSortedSet<E>( arg0:any /*java.util.SortedSet*/, arg1:java.lang.Class<E> ):any /*java.util.SortedSet*/;
	emptySortedSet(  ):any /*java.util.SortedSet*/;
	checkedMap<K,V>( arg0:java.util.Map<K, V>, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):java.util.Map<K, V>;
	singletonMap<K,V>( arg0:K, arg1:V ):java.util.Map<K, V>;
	synchronizedMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	unmodifiableMap<K,V>( arg0:java.util.Map<K, V> ):java.util.Map<K, V>;
	checkedNavigableMap<K,V>( arg0:any /*java.util.NavigableMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.NavigableMap*/;
	synchronizedNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	unmodifiableNavigableMap( arg0:any /*java.util.NavigableMap*/ ):any /*java.util.NavigableMap*/;
	checkedSortedMap<K,V>( arg0:any /*java.util.SortedMap*/, arg1:java.lang.Class<K>, arg2:java.lang.Class<V> ):any /*java.util.SortedMap*/;
	synchronizedSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	unmodifiableSortedMap( arg0:any /*java.util.SortedMap*/ ):any /*java.util.SortedMap*/;
	sort<T>( arg0:java.util.List<T> ):void;
	max<T>( arg0:java.util.Collection<T> ):T;
	min<T>( arg0:java.util.Collection<T> ):T;
	max<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	min<T>( arg0:java.util.Collection<T>, arg1:any /*java.util.Comparator*/ ):T;
	addAll<T>( arg0:java.util.Collection<T>, ...arg1:T[] ):boolean;
	replaceAll<T>( arg0:java.util.List<T>, arg1:T, arg2:T ):boolean;
	binarySearch<T>( arg0:java.util.List<T>, arg1:T, arg2:any /*java.util.Comparator*/ ):int;
	binarySearch<T>( arg0:java.util.List<java.lang.Comparable<T>>, arg1:T ):int;
	list( arg0:any /*java.util.Enumeration*/ ):any /*java.util.ArrayList*/;
	synchronizedCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	unmodifiableCollection<T>( arg0:java.util.Collection<T> ):java.util.Collection<T>;
	reverseOrder(  ):any /*java.util.Comparator*/;
	reverseOrder( arg0:any /*java.util.Comparator*/ ):any /*java.util.Comparator*/;
	emptyEnumeration(  ):any /*java.util.Enumeration*/;
	enumeration<T>( arg0:java.util.Collection<T> ):any /*java.util.Enumeration*/;
	emptyIterator<T>(  ):java.util.Iterator<T>;
	nCopies<T>( arg0:int, arg1:T ):java.util.List<T>;
	singletonList<T>( arg0:T ):java.util.List<T>;
	synchronizedList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	unmodifiableList<T>( arg0:java.util.List<T> ):java.util.List<T>;
	emptyListIterator(  ):any /*java.util.ListIterator*/;
	synchronizedNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	unmodifiableNavigableSet( arg0:any /*java.util.NavigableSet*/ ):any /*java.util.NavigableSet*/;
	asLifoQueue( arg0:any /*java.util.Deque*/ ):any /*java.util.Queue*/;
	singleton<T>( arg0:T ):java.util.Set<T>;
	synchronizedSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	unmodifiableSet<T>( arg0:java.util.Set<T> ):java.util.Set<T>;
	synchronizedSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
	unmodifiableSortedSet( arg0:any /*java.util.SortedSet*/ ):any /*java.util.SortedSet*/;
	copy<T>( arg0:java.util.List<T>, arg1:java.util.List<T> ):void;
	fill<T>( arg0:java.util.List<T>, arg1:T ):void;
	sort<T>( arg0:java.util.List<T>, arg1:any /*java.util.Comparator*/ ):void;
	disjoint( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:java.util.Collection<any /*java.lang.Object*/> ):boolean;
	emptyMap<K,V>(  ):java.util.Map<K, V>;
	emptyNavigableMap(  ):any /*java.util.NavigableMap*/;
	emptySortedMap(  ):any /*java.util.SortedMap*/;
	emptyList<T>(  ):java.util.List<T>;
	emptySet<T>(  ):java.util.Set<T>;
	frequency( arg0:java.util.Collection<any /*java.lang.Object*/>, arg1:any /*java.lang.Object*/ ):int;
	indexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	lastIndexOfSubList( arg0:java.util.List<any /*java.lang.Object*/>, arg1:java.util.List<any /*java.lang.Object*/> ):int;
	reverse( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	rotate( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/> ):void;
	shuffle( arg0:java.util.List<any /*java.lang.Object*/>, arg1:any /*java.util.Random*/ ):void;
	swap( arg0:java.util.List<any /*java.lang.Object*/>, arg1:int, arg2:int ):void;
}

export const Collections: CollectionsStatic = Java.type("java.util.Collections");


interface CollectorsStatic {

	readonly class:any;
	collectingAndThen<RR,R>( arg0:any /*java.util.stream.Collector*/, arg1:Func<R, RR> ):any /*java.util.stream.Collector*/;
	filtering<T>( arg0:Predicate<T>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	toCollection<C>( arg0:Supplier<C> ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	groupingBy<K,T,M>( arg0:Func<T, K>, arg1:Supplier<M>, arg2:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	toMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U,M>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U>, arg3:Supplier<M> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toUnmodifiableMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toUnmodifiableMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U> ):any /*java.util.stream.Collector*/;
	toConcurrentMap<K,T,U>( arg0:Func<T, K>, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	groupingBy<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	groupingByConcurrent<K,T>( arg0:Func<T, K> ):any /*java.util.stream.Collector*/;
	teeing<R2,R,R1>( arg0:any /*java.util.stream.Collector*/, arg1:any /*java.util.stream.Collector*/, arg2:BiFunction<R1, R2, R> ):any /*java.util.stream.Collector*/;
	flatMapping<T,U>( arg0:Func<T, java.util.stream.Stream<U>>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	mapping<T,U>( arg0:Func<T, U>, arg1:any /*java.util.stream.Collector*/ ):any /*java.util.stream.Collector*/;
	reducing<T,U>( arg0:U, arg1:Func<T, U>, arg2:BinaryOperator<U> ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:T, arg1:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	averagingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	averagingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	averagingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	summingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	counting(  ):any /*java.util.stream.Collector*/;
	summingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingDouble( arg0:any /*java.util.function.ToDoubleFunction*/ ):any /*java.util.stream.Collector*/;
	summarizingInt( arg0:any /*java.util.function.ToIntFunction*/ ):any /*java.util.stream.Collector*/;
	toList(  ):any /*java.util.stream.Collector*/;
	toUnmodifiableList(  ):any /*java.util.stream.Collector*/;
	summarizingLong( arg0:any /*java.util.function.ToLongFunction*/ ):any /*java.util.stream.Collector*/;
	partitioningBy<T>( arg0:Predicate<T> ):any /*java.util.stream.Collector*/;
	maxBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	minBy( arg0:any /*java.util.Comparator*/ ):any /*java.util.stream.Collector*/;
	reducing<T>( arg0:BinaryOperator<T> ):any /*java.util.stream.Collector*/;
	toSet(  ):any /*java.util.stream.Collector*/;
	toUnmodifiableSet(  ):any /*java.util.stream.Collector*/;
	joining(  ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
	joining( arg0:any /*java.lang.CharSequence*/, arg1:any /*java.lang.CharSequence*/, arg2:any /*java.lang.CharSequence*/ ):any /*java.util.stream.Collector*/;
}

export const Collectors: CollectorsStatic = Java.type("java.util.stream.Collectors");


interface GreetingStatic {

	readonly class:any;
	new( greet:string, name:string ):pintomau.graal_article.spring.greeter.Greeting;
}

export const Greeting: GreetingStatic = Java.type("pintomau.graal_article.spring.greeter.Greeting");


interface IterableStatic {

	readonly class:any;
	new<T>( arg0:java.lang.Iterable<T> ):java.lang.Iterable<T>;
}

export const Iterable: IterableStatic = Java.type("java.lang.Iterable");


interface OptionalStatic {

	readonly class:any;
	empty<T>(  ):java.util.Optional<T>;
	of<T>( arg0:T ):java.util.Optional<T>;
	ofNullable<T>( arg0:T ):java.util.Optional<T>;
}

export const Optional: OptionalStatic = Java.type("java.util.Optional");


interface StreamStatic {

	readonly class:any;
	builder(  ):any /*java.util.stream.Stream$Builder*/;
	concat<T>( arg0:java.util.stream.Stream<T>, arg1:java.util.stream.Stream<T> ):java.util.stream.Stream<T>;
	empty<T>(  ):java.util.stream.Stream<T>;
	generate<T>( arg0:Supplier<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:Predicate<T>, arg2:UnaryOperator<T> ):java.util.stream.Stream<T>;
	iterate<T>( arg0:T, arg1:UnaryOperator<T> ):java.util.stream.Stream<T>;
	of<T>( arg0:T ):java.util.stream.Stream<T>;
	of<T>( ...arg0:T[] ):java.util.stream.Stream<T>;
	ofNullable<T>( arg0:T ):java.util.stream.Stream<T>;
}

export const Stream: StreamStatic = Java.type("java.util.stream.Stream");


interface StringStatic {

	readonly class:any;
	new( arg0:any /*java.lang.StringBuffer*/ ):string;
	new( arg0:any /*java.lang.StringBuilder*/ ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:bytearray, arg1:string ):string;
	new( arg0:bytearray, arg1:any /*java.nio.charset.Charset*/ ):string;
	new( arg0:bytearray, arg1:int, arg2:int ):string;
	new( arg0:bytearray ):string;
	new( arg0:chararray, arg1:int, arg2:int ):string;
	new( arg0:chararray ):string;
	new( arg0:string ):string;
	new(  ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:string ):string;
	new( arg0:bytearray, arg1:int ):string;
	new( arg0:bytearray, arg1:int, arg2:int, arg3:int ):string;
	new( arg0:[int], arg1:int, arg2:int ):string;
	copyValueOf( arg0:chararray ):string;
	copyValueOf( arg0:chararray, arg1:int, arg2:int ):string;
	format( arg0:string, ...arg1:any /*java.lang.Object*/[] ):string;
	format( arg0:any /*java.util.Locale*/, arg1:string, ...arg2:any /*java.lang.Object*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, ...arg1:any /*java.lang.CharSequence*/[] ):string;
	join( arg0:any /*java.lang.CharSequence*/, arg1:java.lang.Iterable<any /*java.lang.CharSequence*/> ):string;
	valueOf( arg0:boolean ):string;
	valueOf( arg0:any /*char*/ ):string;
	valueOf( arg0:chararray ):string;
	valueOf( arg0:chararray, arg1:int, arg2:int ):string;
	valueOf( arg0:double ):string;
	valueOf( arg0:float ):string;
	valueOf( arg0:int ):string;
	valueOf( arg0:any /*java.lang.Object*/ ):string;
	valueOf( arg0:long ):string;
}

export const String: StringStatic = Java.type("java.lang.String");


