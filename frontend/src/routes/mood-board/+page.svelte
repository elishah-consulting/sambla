<script lang="ts">
  /**
   * This is the splash page for the application.
   * It is the first page that users see when they visit the site.
   */

  export let data;
  const { is_splash } = data;
  import Typewriter from 'typewriter-effect/dist/core';
  import MarqueeTextWidget from 'svelte-marquee-text-widget';
  import D2Pricing from '$lib/components/D2Pricing.svelte';
  import { PUBLIC_PRODUCT_NAME } from '$env/static/public';
  import { onMount } from 'svelte';

  onMount(() => {
    const typewriter = new Typewriter('#typewriter', {
      strings: [`From Idea to Startup in 2 Hours.`],
      autoStart: true,
      delay: 5,
      cursor: '|',
      deleteSpeed: 10000000,
      loop: false,
    });

    typewriter.start();
  });
</script>

<svelte:head>
  <title>{PUBLIC_PRODUCT_NAME} - Get your app up on the second day.</title>
</svelte:head>

<div class="h-[100px]"></div>
<section class="min-h-screen w-full base-100 p-4 flex flex-col gap-4">
  <h1>Mood board</h1>

  <div class="flex flex-col gap-2 box">
    <h3>Marble</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-marble-50"></div>
      <div class="h-12 w-12 rounded-md bg-marble-100"></div>
      <div class="h-12 w-12 rounded-md bg-marble-200"></div>
      <div class="h-12 w-12 rounded-md bg-marble-300"></div>
      <div class="h-12 w-12 rounded-md bg-marble-400"></div>
      <div class="h-12 w-12 rounded-md bg-marble-500"></div>
      <div class="h-12 w-12 rounded-md bg-marble-600"></div>
      <div class="h-12 w-12 rounded-md bg-marble-700"></div>
      <div class="h-12 w-12 rounded-md bg-marble-800"></div>
      <div class="h-12 w-12 rounded-md bg-marble-900"></div>
    </div>

    <h3>Mushroom</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-mushroom-50"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-100"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-200"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-300"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-400"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-500"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-600"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-700"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-800"></div>
      <div class="h-12 w-12 rounded-md bg-mushroom-900"></div>
    </div>

    <h3>Misc.</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-info"></div>
      <div class="h-12 w-12 rounded-md bg-success"></div>
      <div class="h-12 w-12 rounded-md bg-warning"></div>
      <div class="h-12 w-12 rounded-md bg-error"></div>
    </div>

    <h3>Primary</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-primary"></div>
      <div class="h-12 w-12 rounded-md bg-primary-focus"></div>
      <div class="h-12 w-12 rounded-md bg-primary-content"></div>
    </div>

    <h3>Neutral</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-neutral"></div>
      <div class="h-12 w-12 rounded-md bg-neutral-focus"></div>
      <div class="h-12 w-12 rounded-md bg-neutral-content"></div>
    </div>

    <h3>Secondary</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-secondary"></div>
      <div class="h-12 w-12 rounded-md bg-secondary-focus"></div>
      <div class="h-12 w-12 rounded-md bg-secondary-content"></div>
    </div>

    <h3>Accent</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-accent"></div>
      <div class="h-12 w-12 rounded-md bg-accent-focus"></div>
      <div class="h-12 w-12 rounded-md bg-accent-content"></div>
    </div>

    <h3>Base</h3>
    <div class="p-4 flex gap-4">
      <div class="h-12 w-12 rounded-md bg-base-100"></div>
      <div class="h-12 w-12 rounded-md bg-base-200"></div>
      <div class="h-12 w-12 rounded-md bg-base-300"></div>
      <div class="h-12 w-12 rounded-md bg-base-content"></div>
    </div>
  </div>

  <h1>Hello world</h1>
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor
    sit amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod. Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Quisquam, quod. Quisquam, quod.
  </div>
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>

  <div class="rounded-md bg-neutral text-neutral-content p-4 w-fit">hello world</div>

  <div class="rounded-md bg-secondary text-secondary-content p-4 w-fit">
    hello world <button class="btn">hello</button>
  </div>

  <div class="rounded-md bg-accent text-accent-content p-4 w-fit">hello world</div>

  <progress class="progress progress-error w-56" value="0" max="100"></progress>
  <progress class="progress progress-error w-56" value="10" max="100"></progress>
  <progress class="progress progress-error w-56" value="40" max="100"></progress>
  <progress class="progress progress-error w-56" value="70" max="100"></progress>
  <progress class="progress progress-error w-56" value="100" max="100"></progress>

  <button class="btn btn-normal">Button</button>
  <button class="btn btn-neutral">Neutral</button>
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
  <button class="btn btn-accent">Accent</button>
  <button class="btn btn-ghost">Ghost</button>
  <button class="btn btn-link">Link</button>

  <section class="w-full bg-base-200 p-4 flex flex-col gap-4 rounded-md">
    <button class="btn">Button</button>
    <button class="btn btn-neutral btn-outline border-marble-500 text-marble-500">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </section>

  <div class="box">
    <div class="box-neutral">gello</div>
  </div>

  <details class="dropdown">
    <summary class="btn m-1">open or close</summary>
    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </details>

  <label class="swap">
    <input type="checkbox" />
    <div class="swap-on">ON</div>
    <div class="swap-off">OFF</div>
  </label>

  <h2>Accordion</h2>

  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" checked="checked" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>
  <div class="collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div class="collapse-content">
      <p>hello</p>
    </div>
  </div>

  <h2>Carousel</h2>

  <div class="carousel rounded-box">
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
        alt="Burger"
      />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
        alt="Burger"
      />
    </div>
  </div>

  <div class="chat chat-start">
    <div class="chat-bubble">
      It's over Anakin,
      <br />
      I have the high ground.
    </div>
  </div>
  <div class="chat chat-end">
    <div class="chat-bubble">You underestimate my power!</div>
  </div>
</section>
