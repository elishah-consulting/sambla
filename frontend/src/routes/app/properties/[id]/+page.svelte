<script lang="ts">
  import D2Breadcrumb from '$lib/components/D2Breadcrumb.svelte';

  export let data;
  const id = data?.id || '';
</script>

<div class="p-4 flex flex-col gap-4">
  <D2Breadcrumb text="Properties > PropertyID" />
  <h1>Property</h1>

  <div class="box">
    <div>ID: {id}</div>
    <div>Rent: 123 AED</div>
  </div>

  <h2>Rents</h2>
  <div class="box">
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
          <tr>
            <th>Tranche</th>
            <th>Status</th>
            <th>Paid at</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr class="bg-base-200">
            <th>1</th>
            <td><span class="badge badge-success text-white">Paid</span></td>
            <td>2021-01-01</td>
          </tr>
          <tr class="bg-base-200">
            <th>2</th>
            <td><span class="badge badge-success text-white">Paid</span></td>
            <td>2021-02-01</td>
          </tr>
          <tr class="bg-base-200">
            <th>3</th>
            <td><span class="badge badge-warning text-white">Upcoming</span></td>
            <td>2021-03-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="flex gap-4">
    <div class="btn btn-error">Cancel plan</div>
  </div>
</div>
