import { createApp, ref } from 'vue';
import { getPokemons } from '../../src/utils/getAllPokemons';

describe('Test getAllPokemons util', () => {

  test('should get first 2 pokemons', async () => {
    const limit = 2
    const page = ref(1)
    const { count, results } = await getPokemons(page, limit)

    expect(count).toBeGreaterThan(0)
    expect(results.length).toBe(limit)

  })
})