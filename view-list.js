  const params = new URLSearchParams(window.location.search)
    const listId = params.get('id')
    console.log(listId);

  const client = supabase.createClient(
    'https://imswfaoxuffnwobfiaag.supabase.co',
    'sb_publishable_OChwwB85lQ9FwXmUYTdNGw_u9Z5dOxR'
  );

  async function loadData() {
    const { data, error } = await client.from('lists').select('*');
    console.log(data);
  }

  loadData();

document.addEventListener('alpine:init', () => {
  Alpine.data('counter', () => ({
    count: 0,
    inc() {
      this.count++
    }
  }))
})