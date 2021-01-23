import { ref } from '@vue/composition-api'

export default function useTest() {
  const count = ref(0);
  const increment = () => {
    count.value += 1;
  };

  return {
    count, increment
  };
}
