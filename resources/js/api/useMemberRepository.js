import * as faker from 'faker'

const listOfJenjang = ['S1', 'S2', 'S3'];

const getMember = () => ({
  jenjang: faker.random.arrayElement(listOfJenjang),
  nama_prodi: faker.random.word(),
  pt: {
    lengkap: faker.company.companyName(),
  },
  web_prodi: faker.internet.url(),
});

const getMembers = () => Array.from(Array(100)).map(getMember);

export default function useMemberRepository() {
  return {
    getMember,
    getMembers,
  };
}
