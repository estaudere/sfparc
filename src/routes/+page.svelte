<script>
	import Icon from '@iconify/svelte';
	import Person from '$lib/Person.svelte';
</script>

<!-- html head -->
<svelte:head>
	<title>SF Parc</title>
	<meta name="description" content="A home for creative technologists" />
	<meta name="twitter:card" content="summary">
	<meta property="og:url" content="https://sfparc.com" />
	<meta property="og:title" content="SF Parc" />
	<meta property="og:description" content="A home for creative technologists" />
	<meta property="og:image" content="https://pbs.twimg.com/media/GhCBzm5asAAkSe9?format=jpg&name=medium" />
</svelte:head>

<!-- hero -->
<div
	id="hero"
	class="relative flex h-screen w-screen flex-col justify-center overflow-x-clip px-12 pb-48 md:px-48"
>
	<img class="bgim" id="rocket" src="/images/rocket.jpeg" alt="background patent" />
	<img class="bgim" id="gps" src="/images/gps.jpg" alt="background patent" />

	<h1 class="mb-5 font-bluescreen text-9xl">SF PARC</h1>
	<p class="mb-1 flex text-gray-500">
		<Icon icon="fa6-solid:globe" class="my-auto mr-3 inline-block" /> San Francisco, CA
	</p>
	<p class="text-2xl">
		A home for creative, <span class="italic text-primary">ambitious</span> technologists
	</p>
</div>

<!-- about -->
<div class="relative mx-auto mb-24 mt-12 w-3/4 overflow-x-clip text-center md:mt-24 md:w-2/3">
	<img class="bgim" id="engine" src="/images/engine.jpeg" alt="background patent" />

	<p class="mb-5">
		SF Parc is a home for creative technologists — as much a human performance lab as it is a hacker
		house. We believe the future will be built by creative and ambitious young people working
		closely together. Inspired by the iconic Xerox PARC, we are building the next hub for innovation
		out of human collaboration located by the lush Presidio park.
	</p>

	<p class="mb-24">
		Our house is home to engineers, researchers, and artists and is part of the broader network of
		<a href="https://livetheresidency.com" target="_blank">The Residency</a>, a global network of homes for the ambitious, with residents' projects
		collectively valued at over $100 million.
	</p>

	<h2 class="mb-5 text-3xl">house specs</h2>

	<div class="align-center flex flex-row flex-wrap justify-center gap-x-6 gap-y-1 text-center">
		<p class="text-xl text-gray-700">
			<Icon icon="fa6-solid:cube" class="my-auto mr-0.5 inline-block" /> 3d printer
		</p>
		<p class="text-xl text-gray-700">
			<Icon icon="fa6-solid:screwdriver" class="my-auto mr-0.5 inline-block" /> cnc machine
		</p>
		<p class="text-xl text-gray-700">
			<Icon icon="fa6-solid:microchip" class="my-auto mr-0.5 inline-block" /> pcb printer
		</p>
		<p class="text-xl text-gray-700">
			<Icon icon="fa6-solid:water" class="my-auto mr-0.5 inline-block" /> cold plunge
		</p>
		<p class="text-xl text-gray-700">
			<Icon icon="fa6-solid:hard-drive" class="my-auto mr-0.5 inline-block" /> compute [coming soon]
		</p>
	</div>
</div>

<h2 class="text-center text-3xl">residents</h2>
<div
	class="align-center mx-auto mb-24 flex w-3/4 flex-wrap justify-center gap-x-6 gap-y-1 text-center"
>
	<Person
		name="neha desaraju"
		link="https://x.com/nehadesaraju"
		desc="high-fidelity 3d reconstruction"
	/>
	<Person name="mackay grant" link="https://x.com/mackaygg" desc="the next industrial revolution" />
	<Person
		name="nick linck"
		link="https://x.com/nick_linck"
		desc="alternative to college for the ambitious"
	/>
	<Person
		name="ilyas colie"
		link="https://x.com/colie_ilyas"
		desc="automating property management"
	/>
	<Person
		name="christopher arraya"
		link="https://x.com/cjarrayadev"
		desc="automating property management"
	/>
	<Person name="akshay narisetti" link="http://x.com/akshaynarisetti" desc="open source hardware" />
	<Person name="tasha pais" link="https://x.com/TashaPais" desc="open source hardware" />
	<Person
		name="aidan pratt"
		link="https://x.com/aidan__pratt"
		desc="ai for finding automatable workflows"
	/>
	<Person name="chloe samaha" link="https://x.com/bondwithchloe" desc="bond: ai managers" />
	<Person
		name="jolie gan"
		link="https://x.com/joliegans"
		desc="synthetic data generation for research"
	/>
	<Person name="madam" link="https://x.com/madamxcity" desc="network city" />
</div>

<!-- <h2 class="text-3xl text-center">from organizations such as</h2>
<div class="flex flex-wrap gap-x-3 gap-y-1 align-center justify-center w-3/4 mx-auto">
    <img id="park" src="/images/park.jpeg" alt="background patent"/>
    <img id="sf" src="/images/sf.jpeg" alt="background patent"/>
</div> -->

<h2 class="text-center text-3xl mb-5">community</h2>
<p class="mx-auto text-center w-3/4 mb-24">
	We host a variety of workshops, coworking events, hackathons, dinners, and more. Our most notable
	events include <strong class="font-bold">poker nights</strong> (once a month),
	<strong class="font-bold">demos and coworking</strong>
	(using our common office and lounge areas), and <strong class="font-bold">fireside chats</strong>
	from San Francisco's most impactful people. Sign up for our upcoming events on our
	<a href="https://lu.ma/theresidency-bayarea" target="_blank">calendar</a>.
</p>

<p class="mb-4 text-center italic">if you want to</p>
<div class="mx-auto mb-24 flex w-3/4 flex-row gap-x-12">
	<p class="w-full flex-grow">
		stay as a short-term guest, stop by for a day in our office, or host an event with us, contact <a
			href="mailto:neha.desaraju@gmail.com">neha</a
		>
		or <a href="mailto:mail@mackaygrant.com">mackay</a>
	</p>
	<p class="w-full flex-grow">
		live with us for an upcoming cohort, <a href="https://livetheresidency.com"
			>apply to the residency</a
		>
	</p>
</div>

<style lang="postcss">
	.bgim {
		@apply absolute -z-10 hidden opacity-15 lg:block;
	}

	#rocket {
		@apply bottom-0 right-0 h-auto w-[700px]; /* somewhere in the bottom left corner */
	}

	#gps {
		@apply bottom-0 left-0 h-auto w-[500px] translate-x-1/4 rotate-90;
	}

	#engine {
		@apply -translate-y-1/4;
	}
</style>
