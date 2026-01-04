import next from 'eslint-config-next';

export default [
  { ignores: ['Terminal-portofolio2/**', '.next/**'] },
  ...(Array.isArray(next) ? next : [next]),
];
