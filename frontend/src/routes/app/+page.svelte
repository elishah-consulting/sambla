<script lang="ts">
  import D2InputField from '$lib/components/D2InputField.svelte';
  import { superForm } from 'sveltekit-superforms';
  import IcRoundBathtub from '~icons/ic/round-bathtub';
  import IcRoundKingBed from '~icons/ic/round-king-bed';

  export let data;
  const user = data?.user;

  let form;
  let properties = [];
  $: properties = data?.properties || [];

  const {
    form: searchForm,
    submitting: searchFormSubmitting,
    errors: searchFormErrors,
    enhance: searchFormEnhance,
  } = superForm(data.searchForm, {
    clearOnSubmit: 'none',
    resetForm: false,
    onResult: ({ result, cancel }) => {
      properties = result?.data?.form?.message?.properties || [];
      console.log(properties);
    },
    taintedMessage: null,
  });
</script>

{#if user?.type === 'tenant'}
  <div class="flex-1 p-4 flex flex-col gap-4 w-full max-w-6xl">
    <h2 class="">View properties</h2>

    <form
      bind:this={form}
      class="w-full flex flex-col gap-4"
      method="POST"
      action="?/search"
      use:searchFormEnhance
    >
      <div class="flex-1 flex justify-between gap-4">
        <D2InputField
          autofocus
          label="search"
          placeholder="Search"
          name="search"
          bind:value={$searchForm.search}
          errorText={$searchFormErrors.search}
        />
        <button class="btn btn-primary" type="submit">Search</button>
      </div>
    </form>
    {#each properties as property}
      <a class="bg-base-200 rounded-md flex" href="/app/properties/{property.id}">
        <div>
          <img
            src="property.jpg"
            alt="property image"
            class="rounded-tl-md rounded-bl-md h-48 w-48 object-cover mr-4"
          />
        </div>
        <div class="p-4 flex flex-col gap-2">
          <h3 class="">{property?.name}</h3>
          <p>{property?.location}</p>
          <div class="flex gap-4 text-sm">
            <span><IcRoundBathtub class="inline" /> {property?.numBed} bed</span>
            <span><IcRoundKingBed class="inline" />{property?.numBath} bath</span>
          </div>
          <p class="font-bold text-xl">
            <span class="uppercase">{property?.currency}</span>
            {property?.amount}
          </p>
        </div>
      </a>
    {/each}
  </div>
{:else}
  landlord
{/if}
