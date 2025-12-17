<script lang="ts">
    import Hero from "$lib/components/Hero.svelte";
    import Courses from "$lib/components/Courses.svelte";
    import Projects from "$lib/components/Projects.svelte";
    import About from "$lib/components/About.svelte";
    import Contact from "$lib/components/Contact.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Jayden Wong | Math Teacher & Developer</title>
</svelte:head>

<Courses />
<Projects />
<Hero />
<About />
<Contact />
<Footer />
