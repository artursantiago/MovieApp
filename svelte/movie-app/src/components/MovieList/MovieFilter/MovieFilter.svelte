<script>
import { createEventDispatcher } from 'svelte'

  const dispatcher = createEventDispatcher()

  const filters = [
    {key: 'popular', name: 'Popular'},
    {key: 'now_playing', name: 'Now Playing'},
    {key: 'upcoming', name: 'Upcoming'},
    {key: 'top_rated', name: 'Top Rated'}
  ]

  export let filter

</script>

<div>
  <nav>
    {#each filters as f}
    <div>
      <span class={`item ${f.key === filter.key ? 'active' : ''}`} on:click={() => {dispatcher('filterChanged', f)}}>
        {f.name}
      </span>
    </div>
    {/each}
  </nav>
</div>

<style>
nav {
  display: grid;
  max-width: 500px;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));

  margin: 0 auto 24px;
  transition: all .4s ease-in-out;

}

nav .item {
  text-align: center;
  color: white;

  width: 120px;
  padding: 4px 14px;
  border-radius: 20px;

  cursor: pointer;

  font-weight: 700;
  transition: all .4s ease-in-out;

}

nav .item:nth-child(n):hover {
  background-color: blue;
  transition: all .4s ease-in-out;
}

.item.active {
  background-color: blue;
}

</style>